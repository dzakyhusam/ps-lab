import React from 'react';
import LoginPage from '../LoginPage/LoginPage';
import MasterPage from '../MainPage/MasterPage';

class CheckSign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
        this.loginClick = this.loginClick.bind(this);
    };

    loginClick() {
        this.setState({isLogin: !this.state.isLogin});
    };

    render() {
        if(this.state.isLogin === false) {
            return <LoginPage loginClick={this.loginClick}/>
        }
        return <MasterPage />
    };
};

export default CheckSign;