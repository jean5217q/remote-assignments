import React,{Component} from 'react'
import PropTypes from 'prop-types'
import logo from '../../img/logo.svg'

class SmNav extends Component  {
  state = {
    open: false
  }
  handleNavToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  handleCloseNav = (e) => {
    if(!e.target.classList.contains('nav-active')) {
      this.setState({
        open: false
      })
    }
  }
  handleScroll = (e) => {
    e.preventDefault()
  }
  componentDidMount(){
    window.addEventListener('click',this.handleCloseNav)
  }
  componentDidUpdate(){
    if(this.state.open) {
      document.addEventListener('touchmove',this.handleScroll, {passive: false})
    }
    else {
      document.removeEventListener('touchmove',this.handleScroll, {passive: true})
    }  
  }
  
  render(){
    const {navList} = this.props
    let open = this.state.open
    return (
      <nav className="sm-navbar">
        <a className="header-logo" href="a">
          <img src={logo} alt="header-logo"/>
        </a>
        <div 
          className="menu-btn nav-active"
          onClick={this.handleNavToggle}>
          <div className="menu-icon nav-active">
            <span className={`nav-active ${open?'active': null}`}></span>
            <span className={`nav-active ${open?'active': null}`}></span>
            <span className={`nav-active ${open?'active': null}`}></span>
          </div>
        </div>
        <div className={`sm-nav-list nav-active ${open?'show-nav': null}`}>
          <ul className="nav-active">
            {navList.map((el,index)=>
              <li key={index}>
                <a 
                  className="nav-item" 
                  href={el.url}>{el.title}
                </a>
              </li>)}
          </ul>
        </div>
      </nav>
    )
  }
}

SmNav.propTypes = {
  navList: PropTypes.array.isRequired
}

export default SmNav