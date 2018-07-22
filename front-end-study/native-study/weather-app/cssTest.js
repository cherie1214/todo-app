import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
            <Text style={styles.boxText}>A</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
            <Text style={styles.boxText}>B</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
            <Text style={styles.boxText}>C</Text>
        </View>
        <View style={[styles.box, styles.box4]}>
            <Text style={styles.boxText}>D</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
      flex:0,
      flexGrow:1,
      flexBasis:50,
      height:50,
  },
  boxText: {
      color:'#fff',
      fontSize:15,
  },
  box1: {
      backgroundColor:'red',
  },
  box2: {
      backgroundColor:'yellow',
  },
  box3: {
      backgroundColor:'green',
  },
  box4: {
      backgroundColor:'blue',
  },
});
