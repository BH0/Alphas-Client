import React, { Component } from 'react';
import './App.css'; 

import Alphas from "./Components/Alphas"; 

class App extends Component {
  constructor() { 
    super(); 
    this.state = { 
      alphas: [] 
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
        console.log(data); 
        alert(JSON.stringify(data)); 
        // render precise alpha 
      }); 
    }).catch(err => {
      console.log('Fetch Error :-S', err);
    }); 
  } 
  
  render() {
    return (
      <div className="App">
        <h2>Alphas REST Client </h2> 
        <form onSubmit={this.getAlpha.bind(this)}> 
          <input type="text" ref="id" placeholder="search for alpha using their ID" /> 
          <input type="submit" value="Get Alpha" /> 
        </form> 
        <hr /> 
        <Alphas alphas={this.state.alphas} /> 
      </div>
    );
  }
}

export default App;
