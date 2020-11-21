import React, { Component } from 'react';
import './App.css';

export default class AdventureHeader extends Component {

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

  render() {
    const value_title = this.props.title;
    
    const style_elTitle = {
      fontSize: 16.7,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'center',
     };
    
    const value_text2 = this.props.description;
    
    const style_elText2 = {
      fontSize: 13.0,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'center',
     };
    
    const value_text1 = this.props.description;
    
    const style_elText1 = {
      fontSize: 13.0,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'center',
     };
    
    return (
      <div className="AdventureHeader">
        <div className="foreground">
          <div className="font-avenirNextRegular  elTitle" style={style_elTitle}>
            <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.adventureheader_title_958940}</span>)}</div>
          </div>
          <div className="font-avenirNextRegular  elText2" style={style_elText2}>
            <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.adventureheader_text2_423291}</span>)}</div>
          </div>
          <div className="font-avenirNextRegular  elText1" style={style_elText1}>
            <div>{value_text1 !== undefined ? value_text1 : (<span className="propValueMissing">{this.props.locStrings.adventureheader_text1_856388}</span>)}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
