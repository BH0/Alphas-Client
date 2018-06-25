import React, { Component } from 'react'; 
import AlphaItem from './AlphaItem'; 

class Alphas extends Component { 
    render() { 
        let alphaItems; 
        if (this.props.alphas) { 
            alphaItems = this.props.alphas.map(alpha => { 
                return ( 
                    <AlphaItem key={alpha._id} alpha={alpha} /> 
                ); 
            }); 
        } 
        return ( 
            <div className="Alphas"> 
                <h2>Alphas</h2> 
                {alphaItems} 
            </div> 
        ); 
    }
}

export default Alphas; 