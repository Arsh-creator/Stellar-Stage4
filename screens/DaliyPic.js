import * as React from 'react';
import {Text, View, StyleSheet, Alert, SafeAreaView, StatusBar, Platform, TouchableOpacity, Linking, ImageBackground} from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component{
    constructor(props){
        super(props);
        this.state={
            apod: {}
        }
    }

    getApod=async()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=bk6Y9jeXfGGwL2pGTU9z2DZWYSXZKJhaoDz0PIYQ')
        .then(response =>{
            this.setState({
                apod: response.data
            })
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
    }

    componentDidMount(){
        this.getApod();   
    }

    render(){
        return(
            <View>
                <SafeAreaView style={styles.android} />
                <ImageBackground
                source={require('../assets/space.gif')}>
                <Text style={styles.title}>
                    Daily Pic!
                </Text>
                <View>
                    <TouchableOpacity
                    onPress={()=>Linking.openURL(this.state.apod.url).catch(er => console.error("Couldn't load page".er))}>
                        <Image 
                        style={{position:'absolute',justifyContent:'center',}}
                        source={require('../assets/play-video.png')}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text> {this.state.apod.explanation} </Text>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    android:{
        marginTop: Platform.OS === 'android' ?StatusBar.currentHeight:0
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
})