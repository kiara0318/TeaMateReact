import React, { Component } from 'react';
import './App.css';
import AdventuresTitle from './AdventuresTitle';
import AdventureHeader from './AdventureHeader';
import AdventureFooter from './AdventureFooter';
import AdventureItem from './AdventureItem';
import img_elTentIcon from './images/AdventuresScreen_elTentIcon.png';
import btn_icon_219355 from './images/btn_icon_219355.png';
import DrawerMenu from './DrawerMenu';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class AdventuresScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      drawerMenu_isOpen: false,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elIconButton = (ev) => {
    this.toggle_drawerMenu();
  
  }
  
  
  toggle_drawerMenu = () => {
    this.setState({drawerMenu_isOpen: !this.state.drawerMenu_isOpen});
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
    
    // eslint-disable-next-line
    const dataSheet_listData1 = this.props.dataSheets['listData1'];
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    listComps_list['_head'] = <AdventureHeader appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Head item for this list
    items_list.push({key: '_head', _componentId: '_head'});  // A data item to indicate the head item
    
    listComps_list['_tail'] = <AdventureFooter appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Tail item for this list
    
    items_list = items_list.concat(this.props.appActions.getDataSheet('listData1').items);
    items_list.push({key: '_tail', _componentId: '_tail'});  // A data item to indicate the tail item
    this._elList_items = [];
    
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    const style_elTentIcon = {
      backgroundImage: 'url('+img_elTentIcon+')',
      backgroundSize: '100% 100%',
     };
    
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_219355+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '79.747%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_drawerMenu = {
      pointerEvents: (this.state.drawerMenu_isOpen) ? 'auto' : 'none'
    }
    
    return (
      <div className="AppScreen AdventuresScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elAdventuresHead">
            <div>
              <AdventuresTitle {...this.props} ref={(el)=> this._elAdventuresHead = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elList">
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <AdventureItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'listData1'} dataSheetRow={row} {...{ 'title': row['title'], 'description': row['description'], 'picture': row['picture'], }} ref={(el) => {if (el) this._elList_items.push(el)}} />;
                return (<div key={row.key}>
                    {itemComp}
                  </div>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </div>
          </div>
        </div>
        <Appbar className="navBar">
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="elTentIcon" style={style_elTentIcon} />
            <button className="actionFont elIconButton" style={style_elIconButton} onClick={this.onClick_elIconButton}  />
          </div>
        </div>
        <div className="drawer drawerMenu" style={style_drawerMenu} onClick={this.toggle_drawerMenu}>
          <div className={"drawerContent" + (this.state.drawerMenu_isOpen ? " drawerOpen": " drawerClosedRight")} onClick={(e) => {e.stopPropagation();}}>
            <DrawerMenu appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} closeDrawer={this.toggle_drawerMenu} />
          </div>
        </div>
      </div>
    )
  }
  
}
