import React from 'react';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';

class Sign extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.signStatus === 'SIGN_UP') {
            return <SignUp />
        }
        else {
            return <SignIn loginClick={this.props.loginClick}/>
        }
    }
}

export default Sign;