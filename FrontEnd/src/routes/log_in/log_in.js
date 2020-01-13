import React, { Component } from 'react';
import { login } from './../UserFunctions';
import {Link } from "react-router-dom"; 
import style from './css/log_in.module.css';
import logo from '../../images/Logo.png';
export default class logIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/`)
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        
          <div className="body">
            <div className="container">
              <Link to='/'>
                <div className={`d-flex justify-content-center `}>
                  <img src={logo} alt="" id={style.logo} />
                </div>
              </Link>
              <div className="row">
                <div className={`offset-lg-4 col-lg-4 ${style.log_in_container}`}>
                  <div className="d-flex justify-content-center">
                    <center>
                      <h1 className={style.header}>
                        Login to Xhevdet Doda
                      </h1>
                    </center>
                  </div>
                  <form noValidate onSubmit={this.onSubmit}>
                    <input  required  type="email"  className={`form-control ${style.input}`} name="email"  placeholder="Enter email" value={this.state.email}  onChange={this.onChange} />
                    <input  required  type="password" className={`form-control ${style.input}`}  name="password" placeholder="Password"  value={this.state.password} onChange={this.onChange}/>
                    {/* <input type="submit" className=${style.button} ></input> */}
                    <button type="submit" className={`${style.button}`}>
                      Sign in
                    </button>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
