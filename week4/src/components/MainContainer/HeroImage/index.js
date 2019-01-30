import React,{Component} from 'react'
import PropTypes from 'prop-types'

class HeroImage extends Component {
  state={
    change: false,
    data: [
      {
        span: ['Let\'s','visit','in'],
        desc: '說走就走！來場完美的京都の旅',
        lgUrl: require('../../../img/homepage/hero_img/lg/lg-hero-01.jpg'),
        smUrl: require('../../../img/homepage/hero_img/sm/sm-hero-01.jpg')
      },
      {
        span: ['Things','to','do','in'],
        desc: '玩轉京都，在地人推薦的十大玩法',
        lgUrl: require('../../../img/homepage/hero_img/lg/lg-hero-02.jpg'),
        smUrl: require('../../../img/homepage/hero_img/sm/sm-hero-02.jpg')
      }
    ]
  }
  handleHeroImage = () => {
    this.setState({
      change: !this.state.change
    })
  }
  componentDidUpdate(){
    let arr = this.state.data
    if(this.props.mobile) {
      document.documentElement.style.setProperty('--first', `url('${arr[0].smUrl}')`)
      document.documentElement.style.setProperty('--second', `url('${arr[1].smUrl}')`)
    }
    else {
      document.documentElement.style.setProperty('--first', `url('${arr[0].lgUrl}')`)
      document.documentElement.style.setProperty('--second', `url('${arr[1].lgUrl}')`)
    }
  }
  render(){
    let arr = this.state.data
    let heroImg = this.state.change?arr[1]:arr[0]
    return (
      <div 
        className="top-hero" 
        onClick={this.handleHeroImage}>
        <div className={`top-hero-image ${this.state.change?'changeBgi': 'null'}`}></div>
        <div className="hero-image-title">
          <div className="sub">
            {heroImg.span.map((text,index)=><span key={index}>{text}</span>)}
          </div>
          <div className="head">KYOTO</div>
          <div className="desc"> 
            <div className="line"></div>
            <div className="text">{heroImg.desc}</div>
          </div>
        </div>
      </div>
    )
  }
}

HeroImage.propsTypes = {
  mobile: PropTypes.bool.isRequired
}

export default HeroImage