import React,{Component} from 'react'
import PropTypes from 'prop-types'

class HeroImage extends Component {
  state={
    change: false,
    data: [
      {
        span: ['Let\'s','visit','in'],
        desc: '說走就走！來場完美的京都の旅',
        lgUrl: require('../../../img/homepage/hero_img/lg/01.jpg'),
        smUrl: require('../../../img/homepage/hero_img/sm/01.jpg')
      },
      {
        span: ['Things','to','do','in'],
        desc: '玩轉京都，在地人推薦的十大玩法',
        lgUrl: require('../../../img/homepage/hero_img/lg/02.jpg'),
        smUrl: require('../../../img/homepage/hero_img/sm/02.jpg')
      }
    ]
  }
  handleHeroImage = () => {
    this.setState({
      change: !this.state.change
    })
  }
  render(){
    let mobile = this.props.mobile
    let change = this.state.change
    let array = this.state.data
    let heroImg = this.state.change ? array[1]:array[0]
    return (
      <div 
        className="top-hero" 
        onClick={this.handleHeroImage}>
        <div 
          className="hero-image"
          style={{
            backgroundImage: `url('${mobile ? heroImg.smUrl : heroImg.lgUrl}')`,
            opacity: `${change?'0': '1'}`}}>
        </div>
        <div 
          className="after-image"
          style={{ backgroundImage: `url('${mobile ? heroImg.smUrl : heroImg.lgUrl}')`}}>
        </div>
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