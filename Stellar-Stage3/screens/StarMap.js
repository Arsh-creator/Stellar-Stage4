import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Image, ImageBackground, Platform, TextInput} from 'react-native';
import axios from 'axios'; 
import {WebView} from 'react-native-webview';

export default class StarMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude: '',
            longitude: ''
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <SafeAreaView style={styles.android}/>
                <WebView 
                scalesPageToFit= {true}
                source={{uri: path}}
                style={{marginTop: 20, marginBottom: 20}}
                />
                <View>
                <Text style={styles.title}>
                    Star Map
                </Text>
                </View>
                <View>
                    <TextInput 
                    style={styles.input}
                    placeholder='Enter your Latitude'
                    placeholderTextColor= '#fff#000000'
                    onChangeText={(text)=>{
                        this.setState({
                            latitude: text
                        })
                    }} />
                    <TextInput 
                    style={styles.input}
                    placeholder='Enter your Longitude'
                    placeholderTextColor= '#fff#000000'
                    onChangeText={(text)=>{
                        this.setState({
                            longitude: text
                        })
                    }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    android:{
        marginTop: Platform.OS === 'android' ?StatusBar.currentHeight :0
    },
    title:{
        flex: 0.15,
        color: '#000000',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: 30,
        marginBottom: 30
      },
      input:{
          borderRadius: 50,
          borderWidth: 1,
          borderColor: 'gray',
          width: 175,
          height: 40,
          marginLeft: 600,
          marginBottom: 30,
          textAlign: 'center'
      },
      map:{
          width: '100%',
          height: '100%'
      }
})

const {longitude, latitude} = this.state
const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`