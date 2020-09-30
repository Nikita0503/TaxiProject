import React, {PureComponent} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Input, Button, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUpScreen extends React.Component {

  render() {
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}>
            <View style={{width: '90%', marginTop: Platform.OS == "ios" ? 40 : 10}}>
                <View>
                    <Input
                        keyboardType='email-address'
                        placeholder='email'
                        rightIcon={{ type: 'Fontisto', name: 'email' }}
                    />
                </View>
                <View>
                    <Input
                        placeholder='password'
                        rightIcon={{ type: 'font-awesome', name: 'lock' }}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Input
                        placeholder='name'
                        rightIcon={{ type: 'font-awesome', name: 'user' }}
                    />
                </View>
                <View>
                    <Input
                        placeholder='city'
                        rightIcon={{ type: 'font-awesome-5', name: 'city' }}
                    />
                </View>
                <View>
                    <Input
                        keyboardType='numeric'
                        placeholder='phone'
                        rightIcon={{ type: 'font-awesome', name: 'phone' }}
                    />
                </View>
                <Button
                    onPress={() => {
                        this.props.navigation.goBack()
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
                    title="Login"
                    loading={false}
                    type="outline"
                />
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