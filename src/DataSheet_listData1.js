// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';
import datasheet_listData1_row0_picture from './images/datasheet_listData1_row0_picture.png';
import datasheet_listData1_row1_picture from './images/datasheet_listData1_row1_picture.png';
import datasheet_listData1_row2_picture from './images/datasheet_listData1_row2_picture.png';
import datasheet_listData1_row3_picture from './images/datasheet_listData1_row3_picture.png';
import datasheet_listData1_row4_picture from './images/datasheet_listData1_row4_picture.png';
import datasheet_listData1_row5_picture from './images/datasheet_listData1_row5_picture.png';
import datasheet_listData1_row6_picture from './images/datasheet_listData1_row6_picture.png';

export default class DataSheet_listData1 extends DataSheetBase {

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
    item['title'] = "Marsh walking";
    item['picture'] = datasheet_listData1_row0_picture;
    item['description'] = "See the marshes up close... As in, \"water in your boots\" close!";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Midnight aurora";
    item['picture'] = datasheet_listData1_row1_picture;
    item['description'] = "The most magical spectacle of the northern sky.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Mountain views";
    item['picture'] = datasheet_listData1_row2_picture;
    item['description'] = "Mountains shaped by long winters and short summers.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Ice fishing intro";
    item['picture'] = datasheet_listData1_row3_picture;
    item['description'] = "A key to survival in the winter.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Rugged landscapes";
    item['picture'] = datasheet_listData1_row4_picture;
    item['description'] = "Incredible views of the tundra.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Ice fishing marathon";
    item['picture'] = datasheet_listData1_row5_picture;
    item['description'] = "Participate in the marathon at the darkest day of the year!";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['title'] = "Swamp swimming";
    item['picture'] = datasheet_listData1_row6_picture;
    item['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    item.key = key++;
  }

}
