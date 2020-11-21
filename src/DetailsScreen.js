import React, { Component } from 'react';
import './App.css';
import img_elPicture from './images/DetailsScreen_elPicture_21119.jpg';
import btn_icon_back_details from './images/btn_icon_back_details.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class DetailsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, picture, description, title

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
    
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elPicture = {
      backgroundImage: 'url('+(this.props.picture || img_elPicture)+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    let transformPropValue_title = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      return "Your next adventure could be... "+(input ? input : "This adventure");
    }
    
    const value_title = transformPropValue_title(this.props.title);
    
    const style_elTitle = {
      color: '#4a494a',
      textAlign: 'left',
     };
    
    const style_elLine = {
      borderTop: '1px solid rgba(10, 58, 119, 0.2574)',
     };
    
    const value_descriptionText = this.props.description;
    
    const style_elDescriptionText = {
      fontSize: 18.3,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'left',
     };
    const style_elLongTextCopy = {
      color: '#4a494a',
      textAlign: 'left',
     };
    
    return (
      <div className="AppScreen DetailsScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elPicture">
            <div style={style_elPicture} />
          </div>
          
          <div className="elTitle">
            <div className="headlineFont" style={style_elTitle}>
              <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.details_title_557971}</span>)}</div>
            </div>
          </div>
          
          <div className="elLine">
            <div style={style_elLine} />
          </div>
          
          <div className="elDescriptionText">
            <div className="font-avenirNextItalic" style={style_elDescriptionText}>
              <div>{value_descriptionText !== undefined ? value_descriptionText : (<span className="propValueMissing">{this.props.locStrings.details_descriptiontext_307016}</span>)}</div>
            </div>
          </div>
          
          <div className="elLongTextCopy">
            <div className="baseFont" style={style_elLongTextCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.details_longtextcopy_777767.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">{this.props.title}</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_details} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
