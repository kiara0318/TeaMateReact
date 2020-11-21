import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
// eslint-disable-next-line
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// eslint-disable-next-line
import * as util from 'util';
import './App.css';
import DetailsScreen from './DetailsScreen.js';
import InfoScreen from './InfoScreen.js';
import AdventuresScreen from './AdventuresScreen.js';
import LoginScreen from './LoginScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_listData1 from './DataSheet_listData1.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['listData1'] = new DataSheet_listData1('listData1', this.dataSheetDidUpdate);
    this.dataSheetLoaded = {};

    this.dataSlots = {};
    this.dataSlots['ds_username'] = "";
    this.dataSlots['userEmail'] = "";
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_userpassword'] = "";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);

    this.state = {
      screenTransitionForward: true,
    }

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.
    this.props.history.push('/'+screenId, {...props, appActions: null, locStrings: null, dataSheets: null});
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    this.props.history.goBack();
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});
      this.setState({});
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    if (value === this.dataSlots[slotId])
      return;

    this.dataSlots[slotId] = value;

    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_username': this.dataSlots['ds_username'],
        'userEmail': this.dataSlots['userEmail'],
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_userpassword': this.dataSlots['ds_userpassword'],
      };
      switch (screenId) {
        default:
          return null;
        case 'details':
          return (<DetailsScreen {...screenProps} />)
        case 'info':
          return (<InfoScreen {...screenProps} />)
        case 'adventures':
          return (<AdventuresScreen {...screenProps} />)
        case 'login':
          return (<LoginScreen {...screenProps} />)
      }
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/" render={(props) => makeElementForScreen('login', props.location.state, true, true)} exact />
          <Route path="/details" render={(props) => {
            return makeElementForScreen('details', props.location.state, true, true);
          }} />
          <Route path="/info" render={(props) => {
            return makeElementForScreen('info', props.location.state, true, true);
          }} />
          <Route path="/adventures" render={(props) => {
            return makeElementForScreen('adventures', props.location.state, true, true);
          }} />
          <Route path="/login" render={(props) => {
            return makeElementForScreen('login', props.location.state, true, true);
          }} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)
