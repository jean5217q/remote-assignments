import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

class App extends Component {
  state = {
    mobile: false
  }
  photoResize = () => {
    if (window.matchMedia("(max-width: 500px)").matches) {
      this.setState({
        mobile: true
      })
    } 
    else {
      this.setState({
        mobile: false
      })
    }
  }
  componentDidMount(){
    this.photoResize()
  }
  componentDidUpdate(){
    window.onresize = this.photoResize 
  }
  render() {
    return (
      <div>
        <Header/>
        <MainContainer mobile={this.state.mobile}/>
      </div>
    )
  }
}



export default App;
