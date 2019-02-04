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
         
        <div className="container blogs ">
              
        <div className="row">
            {
              items.map(item => (
                <div className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                  <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">{item.id}</strong>
                    <h3 className="mb-0">
                      {item.title}
                    </h3>
                    <div className="mb-1 text-muted">{item.userId}</div>
                    
                  </div>
                </div>
              </div>
               
               
               
              ))
            }
         
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;