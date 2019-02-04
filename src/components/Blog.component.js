import React, { Component } from 'react';
import '../App.css';
import Nav from './nav.component';
class Blog extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      items: [],

    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
         <Nav/>
        <div className="row blogs ">
              
          
            {
              items.map(item => (
            
               <div className=" col col-md-5 well container">
                <p>{item.title}</p>
                <span className="lift">{item.id}</span>
                <span className="right">{item.userId}</span>
               </div>
               
               
              ))
            }
         
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;