import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor: '#5F4461',
  },
});

export default Container;