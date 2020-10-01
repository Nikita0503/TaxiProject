import React from 'react';
import { Text, View, Platform, StyleSheet, Button, KeyboardAvoidingView,
  FlatList, Animated, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Fab, Card } from 'native-base';
import { Overlay, Slider, AirbnbRating, Input, Icon, Avatar } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import Chat from '../../../components/Chat'

import Driver from '../../../components/Driver';



export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  
  state = {
    fadeAnim: new Animated.Value(0),
    latitude: 50.5092579,
    longitude: 30.4979999
  }

  closeChat = () => this.props.setShowChat(false)

  showDrivers = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 210,
      duration: 300
    }).start();
  };

  hileDrivers = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 300
    }).start();
  };

  drow = () => {
    let timerId = setInterval(() => this.setState({latitude: this.state.latitude - 0.00005, longitude: this.state.longitude - 0.000001}), 100);
    setTimeout(() => { clearInterval(timerId);}, 20000);
  }

  render(){
    return (
      <View style={styles.container}>
        <MapView
          style={{
            height: '100%',
            width: '100%'}}
          region={{
            latitude: this.state.latitude,//50.5071379,
            longitude: this.state.longitude,//30.4973214,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}/>
        </MapView>
        <View style={{width: '100%'}}>
          <TouchableOpacity onPress={() => {
              if(this.props.showDrivers){
                this.hileDrivers();
                this.props.setShowDrivers(false)
              }else{
                this.showDrivers();
                this.props.setShowDrivers(true)
              }
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 2}}>
              <Text style={{marginEnd: 10}}>4 drivers near you</Text>
              <Icon 
                size={20}
                name={this.props.showDrivers ? "down" : "up"}
                color='#03AC13'
                type="ant-design"
              />
            </View>
          </TouchableOpacity>
          <Animated.FlatList
            style={{width: '100%', height: this.state.fadeAnim, }}
            data={this.props.drivers}
            renderItem={({ item }) => 
              <Driver 
                name={item.name}
                avatar={item.avatar}
                distance={item.distance}
                rate={item.rate}
                onPress={() => {
                  this.props.setShowDriver(true)
                }} 
              />}
              keyExtractor={item => item.id}
          />
        </View>
        {this.getFilterFAB()}
        {this.getChatFAB()}
        {this.getOverlayFilter()}
        {this.getOverlayChat()}
        {this.getOverlaySelectedDriver()}
      </View>
      
    );
  }

  getFilterFAB(){
    return(
      <Fab
        active={true}
        direction="up"
        containerStyle={{marginTop: Platform.OS === 'ios' ? 20 : 0}}
        style={{ backgroundColor: '#5067FF' }}
        position="topRight"
        onPress={() => this.props.setShowFilter(true)}>
          <Icon 
            size={25}
            name="filter"
            color='white'
            type="ant-design"
          />
      </Fab>
    )
  }

  getChatFAB(){
    if(this.props.driver == null) return
    return(
      <Fab
        active={true}
        direction="up"
        containerStyle={{marginTop: Platform.OS === 'ios' ? 90 : 70}}
        style={{ backgroundColor: 'red' }}
        position="topRight"
        onPress={() => this.props.setShowChat(true)}>
          <Icon 
            size={25}
            name="wechat"
            color='white'
            type="ant-design"
          />
      </Fab>)
  }

  getOverlayFilter(){
    return(
      <Overlay overlayStyle={{height: '90%'}} isVisible={this.props.showFilter}>
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
        <ScrollView style={{width: 300, height: 400}}>
        <View style={{width: 300, height: '90%'}}>
          <View>
            <Text style={{fontSize: 18}}>Sort by distance:</Text>
            <Slider
              maximumValue={10}
              minimumValue={1}
              step={1}
              value={this.props.distanceFromMe}
              onValueChange={(value) => {
                this.props.setDistanceFromMe(value)
              }}
            />
            <Text>distance from me: less then {this.props.distanceFromMe} km</Text>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 18}}>Sort by car class:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
              <TouchableOpacity style={{width: 140, height: 100, backgroundColor: this.props.selectedCars[0] ? 'blue' : 'gray', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[0] = !cars[0];
                  this.props.setSelectedCars(cars)
                }
                }>
                <Image style={{width: 130, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/car.png')}/>
                <Text style={{fontSize: 18, color: 'white'}}>Default</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: 140, height: 100, backgroundColor: this.props.selectedCars[1] ? 'blue' : 'gray', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[1] = !cars[1];
                  this.props.setSelectedCars(cars)
                }}>
                <Image style={{width: 130, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/sport.png')}/>
                <Text style={{fontSize: 18, color: 'white'}}>Sport</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
              <TouchableOpacity style={{width: 140, height: 100, backgroundColor: this.props.selectedCars[2] ? 'blue' : 'gray', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[2] = !cars[2];
                  this.props.setSelectedCars(cars)
                }}>
                <Image style={{width: 130, height: 70, resizeMode: 'contain', }} source={require('../../../content/images/jeep.png')}/>
                <Text style={{fontSize: 18, color: 'white'}}>Jeep</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: 140, height: 100, backgroundColor: this.props.selectedCars[3] ? 'blue' : 'gray', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[3] = !cars[3];
                  this.props.setSelectedCars(cars)
                }}>
                <Image style={{width: 130, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/truck.png')}/>
                <Text style={{fontSize: 18, color: 'white'}}>Truck</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
              <TouchableOpacity style={{width: 290, height: 100, backgroundColor: this.props.selectedCars[4] ? 'blue' : 'gray', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[4] = !cars[4];
                  this.props.setSelectedCars(cars)
                }}>
                <Image style={{width: 290, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/limousine.png')}/>
                <Text style={{fontSize: 18, color: 'white'}}>Luxury</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text>I prefer: {this.getSelectedCars()}</Text>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 18}}>Sort by rating:</Text>
            <Text>I wanna driver with that rating or more than:</Text>
            <AirbnbRating
              count={5}
              reviews={["Bad", "OK", "Good", "Very Good", "Amazing"]}
              defaultRating={4}
              size={50}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontSize: 18}}>Sort by price:</Text>
            <Text>Rate should be:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
              <Input 
                keyboardType="numeric"
                rightIcon={
                  <Icon
                    name='attach-money'
                    size={20}
                    color='black'
                  />
                }
              inputStyle={{textAlign: 'center'}} containerStyle={{width: '40%'}} placeholder='FROM'/>
              <Input 
                keyboardType="numeric"
                rightIcon={
                  <Icon
                    name='attach-money'
                    size={20}
                    color='black'
                  />
                }
              inputStyle={{textAlign: 'center'}} containerStyle={{width: '40%'}} placeholder='TO'/>
            </View>
          </View>
        </View>
        </ScrollView>
        <Button title="APPLY" onPress={() => this.props.setShowFilter(false)} />
        </KeyboardAvoidingView>

      </Overlay>
    )
  }

  getSelectedCars(){
    var cars = "";
    for(var i = 0; i < this.props.selectedCars.length; i++){
      if(this.props.selectedCars[i] && i == 0) cars += "default, "
      if(this.props.selectedCars[i] && i == 1) cars += "sport, "
      if(this.props.selectedCars[i] && i == 2) cars += "jeep, "
      if(this.props.selectedCars[i] && i == 3) cars += "truck, "
      if(this.props.selectedCars[i] && i == 4) cars += "luxary, "
    }
    cars = cars.substring(0, cars.length - 2);
    return cars;
  }
  
  getOverlayChat(){
    return(
      <Overlay overlayStyle={{width: '100%', height: '100%'}} isVisible={this.props.showChat}>
        <Chat name={this.props.driver} closeChat={this.closeChat}/>
      </Overlay>
    )
  }

  getOverlaySelectedDriver(){
    return(
      <Overlay overlayStyle={{height: 600, width: '90%'}} isVisible={this.props.showDriver}>
        <ScrollView>
        <Card>
          <View style={{alignItems: 'center', paddingTop: 10, paddingVertical: 10}}>
            <Avatar
              size="xlarge"
              rounded
              source={{
                  uri:
                  'https://mp3safe.ru/uploads/thumbs/b9efc2b96-1.jpg',
              }}
            />
            <Text style={{fontSize: 24}}>Clava Coca</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5, paddingVertical: 10}}>
            <View style={{width: '50%', alignItems: 'center'}}>
              <Text>Rating:</Text>
              <Text style={{color: 'yellow', fontSize: 60}}>4.7</Text>
            </View>
            <View style={{width: '50%', alignItems: 'center'}}>
              <Text>Car class:</Text>
              <View style={{backgroundColor: 'gray', borderRadius: 15}}>
                <Image style={{width: 130, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/car.png')}/>
              </View>
            </View>
          </View>
        </Card>

        <Card style={{paddingVertical: 5}}>
          <Image
            style={{height: 220, borderRadius: 5, resizeMode: 'contain'}}
            source={{
              uri: 'https://mfair.ua/user/cars/52494/52494-noviy-oficial-bmw-x7-m-50-d-kiev-2019-19.jpg',
          }}/>
        </Card>

        <Card style={{flexDirection: 'row', paddingVertical: 10}}>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Text>distance to you:</Text>
            <Text style={{fontSize: 35, color: '#C0C0C0', marginTop: 5}}>356 m</Text>
          </View>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Text>Rate:</Text>
            <Text style={{fontSize: 35, color: '#808080', marginTop: 5}}>4 $/km</Text>
          </View>
        </Card>

        <Card style={{paddingVertical: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{width: '75%', textAlign: 'center'}}>Сan drive your vehicle</Text>
            <Icon 
              size={16}
              raised
              reverse={true}
              name='check'
              color='#03AC13'
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{width: '75%', textAlign: 'center'}}>Сan deliver food</Text>
            <Icon 
              size={16}
              raised
              type='entypo'
              reverse={true}
              name='cross'
              color='red'
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{width: '75%', textAlign: 'center'}}>Сan be your driver all day</Text>
            <Icon 
              size={16}
              raised
              reverse={true}
              name='check'
              color='#03AC13'
            />
          </View>
        </Card>

        </ScrollView>
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Button style={{width: '50%'}} title="BACK" onPress={() => {
            this.props.setShowDriver(false)
          }} />
          <Button style={{width: '50%'}} title="CALL" onPress={() => {
            this.props.setDriver("Clava Coca");
            this.props.setShowDrivers(false);
            this.props.setShowDriver(false);
            this.drow()
            this.hileDrivers()
          }} />
        </View>
      </Overlay>
      )
  }
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
 });
