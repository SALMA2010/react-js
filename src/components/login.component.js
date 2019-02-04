import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';
import user from '../img/user.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserDetails } from '../redux/action/data';

import '../App.css';
import Input from './input.componemt';
import { Validation } from './loginValidationClass'

class Login extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            login: {
                email: '',
                password: ''
            },
            error: {
                emailerror: '',
                passworderror: ''
            }
        }


    }
    componentWillReceiveProps(nextprops) {
        console.log(nextprops);
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.login)

        const valid = new Validation().validation(this.state.login, this.state.error)
        console.log(valid)
        if (valid) {
            this.setState(prevState => ({
                ...prevState,
                error: {
                    ...prevState.error,

                    emailerror: valid.emailerror,
                    passworderror: valid.passworderror,
                }
            }))

        }
        if (valid == true) {
            browserHistory.push('/home');
        }
        this.props.setUserDetails({
            user: this.state.login
          });
    }
    Handlerchange = (e) => {
        const { login } = this.state;
        login[e.target.name] = e.target.value;
        this.setState(prevState => ({
            ...prevState,
            login: login
        }))
    }
    render() {
        return (
            <div className="bg">
           
                <form onSubmit={this.onSubmit} className="col col-md-4">
                    <div className="form-group">

                        <img src={user } />
                        <Input type="text" action={this.Handlerchange} name="email" placeholder="write your email" class="form-control" value={this.state.email} />
                        <p>{this.state.error.emailerror}</p>
                        <Input type="password" action={this.Handlerchange} name="password" placeholder="write your password" class="form-control" value={this.state.password} />
                        <p>{this.state.error.passworderror}</p>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
                <div>{this.state.userDetails}</div>
            </div>
        );
    }
}
Login.propTypes = {
    setUserDetails: PropTypes.func.isRequired
  };
  
const mapStateToProps = state => ({
    userDetails: state.user.data
  });
export default connect(mapStateToProps, { setUserDetails })(Login);