import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,SafeAreaView,Platform,Status, TouchableOpacity} from 'react-native';
import HeaderScreen from './Header';
import DietScreen from './DietScreen';
import HomeScreen from './HomeScreen';

export default class FormScreen  extends Component{
  constructor(props){
    super(props)
this.state={
  Bmi:"",
  Bp:"",
  Sugar:""
}

  }
    render(){
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <HeaderScreen/>
      <Text>Fill The Form</Text>
     
      <TextInput
      onChangeText={(Bmi)=>this.setState({Bmi})}
      placeholder={"Enter BMI Score"}
      placeholderTextColor="blue"
      style={styles.inputStyle}
     />

<TextInput
      onChangeText={(Bp)=>this.setState({Bp})}
      placeholder={"Enter BP Score"}
      placeholderTextColor="blue"
      style={styles.inputStyle}
      />

<TextInput
      onChangeText={(Sugar)=>this.setState({Sugar})}
      placeholder={"Enter Sugar Score"}
      placeholderTextColor="blue"
      style={styles.inputStyle}
      />

      <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen",{
        Bmi:this.state.Bmi,
        Bp:this.state.Bp,
        Sugar:this.state.Sugar
      })}>
         <Text>Submit</Text>
         </TouchableOpacity>
     
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
     
    backgroundColor: '#fff',
    
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight :25,
  },
  inputStyle:{
    borderWidth:2,
    borderColor:"red",
    borderRadius:50,
    color:"#15eac3",
    fontSize:18,
    paddingLeft:10,
    marginTop:50,
  }
});
