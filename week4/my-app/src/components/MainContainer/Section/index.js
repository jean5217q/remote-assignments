import React,{Component} from 'react'
import PropTypes from 'prop-types'
import SectionBlock from './SectionBlock'
import Button from './SectionBlock/Button'
// import a from '../../../img/homepage/experience/lg/01.jpg'

class Section extends Component {
  state= {
    hide: false,
    show: false,
    data: [
      {
        title: '京都風情',
        photo:[
          {
            title: '文化藝術',
            lgUrl: require('../../../img/homepage/experience/lg/01.jpg'),
            smUrl: require('../../../img/homepage/experience/sm/01.jpg')
          },
          {
            title: '道地美食',
            lgUrl: require('../../../img/homepage/experience/lg/02.jpg'),
            smUrl: require('../../../img/homepage/experience/sm/02.jpg')
          },
          {
            title: '人文歷史',
            lgUrl: require('../../../img/homepage/experience/lg/03.jpg'),
            smUrl: require('../../../img/homepage/experience/sm/03.jpg')
          },
          {
            title: '自然風景',
            lgUrl: require('../../../img/homepage/experience/lg/04.jpg'),
            smUrl: require('../../../img/homepage/experience/sm/04.jpg')
          }
        ]
      },
      {
        title: '四季精選',
        photo:[
          {
            title: 'SPRING / 春',
            lgUrl: require('../../../img/homepage/season/lg/01.jpg'),
            smUrl: require('../../../img/homepage/season/sm/01.jpg')
          },
          {
            title: 'SUMMER / 夏',
            lgUrl: require('../../../img/homepage/season/lg/02.jpg'),
            smUrl: require('../../../img/homepage/season/sm/02.jpg')
          },
          {
            title: 'AUTUMN / 秋',
            lgUrl: require('../../../img/homepage/season/lg/03.jpg'),
            smUrl: require('../../../img/homepage/season/sm/03.jpg')
          },
          {
            title: 'WINTER / 冬',
            lgUrl: require('../../../img/homepage/season/lg/04.jpg'),
            smUrl: require('../../../img/homepage/season/sm/04.jpg')
          }
        ]
      }
    ]
  }
  showSection = () => {
    this.setState({
      hide: true
    })
    setTimeout(()=>{
      this.setState({
        show: true
      })
    },120)
  }
  render() {
    const data = this.state.data
    return (
      <div className="section-container">
        <div className="section-inner">
          <SectionBlock 
            name="section-block"
            mobile={this.props.mobile}
            item={data[0]}/>
          <Button 
            hide={this.state.hide}
            show={this.state.show}
            showSection={this.showSection}/>
          <SectionBlock 
            name={`section-block show-area ${this.state.show?'show':null}`}
            mobile={this.props.mobile}
            item={data[1]}/>
        </div>
      </div>
    )
  }
}

Section.propTypes = {
  mobile: PropTypes.bool.isRequired
}

export default Section