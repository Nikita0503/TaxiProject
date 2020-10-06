import React from 'react';
import { View, Platform, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Avatar, Text } from 'react-native-elements';

export default class Driver extends React.Component {
    render(){
      return (
        <TouchableOpacity
            onPress={this.props.onPress}
            style={{width: '100%', height: 70, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
            <View style={{width: '20%', alignItems: 'center'}}>
                <Avatar
                    size="medium"
                    rounded
                    source={{
                        uri:
                        this.props.avatar,
                    }}
                />
            </View>
            <View style={{width: '55%', marginLeft: 10}}>
                <Text style={{fontSize: 22, color: 'white'}}>{this.props.name}</Text>
                <Text style={{fontSize: 14, color: '#BEBEBE'}}>{this.props.distance} m</Text>
            </View>
            <View style={{width: '35%', alignItems: 'flex-end', flexDirection: 'row'}}>
                <Text style={{fontSize: 25, color: 'white'}}>{this.props.rate}<Text style={{fontSize: 18, color: '#BEBEBE'}}> $/km</Text></Text>
            </View>
        </TouchableOpacity>
      );
    }
}