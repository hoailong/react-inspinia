import $ from 'jquery';
import React, { Component } from 'react';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import { Link } from 'react-router-dom';

import '../../assets/dependencies';

export default class Login extends Component {
  componentDidMount() {
    // eslint-disable-next-line func-names
    $(window).bind('load resize', function() {
      correctHeight();
      detectBody();
    });
  }

  render() {
    return (
      <div className="gray-bg" >
        <div className="middle-box text-center loginscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
          <h3>Welcome to True API</h3>
          <p>Login in. To see it in action.</p>
          <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder={'Email'} required=""/>
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder={'Password'} required=""/>
          </div>
          <button type="button" id="btnLogin" className="btn btn-primary block full-width m-b">{'Login'}</button>
          <Link to="/app/home">
            <small>Forgot Password</small>
          </Link>
          <p className="text-muted text-center">
            <Link to="/app/home">Don't have an account</Link>
          </p>
          <Link className="btn btn-sm btn-white btn-block" to="/app/home">Create Account</Link>
          <Link className="btn btn-sm btn-white btn-block" to="/app/home">Activate Account</Link>
          <p className="m-t">
            <small>&copy; 2019 Avanza Solutions. All rights reserved</small>
          </p>
        </div>
      </div>
    );
  }
}
