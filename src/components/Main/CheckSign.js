import React from 'react';
import LoginPage from '../LoginPage/LoginPage';
import MasterPage from '../MainPage/MasterPage';

class CheckSign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: 'NOT_LOGGED_IN'
        };
        this.loginClick = this.loginClick.bind(this);
    };

    loginClick() {
        this.setState({isLogin: 'LOGGED_IN'});
    };

    render() {
        if(this.state.isLogin === 'NOT_LOGGED_IN') {
            return <LoginPage loginClick={this.loginClick}/>
        }
        return <MasterPage />
    };
};

export default CheckSign;