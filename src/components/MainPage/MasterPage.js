import React from 'react';
import logo from '../../assets/images/logo.svg';
import searchIcon from '../../assets/icons/search.png';
import profilePhoto from '../../assets/images/fotojas.jpg';
import '../../style/MasterPage.css';
import Dashboard from './Body/Dashboard';

class MasterPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      accountName: "Dzaky Husam",
      accountJob: "Student",
      searchFocus: false,
      sidebarSelected: "DASHBOARD",
      profileView: true
    }
    this.searchOnFocus = this.searchOnFocus.bind(this);
    this.searchNotOnFocus = this.searchNotOnFocus.bind(this);
    this.sidebarHandleClick = this.sidebarHandleClick.bind(this);
    this.profilePhotoHandleClick = this.profilePhotoHandleClick.bind(this);
  }

  searchOnFocus() {
    this.setState({ searchFocus: true});
  }

  searchNotOnFocus() {
    this.setState({ searchFocus: false });
  }

  sidebarHandleClick(input) {
    this.setState({ sidebarSelected: input });
  }

  profilePhotoHandleClick() {
    this.setState({ profileView: !this.state.profileView });
  }

  render() {
    return(
      <div className="master-page">
        <div className="header-wrapper">
          <div className="left-header-container">
            <img src={ logo } className="header-logo" alt="logo" />
            <form className={ this.state.searchFocus ? "searchbox-container focus" : "searchbox-container notfocus"}>
              <img src={ searchIcon } alt=""></img>
              <input onFocus={ this.searchOnFocus } onBlur={ this.searchNotOnFocus } type="text" placeholder="Search"/>
            </form>
          </div>
          
          <div className="right-header-container">
            <btn className="btn notification">
              <i className="fa fa-bell fa-2x"></i>
              <span className="badge">3</span>
            </btn>
            <div className="account-name">
              <h2>{ this.state.accountName }</h2>
              <h3>{ this.state.accountJob }</h3>
            </div>
            <div className="account-picture" onClick={ this.profilePhotoHandleClick }>
              <img src={ profilePhoto } alt="profile picture"></img>
            </div>
          </div>
        </div>

        <div className="body-wrapper">
          <div className="sidebar-container">
            
            <div className="sidebar-container-main">
              <btn className={ this.state.sidebarSelected === "DASHBOARD" ? "btn-sidebar sidebar-active" : "btn-sidebar sidebar-deactive"} onClick={ () => { this.sidebarHandleClick("DASHBOARD") } }>
                <div className="sidebar-icon dashboard">
                  <i className="fa fa-desktop"></i>
                </div>
                <div className="sidebar-text dashboard">
                  <h3>Dashboard</h3>
                </div>
              </btn>

              <btn className={ this.state.sidebarSelected === "RESULT" ? "btn-sidebar sidebar-active" : "btn-sidebar sidebar-deactive"} onClick={ () => { this.sidebarHandleClick("RESULT") } }>
                <div className="sidebar-icon result">
                  <i className="fa fa-bar-chart"></i>
                </div>
                <div className="sidebar-text result">
                  <h3>Result</h3>
                </div>
              </btn>
          
              <btn className={ this.state.sidebarSelected === "LESSON" ? "btn-sidebar sidebar-active" : "btn-sidebar sidebar-deactive"} onClick={ () => { this.sidebarHandleClick("LESSON") } }>
                <div className="sidebar-icon lesson">
                  <i className="fa fa-book"></i>
                </div>
                <div className="sidebar-text lesson">
                  <h3>Lesson</h3>
                </div>
              </btn>
                    
              <btn className={ this.state.sidebarSelected === "MESSAGE" ? "btn-sidebar sidebar-active" : "btn-sidebar sidebar-deactive"} onClick={ () => { this.sidebarHandleClick("MESSAGE") } }>
                <div className="sidebar-icon message">
                  <i className="fa fa-inbox"></i>
                </div>
                <div className="sidebar-text message">
                  <h3>Message</h3>
                </div>
              </btn>
            </div>
                  
            <div className="sidebar-container-setting">
              <btn className="btn-sidebar">
                <div className="sidebar-icon setting">
                  <i className="fa fa-cog"></i>
                </div>
                <div className="sidebar-text setting">
                  <h3>Setting</h3>
                </div>
              </btn>
            </div>

          </div>

          <div className="content-container">
            <Dashboard
              accountName = { this.state.accountName } 
            />
          </div>

          <div className="profile-container">
            
          </div>

        </div>
      </div>
    )
  };
};

export default MasterPage;