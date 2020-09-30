import React from 'react';
import { View, FlatList, Platform, Image, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab, Card } from 'native-base';
import { Icon } from 'react-native-elements';

export default class HistoryScreen extends React.Component {

    render(){
      return (
        <View style={styles.container}>
            <FlatList
                style={{width: '100%'}}
                data={this.props.trips}
                renderItem={({ item }) => 
                    <Item
                        time={item.time}
                        distance={item.distance}
                        spent={item.spent}
                        from={item.from}
                        to={item.to}
                        car={item.car}
                        avatar={item.avatar}
                        rating={item.rating}
                    />}
                keyExtractor={item => item.id}
            />
        </View>
      );
    }
}

class Item extends React.Component {

    state = {
        itemHeight: new Animated.Value(100),
        subItemHeight: new Animated.Value(0),
        subItemOpacity: new Animated.Value(0),
        showItem: false
    }

    showItem = () => {
        Animated.timing(this.state.itemHeight, {
          toValue: 180,
          duration: 100
        }).start();
        Animated.timing(this.state.subItemHeight, {
            toValue: 80,
            duration: 100
        }).start(({finished}) => {
            Animated.timing(this.state.subItemOpacity, {
                toValue: 1,
                duration: 400
              }).start();
        });
    };

    hideItem = () => {
        Animated.timing(this.state.itemHeight, {
          toValue: 100,
          duration: 100
        }).start();
        Animated.timing(this.state.subItemOpacity, {
            toValue: 0,
            duration: 400
          }).start(({finished}) => {
            Animated.timing(this.state.subItemHeight, {
                toValue: 0,
                duration: 100
            }).start();
        });
        
    };

    render(){
        return(
            <Animated.View style={{width: '100%', height: this.state.itemHeight}}>
                <TouchableOpacity
                    onPress={() => {
                        if(this.state.showItem){
                            this.hideItem();
                            this.setState({showItem: false})
                        }else{
                            this.showItem();
                            this.setState({showItem: true})
                        }
                    }}
                    style={{width: '100%', height: 100, marginVertical: 1, flexDirection: 'row', backgroundColor: '#f0f0f0', alignItems: 'flex-start', paddingTop: 10}}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', width: '80%', alignItems: 'center'}}>
                            <Image
                                style={{width: 80, height: 80, borderRadius: 100, marginHorizontal: 10}}
                                source={{
                                    uri:
                                    this.props.avatar,
                                }}
                            />
                            <View style={{width: '30%', alignItems: 'center'}}>
                                <Text>Time:</Text>
                                <Text style={{fontSize: 20}}>{this.props.time}</Text>
                            </View>
                            <View style={{width: '30%', alignItems: 'center'}}>
                                <Text>Distance:</Text>
                                <Text style={{fontSize: 20}}>{this.props.distance}</Text>
                            </View>
                            <View style={{width: '30%', alignItems: 'center'}}>
                                <Text>Spent:</Text>
                                <Text style={{fontSize: 20}}>{this.props.spent}</Text>
                            </View>
                        </View>
                        <Animated.View style={{opacity: this.state.subItemOpacity, width: '100%', marginTop: 10, height: this.state.subItemHeight, backgroundColor: '#f0f0f0', flexDirection: 'row', }}>
                            <View style={{opacity: this.state.showItem ? 1 : 0, width: '75%', flexDirection: 'row', borderRadius: 15, marginLeft: 5, justifyContent: 'space-around'}}>
                                <View style={{width: '95%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <View style={{width: '40%', alignItems: 'center'}}>
                                        <Text>{this.props.from}</Text>
                                    </View>
                                    <Icon
                                        size={20}
                                        name={"arrowright"}
                                        color='green'
                                        type="antdesign"
                                    />
                                    <View style={{width: '40%', alignItems: 'center'}}>
                                        <Text>{this.props.to}</Text>
                                    </View>
                                </View>        
                            </View>
                            <Card style={{opacity: this.state.showItem ? 1 : 0, width: '20%', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
                                <Text>rating:</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 24, color: 'yellow'}}>{this.props.rating}</Text>
                                    <Icon
                                        size={20}
                                        name={"star"}
                                        color='yellow'
                                        type="entypo"
                                    />
                                </View>
                            </Card>
                        </Animated.View>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        )    
    }
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 40 : 10, 
      alignItems: 'center'
    }
});
  