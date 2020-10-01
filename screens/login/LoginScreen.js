import React, {PureComponent} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Input, Button, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

export default class LoginScreen extends React.Component {

  render() {
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
        <View style={{flex: 3, justifyContent: 'center'}}>
        <Image
          source={require('../../content/images/logo_rockstar.png')}
          style={{ width: 250, height: 250, resizeMode: 'contain'}}
        />
        </View>
        <View style={{flex: 2, width: '90%'}}>
          <View>
            <Input
              placeholder='email'
              leftIcon={{ type: 'Fontisto', name: 'email' }}
            />
          </View>
          <View>
            <Input
              placeholder='password'
              leftIcon={{ type: 'FontAwesome', name: 'lock' }}
              secureTextEntry={true}
            />
          </View>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Menu")
            }}
            icon={
              <Icon
                style={{marginEnd: 5}}
                name="login"
                size={25}
                color="black"
              />
            }
            buttonStyle={{borderColor: 'black', width: '95%', alignSelf: 'center', borderRadius: 20}}
            titleStyle={{color: 'black'}}
            title="Login"
            loading={false}
            type="outline"
          />
          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 15}}
            onPress={() => {
              this.props.navigation.navigate("SignUp")
            }}>
            <Text>Sing Up</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
  });