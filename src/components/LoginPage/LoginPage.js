import React from 'react';
import logo from '../../assets/images/logo.svg';
import logoDTETI from '../../assets/images/logo_dteti.jpg';
import '../../style/LoginPage.css';
import '../../style/LoginPageResponsive.css';
import Sign from './Sign.js';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: 'NOT_LOGGED_IN',
      chooseSign: 'SIGN_IN',
    };
  };

  signupClick() {
    this.setState({chooseSign: 'SIGN_UP'});
  };

  signinClick() {
    this.setState({chooseSign: 'SIGN_IN'});
  };

  render() {
    return (
      <div className="login-page">
        
        <div className="left-container">
          <img className="app-logo" src={ logo } alt=""></img>
          <img className="dteti-logo" src={ logoDTETI } alt=""></img>
        </div>

        <div className="right-container">
          <div className="sign-box">
            <img className="mobile-logo" src={ logo } alt=""></img>
            <div className="choose-sign">
              <button className="choose-signup" onClick={ ()=>this.signupClick() }>Sign Up</button>
              <button className="choose-signin" onClick={ ()=>this.signinClick() }>Sign In</button>
            </div>
            <Sign signStatus={ this.state.chooseSign } loginClick={ this.props.loginClick }/>
          </div>
        </div>
        
      </div>
    )
  };
};

export default LoginPage;