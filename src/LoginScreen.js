import React, { Component } from 'react';
import './App.css';
import img_elAca06b1e9c6a60d6091f38b5bc584bee from './images/LoginScreen_elAca06b1e9c6a60d6091f38b5bc584bee_828553.jpg';
import img_elTentIcon from './images/LoginScreen_elTentIcon.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      userNameField: '',
      passwordField: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_elUserNameField = (event) => {
    this.setState({userNameField: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_username", event.target.value);
  }
  
  textInputChanged_elPasswordField = (event) => {
    this.setState({passwordField: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_userpassword", event.target.value);
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'Adventures'
    this.props.appActions.goToScreen('adventures', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elAca06b1e9c6a60d6091f38b5bc584bee = {
      backgroundImage: 'url('+img_elAca06b1e9c6a60d6091f38b5bc584bee+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const style_elTentIcon = {
      backgroundImage: 'url('+img_elTentIcon+')',
      backgroundSize: '100% 100%',
     };
    const style_elHeaderTitle = {
      fontSize: 30.1,
      color: 'black',
      textAlign: 'center',
     };
    
    const style_elUserNameField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      fontSize: 17.2,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elPasswordField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      fontSize: 17.2,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elAca06b1e9c6a60d6091f38b5bc584bee" style={style_elAca06b1e9c6a60d6091f38b5bc584bee} />
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elTentIcon">
            <div style={style_elTentIcon} />
          </div>
          
          <div className="elHeaderTitle">
            <div className="font-avenirNextDemiBold" style={style_elHeaderTitle}>
              <div>{this.props.locStrings.login_headertitle_957097}</div>
            </div>
          </div>
          
          <div className="elUserNameField">
            <input className="font-avenirNextRegular" style={style_elUserNameField} type="text" placeholder={this.props.locStrings.login_usernamefield_184628} onChange={this.textInputChanged_elUserNameField} value={this.state.userNameField}  />
          </div>
          
          <div className="elPasswordField">
            <input className="font-avenirNextRegular" style={style_elPasswordField} type="password" placeholder={this.props.locStrings.login_passwordfield_268823} onChange={this.textInputChanged_elPasswordField} value={this.state.passwordField}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  variant="raised" color="primary" onClick={this.onClick_elButton} >
              {this.props.locStrings.login_button_71145}
            </Button>
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="elGraphic" />
            <div className="elGraphic2" />
          </div>
        </div>
      </div>
    )
  }
  
}
