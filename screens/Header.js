import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
 

export default class HeaderScreen  extends Component{
    render(){
  return (
    <View style={styles.container}>
      <Text> Diet And Nutrition App</Text>
      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextTitle:{
        alignItems:"center",
        fontSize:20,
        fontWeight:"bold",
        marginTop:50
    }
  });
  