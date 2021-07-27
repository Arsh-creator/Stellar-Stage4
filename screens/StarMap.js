import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, TextInput} from 'react-native'; 
import {WebView} from 'react-native-webview';

export default class StarMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude: '28.70',
            longitude: '77.10'
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
      }
})

const path = `https://virtualsky.lco.global/embed/index.html?longitude=${this.state.longitude}&latitude=${this.state.latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`