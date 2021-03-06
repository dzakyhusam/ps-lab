import React from 'react';
import '../../style/LoginPage.css';

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup">
        <h1>Sign Up</h1>
        
        <form className="signup-form">
          <h3>Name</h3>
          <div className="signup-input name">
            <i class="material-icons">person_outline</i>
            <input type="text" spellcheck="false" placeholder="Your name" name="name"></input>
          </div>
          <h3>Email Address</h3>
          <div className="signup-input email">
            <i class="material-icons">mail_outline</i>
            <input type="email" spellcheck="false" placeholder="Your email address" name="email"></input>
          </div>
          <h3>Password</h3>
          <div className="signup-input password">
            <i class="material-icons">lock_outline</i>
            <input type="password" placeholder="Your password" name="password"></input>
          </div>
          <button className="signup-button" type="submit" onClick="">Register</button>
        </form>

      </div>
    )
  };
};

export default SignUp;