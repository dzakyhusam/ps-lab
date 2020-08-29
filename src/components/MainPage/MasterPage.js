import React from 'react';
import logo from '../../assets/images/logo.svg';
import '../../style/MasterPage.css';
import Dashboard from './Body/Dashboard';

class MasterPage extends React.Component{
    render() {
        return(
            <div className="App">
                {/*Header*/}
                <header>
                    <div className="container-fluid con-header">
                        <div className="row">
                            {/*Bagian Logo*/}
                            <div className="col-2">
                                <img src={logo} className="header-logo" alt="logo" />
                            </div>
                            {/*Bagian Searchbox*/}
                            <div className="col-6">
                                <div className="header-form">
                                    <form className="form-search">
                                        <input className="form-control" type="text" placeholder="Search"/>
                                    </form>
                                </div>
                            </div>
                            {/*Bagian Akun*/}
                            <div className="col-4">
                                <div className="header-account">
                                    <btn className="btn notification">
                                        <i className="fa fa-bell fa-2x"></i>
                                        <span className="badge">3</span>
                                    </btn>
                                    <div className="account-name">
                                        <h2>Dzaky Husam</h2>
                                        <h3>Student</h3>
                                    </div>
                                    <div className="account-picture">
                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile picture"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/*Body*/}
                <div className="App-body">
                    <div className="container-fluid con-body">
                        <div className="row">
                            <div className="col-2">
                                {/*Bagian Sidebar*/}
                                <div className="sidebar">
                                    {/*Sidebar Dashboard*/}
                                    <btn className="btn btn-sidebar">
                                        <div className="sidebar-icon dashboard">
                                            <i className="fa fa-desktop"></i>
                                        </div>
                                        <div className="sidebar-text dashboard">
                                            <h3>Dashboard</h3>
                                        </div>
                                    </btn>
                                    {/*Sidebar Result*/}
                                    <btn className="btn btn-sidebar">
                                        <div className="sidebar-icon result">
                                            <i className="fa fa-bar-chart"></i>
                                        </div>
                                        <div className="sidebar-text result">
                                            <h3>Result</h3>
                                        </div>
                                    </btn>
                                    {/*Sidebar Lesson*/}
                                    <btn className="btn btn-sidebar">
                                        <div className="sidebar-icon lesson">
                                            <i className="fa fa-book"></i>
                                        </div>
                                        <div className="sidebar-text lesson">
                                            <h3>Lesson</h3>
                                        </div>
                                    </btn>
                                    {/*Sidebar Message*/}
                                    <btn className="btn btn-sidebar">
                                        <div className="sidebar-icon message">
                                            <i className="fa fa-inbox"></i>
                                        </div>
                                        <div className="sidebar-text message">
                                            <h3>Message</h3>
                                        </div>
                                    </btn>
                                    {/*Sidebar Setting*/}
                                    <div className="setting-position">
                                        <btn className="btn btn-sidebar">
                                            <div className="sidebar-icon setting">
                                                <i className="fa fa-cog"></i>
                                            </div>
                                            <div className="sidebar-text setting">
                                                <h3>Setting</h3>
                                            </div>
                                        </btn>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="container-fluid box">
                                    <Dashboard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default MasterPage;