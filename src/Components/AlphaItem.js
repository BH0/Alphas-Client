import React, { Component } from 'react'; 

class AlphaItem extends Component { 
    render() { 
        return ( 
            <div className="Alpha"> 
                <h3>{this.props.alpha.fullname}</h3> 
                <em>ID: {this.props.alpha._id}</em> 
                <p>Age: {this.props.alpha.age}</p> 
                <p>abillity: {this.props.alpha.abillity}</p> 
                <p>Illness: {this.props.alpha.illness}</p> 
                {/* <img src={this.props.alpha.image} */}
            </div> 
        ); 
    }
} 

export default AlphaItem; 