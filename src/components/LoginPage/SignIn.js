import React from 'react';
import '../../style/LoginPage.css';
import CheckSign from '../Main/CheckSign';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    render() {
        return (
            <div className="signin">
                <h1>Sign In</h1>
                <form className="signin-form">
                    <h3>Email Address</h3>
                    <div className="signin-input email">
                        <i class="material-icons">mail_outline</i>
                        <input type="email" spellcheck="false" placeholder="Your email address" name="email"></input>
                    </div>
                    <br></br>
                    <h3>Password</h3>
                    <div className="signin-input password">
                        <i class="material-icons">lock_outline</i>
                        <input type="password" placeholder="Your password" name="password"></input>
                    </div>
                    <br></br>
                    <br></br>
                    <button className="signin-button" type="submit" onClick={()=>{this.props.loginClick()}}>Log In</button>
                </form>
            </div>
        )
    };
};

export default SignIn;