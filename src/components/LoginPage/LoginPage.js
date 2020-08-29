import React from 'react';
import logo from '../../assets/images/logo.svg';
import logoDTETI from '../../assets/images/logo_dteti.jpg';
import '../../style/LoginPage.css';
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
            <div className="container-fluid loginpage">
                <div className="row">
                    <div className="col-8 left-side">
                        <img className="app-logo" src={logo}></img>
                        <br></br>
                        <img className="dteti-logo" src={logoDTETI}></img>
                    </div>
                    <div className="col-4 right-side">
                        <div className="sign-box">
                            <div className="choose-sign">
                                <button className="choose-signup" onClick={()=>this.signupClick()} >Sign Up</button>
                                <button className="choose-signin" onClick={()=>this.signinClick()} >Sign In</button>
                            </div>
                           <Sign signStatus={this.state.chooseSign} loginClick={this.props.loginClick}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default LoginPage;