import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';

import '../App.css';

class Nav extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbar navbar-expand-lg navbar-light bg-light">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                               <a onClick={()=>{ browserHistory.push('/home')}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>{ browserHistory.push('/blog')}}>Blog</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>{ browserHistory.push('/about')}}>About</a>
                            </li>
                        </ul>
                       <ul className="nav navbar-nav navbar-right">
                       <li className="nav-item">
                               <a onClick={()=>{ browserHistory.push('/login')}}>Logout</a>
                            </li> 
                       </ul>    
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Nav;