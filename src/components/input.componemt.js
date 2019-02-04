import React, { Component } from 'react';
import '../App.css';

class Input extends Component {
  render() {
    return (
      <React.Fragment>
       <input 
        className={this.props.class} 
        onChange={this.props.action} 
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        name={this.props.name}/>
        
      </React.Fragment>  
    );
  }
}

export default Input;
