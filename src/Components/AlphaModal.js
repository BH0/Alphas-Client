import React from 'react'; 
import 'bulma/css/bulma.css'; 

export default ({active, alpha, closeModal}) => 
    <div className="alpha-modal"> {/* Will open when an alpha's ID is entered into the input-field*/}
        <div className={'modal' + (active ? ' is-active' : '')}>    
            <div className="modal-background"><h3>About Alpha</h3></div>
            <div className="modal-content">
                <b>{alpha.fullname}</b><br /> 
                <b>Age: {alpha.age} </b><br /> 
                <b>Abillity: {alpha.abillity}</b><br />   
                <b>Illness: {alpha.illness}</b><br /> 
                <b>{alpha._id}</b> 
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div> 
    </div> 