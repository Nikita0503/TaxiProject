import React from 'react';
import { Text, View, Platform, StyleSheet, Button, KeyboardAvoidingView,
  FlatList, Animated, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Fab, Card } from 'native-base';
import { Overlay, Slider, AirbnbRating, Input, Icon, Avatar } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import Chat from '../../../components/Chat'
import Driver from '../../../components/Driver';
import LinearGradient from 'react-native-linear-gradient';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  
  state = {
    fadeAnim: new Animated.Value(0),
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

  rideToMe = () => {
    let timerId = setInterval(() => {
      //this.setState({latitude: this.props.latitude - 0.000025, longitude: this.props.longitude - 0.000001})
      this.props.setLatitude(this.props.latitude - 0.000025)
      this.props.setLongitude(this.props.longitude - 0.000001)
    }, 100);
    setTimeout(() => { 
      clearInterval(timerId);
      this.props.setShowContract(true)
    }, 40000);
  }

  rideToMcDonalds = () => {
    let timerId = setInterval(() => {
      //this.setState({latitude: this.props.latitude - 0.000025, longitude: this.props.longitude - 0.000001})
      this.props.setLatitude(this.props.latitude + 0.000025)
      this.props.setLongitude(this.props.longitude + 0.000001)
      this.props.setMyLatitude(this.props.latitude);
      this.props.setMyLongitude(this.props.longitude);
    }, 100);
    setTimeout(() => { 
      clearInterval(timerId);
      Alert.alert(
        "Arrived",
        "You can pay for the trip on the 'payments' tab",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      this.props.addCheck(
        {
          id: this.props.checks.length + 1,
          name: this.props.driver.name,
          avatar: this.props.driver.avatar,
          car: this.props.driver.car,
          drove: 6,
          sum: 59
        }
      )
    }, 40000);

  }

  render(){
    return (
      <View style={styles.container}>
        <MapView
          style={{
            height: '100%',
            width: '100%'}}
          region={{
            latitude: this.props.latitude,//50.5071379,
            longitude: this.props.longitude,//30.4973214,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
            <Marker coordinate={{ latitude: this.props.latitude, longitude: this.props.longitude }}/>
            <Marker coordinate={{ latitude: this.props.myLatitude, longitude: this.props.myLongitude }} pinColor="blue"/>
        </MapView>
        <LinearGradient colors={['#808080', '#3C4146', '#3C4146']} style={{width: '100%'}}>
          <TouchableOpacity onPress={() => {
              if(this.props.showDrivers){
                this.hileDrivers();
                this.props.setShowDrivers(false)
              }else{
                this.showDrivers();
                this.props.setShowDrivers(true)
              }
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 2}}>
              <Text style={{marginEnd: 10, color: '#BEBEBE'}}>{this.getDrivers().length} drivers near you</Text>
              <Icon 
                size={20}
                name={this.props.showDrivers ? "down" : "up"}
                color='white'
                type="ant-design"
              />
            </View>
          </TouchableOpacity>
          <Animated.FlatList
            style={{width: '100%', height: this.state.fadeAnim}}
            data={this.getDrivers()}
            renderItem={({ item }) => 
              <Driver 
                name={item.name}
                avatar={item.avatar}
                distance={item.distance}
                rate={item.rate}
                onPress={() => {
                  this.props.setShowDriver(true)
                  this.props.setCurrentDriver(item)
                }} 
              />}
              keyExtractor={item => item.id}
          />
        </LinearGradient>
        {this.getFilterFAB()}
        {this.getChatFAB()}
        {this.getOverlayFilter()}
        {this.getOverlayChat()}
        {this.getOverlaySelectedDriver()}
        {this.getOverlayContract()}
      </View>
      
    );
  }

  getDrivers(){
    let drivers = [];
    for(var i = 0; i < this.props.drivers.length; i++){
      var correct = true;
      if(this.props.priceFrom != null && this.props.priceFrom != ''){
        if(this.props.priceFrom > this.props.drivers[i].rate){
          correct = false;
        }  
      }
      if(this.props.priceTo != null && this.props.priceTo != ''){
        if(this.props.priceTo < this.props.drivers[i].rate){
          correct = false;
        }
      }
      if(this.props.minRating > this.props.drivers[i].rating){
        correct = false
      }
      if(correct) drivers.push(this.props.drivers[i])
    }
    return drivers
  }

  getFilterFAB(){
    return(
      <Fab
        active={true}
        direction="up"
        containerStyle={{marginTop: Platform.OS === 'ios' ? 20 : 0}}
        style={{ backgroundColor: '#3C4146' }}
        position="topRight"
        onPress={() => this.props.setShowFilter(true)}>
          <Icon 
            size={25}
            name="filter"
            color='orange'
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
        style={{ backgroundColor: '#3C4146' }}
        position="topRight"
        onPress={() => this.props.setShowChat(true)}>
          <Icon 
            size={25}
            name="wechat"
            color='orange'
            type="ant-design"
          />
      </Fab>)
  }

  getOverlayFilter(){
    return(
      <Overlay overlayStyle={{height: '90%', backgroundColor: '#293e6a'}} isVisible={this.props.showFilter}>
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
        <ScrollView style={{width: 300, height: 400}}>
        <View style={{width: 300, height: '90%'}}>
          <View>
            <Text style={{fontSize: 18, color: '#B8B8B8'}}>Sort by distance:</Text>
            <Slider
              maximumValue={10}
              minimumValue={1}
              thumbTintColor="#B8B8B8"
              minimumTrackTintColor="#1d2c4c"
              maximumTrackTintColor="#f0f0f0"
              step={1}
              value={this.props.distanceFromMe}
              onValueChange={(value) => {
                this.props.setDistanceFromMe(value)
              }}
            />
            <Text style={{color: '#B8B8B8'}}>distance from me: less then {this.props.distanceFromMe} km</Text>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#B8B8B8'}}>Sort by car class:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
              <TouchableOpacity style={{width: 140, height: 100, backgroundColor: this.props.selectedCars[0] ? '#3B5998' : '#293e6a', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[0] = !cars[0];
                  this.props.setSelectedCars(cars)
                }
                }>
                <Image style={{width: 130, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/car.png')}/>
                <Text style={{fontSize: 18, color: '#B8B8B8'}}>Default</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: 140, height: 100, backgroundColor: this.props.selectedCars[1] ? '#3B5998' : '#293e6a', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[1] = !cars[1];
                  this.props.setSelectedCars(cars)
                }}>
                <Image style={{width: 130, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/sport.png')}/>
                <Text style={{fontSize: 18, color: '#B8B8B8'}}>Sport</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
              <TouchableOpacity style={{width: 140, height: 100, backgroundColor: this.props.selectedCars[2] ? '#3B5998' : '#293e6a', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[2] = !cars[2];
                  this.props.setSelectedCars(cars)
                }}>
                <Image style={{width: 130, height: 70, resizeMode: 'contain', }} source={require('../../../content/images/jeep.png')}/>
                <Text style={{fontSize: 18, color: '#B8B8B8'}}>Jeep</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: 140, height: 100, backgroundColor: this.props.selectedCars[3] ? '#3B5998' : '#293e6a', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[3] = !cars[3];
                  this.props.setSelectedCars(cars)
                }}>
                <Image style={{width: 130, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/truck.png')}/>
                <Text style={{fontSize: 18, color: '#B8B8B8'}}>Truck</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
              <TouchableOpacity style={{width: 290, height: 100, backgroundColor: this.props.selectedCars[4] ? '#3B5998' : '#293e6a', alignItems: 'center', borderRadius: 10}} onPress={() => 
                {
                  let cars = [...this.props.selectedCars];
                  cars[4] = !cars[4];
                  this.props.setSelectedCars(cars)
                }}>
                <Image style={{width: 290, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/limousine.png')}/>
                <Text style={{fontSize: 18, color: '#B8B8B8'}}>Luxury</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: '#B8B8B8'}}>I prefer: {this.getSelectedCars()}</Text>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#B8B8B8'}}>Sort by rating:</Text>
            <Text style={{color: '#B8B8B8'}}>I wanna driver with that rating or more than:</Text>
            <AirbnbRating
              count={5}
              defaultRating={this.props.minRating}
              reviews={["Bad", "OK", "Good", "Very Good", "Amazing"]}
              size={50}
              onFinishRating={(rating) => this.props.setMinRating(rating)}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontSize: 18, color: '#B8B8B8'}}>Sort by price:</Text>
            <Text style={{color: '#B8B8B8'}}>Rate should be:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
              <Input 
                value={this.props.priceFrom}
                onChangeText={(text) => this.props.setPriceFrom(text)}
                keyboardType="numeric"
                placeholderTextColor="#B8B8B8"
                color="#B8B8B8"
                rightIcon={
                  <Icon
                    name='attach-money'
                    size={20}
                    color='#B8B8B8'
                  />
                }
              inputStyle={{textAlign: 'center'}} containerStyle={{width: '40%'}} placeholder='FROM'/>
              <Input 
                value={this.props.priceTo}
                onChangeText={(text) => {this.props.setPriceTo(text)}}
                keyboardType="numeric"
                placeholderTextColor="#B8B8B8"
                color="#B8B8B8"
                rightIcon={
                  <Icon
                    name='attach-money'
                    size={20}
                    color='#B8B8B8'
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
      <Overlay overlayStyle={{width: '100%', height: '100%', backgroundColor: '#f0f0f0'}} isVisible={this.props.showChat}>
        <Chat name={this.props.driver != null ? this.props.driver.name : ''} closeChat={this.closeChat}/>
      </Overlay>
    )
  }

  getOverlaySelectedDriver(){
    return(
      <Overlay overlayStyle={{height: 600, width: '90%', backgroundColor: '#293e6a'}} isVisible={this.props.showDriver}>
        <ScrollView>
        <View>
          <View style={{alignItems: 'center', paddingTop: 10, paddingVertical: 10}}>
            <Avatar
              size="xlarge"
              rounded
              source={{
                  uri:
                  this.props.currentDriver != null ? this.props.currentDriver.avatar : '',
              }}
            />
            <Text style={{fontSize: 24, color: 'white', marginTop: 10}}>{this.props.currentDriver != null ? this.props.currentDriver.name : ''}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5, paddingVertical: 10}}>
            <View style={{width: '50%', alignItems: 'center'}}>
              <Text style={{color: 'white'}}>Rating:</Text>
              <Text style={{color: 'yellow', fontSize: 60}}>{this.props.currentDriver != null ? this.props.currentDriver.rating : ''}</Text>
            </View>
            <View style={{width: '50%', alignItems: 'center'}}>
              <Text style={{color: 'white'}}>Car class:</Text>
              <View style={{backgroundColor: '#293e6a', borderRadius: 15}}>
                <Image style={{width: 130, height: 70, resizeMode: 'contain'}} source={require('../../../content/images/car.png')}/>
              </View>
            </View>
          </View>
        </View>

        <View style={{paddingVertical: 5}}>
          <Image
            style={{height: 220, borderRadius: 5, resizeMode: 'contain'}}
            source={{
              uri: this.props.currentDriver != null ? this.props.currentDriver.carAvatar : '',
          }}/>
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>distance to you:</Text>
            <Text style={{fontSize: 35, color: '#C0C0C0', marginTop: 5}}>{this.props.currentDriver != null ? this.props.currentDriver.distance : ''} m</Text>
          </View>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Rate:</Text>
            <Text style={{fontSize: 35, color: '#808080', marginTop: 5}}>{this.props.currentDriver != null ? this.props.currentDriver.rate : ''} $/km</Text>
          </View>
        </View>

        <View style={{paddingVertical: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{width: '75%', textAlign: 'center', color: 'white'}}>Сan drive your vehicle</Text>
            <Icon 
              size={16}
              raised
              reverse={true}
              name='check'
              color='#03AC13'
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{width: '75%', textAlign: 'center', color: 'white'}}>Сan deliver food</Text>
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
            <Text style={{width: '75%', textAlign: 'center', color: 'white'}}>Сan be your driver all day</Text>
            <Icon 
              size={16}
              raised
              reverse={true}
              name='check'
              color='#03AC13'
            />
          </View>
        </View>

        </ScrollView>
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Button style={{width: '50%'}} color="white" title="BACK" onPress={() => {
            this.props.setShowDriver(false)
          }} />
          <Button style={{width: '50%'}} color="white" title="CALL" onPress={() => {
            this.props.setDriver(this.props.currentDriver);
            this.props.setShowDrivers(false);
            this.props.setShowDriver(false);
            this.rideToMe();
            this.hileDrivers();
          }} />
        </View>
      </Overlay>
      )
  }

  getOverlayContract(){
    return(
      <Overlay overlayStyle={{ width: '90%'}} isVisible={this.props.showContract}>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
          <View style={{width: '35%'}}>
            <Image
                style={{width: 100, height: 100, borderRadius: 100}}
                source={{
                    uri:
                    this.props.currentDriver != null ? this.props.currentDriver.avatar : '',
                }}
            />
          </View>
          <View style={{width: '55%'}}>
              <View style={{marginLeft: 0}}>
                  <Text style={{fontSize: 20}}>{this.props.currentDriver != null ? this.props.currentDriver.name : ''}</Text>
                  <Text style={{fontSize: 14, color: '#f0f0f0'}}>{this.props.currentDriver != null ? this.props.currentDriver.car : ''}</Text>
              </View>
              <View style={{marginTop: 12, flexDirection: 'row',}}>
                  <View style={{width: '50%'}}>
                      <Text style={{fontSize: 24, color: 'green'}}>{this.props.currentDriver != null ? this.props.currentDriver.rate : ''} $</Text>
                      <Text>per km</Text>
                  </View>
                  <View style={{width: '50%', alignItems: 'center'}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{fontSize: 24}}>{this.props.currentDriver != null ? this.props.currentDriver.rating : ''}</Text>
                          <Icon
                              size={24}
                              name='star'
                              type='entypo'
                              color='yellow' />
                      </View>
                      <Text>rating</Text>
                  </View>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20}}>SP "Metropolis"</Text>
            <Icon
                size={24}
                name='arrowdown'
                type='ant-design'
                color='red' />
            <Text style={{fontSize: 20}}>McDonald's</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'space-around'}}>
              <Card style={{width: '40%', height: 120, alignItems: 'center', borderRadius: 150, justifyContent: 'center'}}>
                <Text style={{fontSize: 36, color: 'green'}}>43 $</Text>
                <Text>for the way</Text>
              </Card>
              <View><Text style={{fontSize: 20}}>+</Text></View>
              <Card style={{width: '40%', height: 120, alignItems: 'center', borderRadius: 150, justifyContent: 'center'}}>
                <Text style={{fontSize: 36, color: 'green'}}>16 $</Text>
                <Text>for additional</Text>
              </Card>
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 10}}>
            <Text style={{fontSize: 24}}>= 59$</Text>
          </View>
          <View>

          </View>
        </ScrollView>
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Button style={{width: '50%'}} title="BACK" onPress={() => {
            this.props.setShowContract(false)
          }} />
          <Button style={{width: '50%'}} title="RIDE" onPress={() => {
            this.props.setShowContract(false)
            this.rideToMcDonalds()
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
