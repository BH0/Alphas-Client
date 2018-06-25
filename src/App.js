import React, { Component } from 'react';
import './App.css'; 

import Alphas from "./Components/Alphas"; 
import AlphaModal from "./Components/AlphaModal"; 

class App extends Component {
  constructor() { 
    super(); 
    this.state = { 
      alphas: [], 
      alphaGotten: {}, 
      showAlpha: false
    }
  }  

  getAlphas() { 
    // should move "http://hocalhost:4002" into the state as "root-endpoint-url" 
    fetch('http://localhost:4002/alphas').then(response =>  { 
      if (response.status !== 200) { 
        alert(response.status); 
      return; 
    } 
    response.json().then(data => {
      this.setState({alphas: data.alphas });
    }); 
    }).catch(err => {
      console.log('Fetch Error :-S', err);
    }); 
  } 

  componentDidMount() { 
    this.getAlphas(); 
  } 
  componentWillMount() { 
    this.getAlphas(); 
  }

  getAlpha(e) { // getAlpha() 
    e.preventDefault(); 
    // should move "http://hocalhost:4002/" into the state as "root-endpoint-url" 
    fetch('http://localhost:4002/alphas/'+this.refs.id.value).then(response =>  { 
      if (response.status !== 200) { 
        alert(response.status); 
      return; 
    } 
    response.json().then(data => {
        this.setState({ alphaGotten: data, showAlpha: true }); 
      }); 
    }).catch(err => {
      console.log('Fetch Error :-S', err);
    }); 
  } 
  
  closeModal() { // closes the alpha modal which is opened when the "getAlpha" method is invoked 
    this.setState({showAlpha: false}) 
  }
  render() {
    return (
      <div className="App">
        <h2>Alphas REST Client </h2> 
        <form onSubmit={this.getAlpha.bind(this)}> 
          <input type="text" ref="id" placeholder="search for alpha using their ID" /> 
          <input type="submit" value="Get Alpha" /> 
        </form> 
        <AlphaModal active={this.state.showAlpha} alpha={this.state.alphaGotten} closeModal={this.closeModal.bind(this)} /> 
        <hr /> 
        <Alphas alphas={this.state.alphas} /> 
      </div>
    );
  }
}

export default App;
