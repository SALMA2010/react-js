import React, { Component } from 'react';
import '../App.css';
import Nav from './nav.component'
import user from '../img/user.png'




class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }


  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="homecontent">
          <img src={user} />
          <h1>Hello from Home</h1>
          <p>{this.props.userDetails}</p>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;