/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ListView,
Image
} from 'react-native';

export default class ListViewDemo extends Component {
  constructor(props) {
    super(props);
    //创建一个DataSource对象，在构造函数中指定ListView的取值策略
    var ds = new ListView.DataSource({

      rowHasChanged: (r1, r2) => r1 !== r2,//更新row的策略
      // getSectionHeaderData:(dataBlob, sectionID)=>s1!==s2,//指定我们更新sectionHeader的策略
      // getRowData:(dataBlob, sectionID, rowID)=>s1!==s2,//表明我们将以何种方式从dataBlob（数据源）中提取出rowData
      sectionHeaderHasChanged:(s1,s2)=>s1!==s2//指定我们更新sectionHeader的策略

    });//创建数据源
    this.state = {
      dataSource: ds.cloneWithRowsAndSections({
        "section1":{"pic":"zhoujie"},
        "section2":{"pic":""},
        "section3":{"pic":""}
        ,"section4":{"pic":""},
        "section5":{"pic":""},
        "section6":{"pic":""}
        ,"section7":{"pic":""},
        "section8":{"pic":""},
        "section9":{"pic":""}
        ,"section10":{"pic":""},
        "section11":{"pic":""},
        "section12":{"pic":""},
        "section13":{"pic":""}}),
    };
  }
  renderSectionHeader(sectionData, sectionId){
    return (<View>
      <View style={styles.sections}><Text>{sectionId}</Text></View>
    </View>);
  }
  renderRow(rowData, sectionID, rowID, highlightRow){
    return <View style={styles.row}>

                <Image source={require('./public/images/b.png')} style={styles.image} />
           </View>
  }
  render() {
    return (
        <ListView
            dataSource={this.state.dataSource}//列表依赖的数据源
            renderRow={this.renderRow}//数据源来实例化一个ListView组件
            renderSectionHeader={this.renderSectionHeader}////如果提供了此函数，会为每个小节(section)渲染一个粘性的标题。
            stickySectionHeadersEnabled={true}//设置小节标题(section header)是否具有粘性。
        />
    );
  }
}

const styles = StyleSheet.create({
  sections:{
    height:50,
    backgroundColor:"red"
  },
  row:{
    height:100
  },
  image:{
    // width:200,
    height:100
  }
});

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
