import React, { Component } from 'react';
import './App.css';
import img_elPicture from './images/AdventureItem_elPicture_333009.jpg';

export default class AdventureItem extends Component {

  // Properties used by this component:
  // title, description, picture

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

  onClick_elHotspot = (ev) => {
    // Go to screen 'Details'
    this.props.appActions.goToScreen('details', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    
    const style_elClickableBg = {
      background: 'rgba(12, 55, 119, 0.114)',
     };
    
    const value_title = this.props.title;
    
    const style_elTitle = {
      fontSize: 14.6,
      color: '#4a494a',
      textAlign: 'left',
     };
    
    const value_shortDescription = this.props.description;
    
    const style_elShortDescription = {
      fontSize: 13.0,
      color: '#4a494a',
      textAlign: 'left',
     };
    const style_elPicture = {
      backgroundImage: 'url('+(this.props.picture || img_elPicture)+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const style_elHotspot = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AdventureItem">
        <div className="background">
          <div className="elClickableBg" style={style_elClickableBg} />
        </div>
        
        <div className="layoutFlow">
          <div className="elTitle">
            <div className="font-avenirNextMedium" style={style_elTitle}>
              <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.adventureitem_title_282724}</span>)}</div>
            </div>
          </div>
          
          <div className="elShortDescription">
            <div className="font-avenirNextRegular" style={style_elShortDescription}>
              <div>{value_shortDescription !== undefined ? value_shortDescription : (<span className="propValueMissing">{this.props.locStrings.adventureitem_shortdescription_638166}</span>)}</div>
            </div>
          </div>
        </div>
        
        <div className="foreground">
          <div className="elPicture" style={style_elPicture} />
          <div className="actionFont elHotspot" style={style_elHotspot} onClick={this.onClick_elHotspot}  />
        </div>
      </div>
    )
  }
  
}
