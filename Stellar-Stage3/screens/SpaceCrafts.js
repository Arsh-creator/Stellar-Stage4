import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SpaceCrafts extends React.Component{
    render(){
        return(
            <View>
                <Text style={{
                  flex: 0.15,
                  color: '#000000',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  fontSize: 30,
                  marginTop: 250
                }}>
                    Space Crafts!
                </Text>
            </View>
        );
    }
}