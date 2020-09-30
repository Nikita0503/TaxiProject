import React from 'react';
import { View, Platform, StyleSheet, Button, TouchableOpacity, 
    Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Overlay, Text, Slider, AirbnbRating, Input, Icon, Avatar } from 'react-native-elements';

export default class ProfileScreen extends React.Component {
  render(){
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={{flexDirection: 'row', marginVertical: Platform.OS == "ios" ? 50 : 20}}> 
                <View style={{width: '40%'}}>
                <Image
                    style={{width: 120, height: 120, borderRadius: 100}}
                    source={{
                        uri:
                        'https://radiopotok.ru/f/i/2019/8/5/825_1565023537-f6d62a.jpg',
                    }}
                />
                </View>
                <View style={{width: '60%'}}>
                    <View style={{marginLeft: 0}}>
                        <Text style={{fontSize: 20}}>Clava Coca</Text>
                        <Text style={{fontSize: 14, color: '#f0f0f0'}}>nikita0503ua@gmail.com</Text>
                    </View>
                    <View style={{marginTop: 12, flexDirection: 'row',}}>
                        <View style={{width: '50%'}}>
                            <Text style={{fontSize: 24, color: 'green'}}>1.4k $</Text>
                            <Text>money spent</Text>
                        </View>
                        <View style={{width: '50%', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 24}}>7</Text>
                                <Icon
                                    size={12}
                                    name='caretdown'
                                    type='ant-design'
                                    color='red' />
                            </View>
                            <Text>rating</Text>
                        </View>
                    </View>
                </View>
            </View>
              <View style={{width: '100%'}}>
                <Text style={{color: '#f0f0f0', marginLeft: 10}}>To change the data, enter the password</Text>
                <Input
                    containerStyle={{width: '100%'}}
                    placeholder='password'
                    rightIcon={{ type: 'font-awesome', name: 'lock' }}
                    secureTextEntry={true}
                />
                <Input
                    value="Los Angeles"
                    containerStyle={{width: '100%'}}
                    placeholder='city'
                    rightIcon={{ type: 'font-awesome-5', name: 'city' }}
                />
                <Input
                    value="+38(097)091 97 21"
                    containerStyle={{width: '100%'}}
                    keyboardType='numeric'
                    placeholder='phone'
                    rightIcon={{ type: 'font-awesome', name: 'phone' }}
                />
              </View>
            <Button
                onPress={() => {
                }}
                icon={
                    <Icon
                        style={{marginEnd: 5}}
                        name="user-plus"
                        size={25}
                        color="black"
                    />
                }
                buttonStyle={{borderColor: 'black', width: '95%', alignSelf: 'center', borderRadius: 20}}
                titleStyle={{color: 'black'}}
                title="Apply"
                loading={false}
                type="outline"
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: 'space-between',
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });
  