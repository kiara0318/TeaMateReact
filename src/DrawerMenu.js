import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class DrawerMenu extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elButton = (ev) => {
    // Go to screen 'Info'
    this.props.appActions.goToScreen('info', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    const style_elBackgroundBlue = {
      width: '100%',
      height: '100%',
     };
    const style_elBackgroundBlue_outer = {
      backgroundColor: '#0c478b',
     };
    const style_elBackgroundWhite = {
      width: '100%',
      height: '100%',
     };
    const style_elBackgroundWhite_outer = {
      backgroundColor: '#feffff',
     };
    
    const style_elButton = {
      display: 'block',
      color: '#fff',
      textAlign: 'center',
      backgroundColor: '#0074f1',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="DrawerMenu">
        <div className="background">
          <div className="containerMinHeight elBackgroundBlue" style={style_elBackgroundBlue_outer}>
            <div style={style_elBackgroundBlue} />
          </div>
          
          <div className="containerMinHeight elBackgroundWhite" style={style_elBackgroundWhite_outer}>
            <div style={style_elBackgroundWhite} />
          </div>
        </div>
        
        <div className="layoutFlow">
          <div className="elButton">
            <Button className="actionFont" style={style_elButton} onClick={this.onClick_elButton} >
              {this.props.locStrings.drawermenu_button_86435}
            </Button>
          </div>
        </div>
        
      </div>
    )
  }
  
}
