import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

let width100 = Dimensions.get('window').width;
let height100 = Dimensions.get('window').height;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text1}>
          I love cats
        </Text>
        <Text style={styles.text2}>
          두번째 텍스트 {'\n'} br이래
        </Text>
        <Text style={{margin:15, padding:15, fontSize:30, color:"#fff", borderRadius: 20, borderWidth: 2,  borderColor: '#fff', backgroundColor:'#225fc1'}}>
          세번째 텍스트는 블락 스타일 왜 안돼?
        </Text>
        <Image
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
          style={{ height: height100*.33, width: width100 }}
        />

        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd10qzPX1-z8gJxZ1qr6BkH5aq9lRcMlk_yQ8jkj0y4NU0bkxCbA' }}
          style={{ marginTop:15, height: height100*.5, width: width100, borderRadius: 100 }}
        />

        <Card title="Local Modules">
          <AssetExample />
        </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#abc6f2',
  },
  text1: {
    padding:15,
    width: width100,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor:'#333'
  },
  text2: {
    padding:15,
    color:'#225fc1',
    textAlign: 'center',
    backgroundColor:'#fff',
  },
});
