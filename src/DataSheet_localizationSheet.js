// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "login_headertitle_957097";
    item['en'] = "TeaMate";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_usernamefield_184628";
    item['en'] = "User name";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_passwordfield_268823";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_71145";
    item['en'] = "Sign Up";
    
    item = {};
    this.items.push(item);
    item['key'] = "details_longtextcopy_777767";
    item['en'] = "Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.\n\nDonec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet.\n\nUt convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.\n\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "details_title_557971";
    item['en'] = "Your next adventure could be... This adventure";
    
    item = {};
    this.items.push(item);
    item['key'] = "details_descriptiontext_307016";
    item['en'] = "(Short description)";
    
    item = {};
    this.items.push(item);
    item['key'] = "adventurestitle_headertext_66245";
    item['en'] = "Your guide\nto Lapland’s\nhidden\ntreasures";
    
    item = {};
    this.items.push(item);
    item['key'] = "adventureitem_title_282724";
    item['en'] = "Marsh walking";
    
    item = {};
    this.items.push(item);
    item['key'] = "adventureitem_shortdescription_638166";
    item['en'] = "Maecenas congue ligula ac quam viverra nec consectetur.";
    
    item = {};
    this.items.push(item);
    item['key'] = "adventurefooter_title_361945";
    item['en'] = "Your dream vacation here";
    
    item = {};
    this.items.push(item);
    item['key'] = "adventurefooter_shortdescription_191399";
    item['en'] = "Looking for a unique experience?\nLet us design one for you.\n\nCall Aslak at +555 999 5555";
    
    item = {};
    this.items.push(item);
    item['key'] = "adventureheader_text1_856388";
    item['en'] = "We’ll take you to the hidden spots and quiet getaways — or the busiest reindeer crossings!";
    
    item = {};
    this.items.push(item);
    item['key'] = "adventureheader_text2_423291";
    item['en'] = "(This demo of React Studio is responsive, so try resizing your browser to phone size too.)";
    
    item = {};
    this.items.push(item);
    item['key'] = "adventureheader_title_958940";
    item['en'] = "See the best of Lapland.";
    
    item = {};
    this.items.push(item);
    item['key'] = "info_text_107980";
    item['en'] = "This is app was designed and exported to React code with React Studio.";
    
    item = {};
    this.items.push(item);
    item['key'] = "drawermenu_button_86435";
    item['en'] = "Info";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
