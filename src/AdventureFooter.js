import React, { Component } from 'react';
import './App.css';

export default class AdventureFooter extends Component {

  // Properties used by this component:
  // title, description

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

  onClick_elShortDescription = (ev) => {
    alert("In a real app, we could open a link to a phone number here.")
  
  }
  
  
  render() {
    
    const style_elClickableBg = {
      background: 'rgba(12, 55, 119, 0.114)',
     };
    
    const value_shortDescription = this.props.description;
    
    const style_elShortDescription = {
      fontSize: 13.0,
      color: '#4a494a',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const value_title = this.props.title;
    
    const style_elTitle = {
      fontSize: 16.7,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'left',
     };
    
    return (
      <div className="AdventureFooter">
        <div className="background">
          <div className="containerMinHeight elClickableBg" style={style_elClickableBg} />
        </div>
        
        <div className="foreground">
          <div className="font-avenirNextRegular  elShortDescription" style={style_elShortDescription} onClick={this.onClick_elShortDescription} >
            <div>{value_shortDescription !== undefined ? value_shortDescription : (<span className="propValueMissing">{this.props.locStrings.adventurefooter_shortdescription_191399}</span>)}</div>
          </div>
          <div className="font-avenirNextBold  elTitle" style={style_elTitle}>
            <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.adventurefooter_title_361945}</span>)}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
