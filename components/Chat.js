import React from 'react';
import { View, Platform, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView, Keyboard, VirtualizedList } from 'react-native';
import { Input, Icon, Text } from 'react-native-elements';

export default class Chat extends React.Component {

    state = {
        messages: [
            {id: 1, message: 'Hi! I am your driver. Do you need something else?'},
        ],
        currentMessage: ''
    }

    componentDidMount(){
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {this.refs.scrollView.scrollToEnd()},
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
    }

    render(){
      return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{
            flex: 1, 
            marginTop: Platform.OS == "ios" ? 30 : 0,
            backgroundColor: '#f0f0f0', 
            justifyContent: 'space-between'}}>
            <View style={{width: '100%', height: 50, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Icon 
                    onPress={() => {this.props.closeChat()}}
                    type="ant-design"
                    size={16}
                    raised
                    reverse={true}
                    name='left'
                    color='#03AC13'
                />
                <Text style={{fontSize: 20}}>{this.props.name}</Text>
            </View>
            <View style={{width: '100%', flex: 1}}>
                <VirtualizedList
                    ref="scrollView"
                    onContentSizeChange={(width, height) => {
                        this.refs.scrollView.scrollToEnd()
                    }}
                    data={this.state.messages}
                    initialNumToRender={4}
                    renderItem={({ item }) => <Item me={item.me} message={item.message}/>}
                    keyExtractor={item => item.id}
                    getItemCount={(data) => {
                        return data.length;
                    }}
                    getItem={(data, index) => {
                        return {
                          id: data[index].id,
                          message: data[index].message,
                          me: data[index].me
                        }
                    }}
                />
            </View>

            <View style={{width: '100%', height: 60, backgroundColor: 'white', flexDirection: 'row'}}>
                <Input 
                    containerStyle={{width: '90%'}} 
                    placeholder='Message'
                    onBlur={() => this.refs.scrollView.scrollToEnd()}
                    value={this.state.currentMessage}
                    onChangeText={text => {
                      this.setState({currentMessage: text})
                      this.refs.scrollView.scrollToEnd();
                    }}/>
                <Icon
                  onPress={() => {
                    const list = this.state.messages;
                    list.push({id: this.state.messages.length + 1, message: this.state.currentMessage, me: true})
                    this.setState({
                      messages: list,
                      currentMessage: ''
                    })
                    setTimeout(() => {
                      const list = this.state.messages;
                      list.push({id: this.state.messages.length + 1, message: 'Ok sure =)'})
                      this.setState({
                        messages: list
                      })    
                    }, 3000)
                  }}
                  containerStyle={{width: '10%', justifyContent: 'center' }}
                  name='send'
                  type='Ionicons'
                  size={40}
                  color='gray'
                />
            </View>
        </KeyboardAvoidingView>
      );
    }
}

class Item extends React.Component {
    render() {
      return (
        <View
          style={
            this.props.me ? styles.myMessageStyle : styles.driverMessageStyle
          }>
          {this.getMessageText()}
        </View>
      );
    }

    getMessageText(){
        if(this.props.message != ""){
          return(
            <View>
              <Text style={{color: "white", marginHorizontal: 10, marginVertical: 5}}>{this.props.message}</Text>
            </View>)
        }
      }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E1E7EC',
      alignItems: 'stretch',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    chatContainer: {
      width: '100%',
      marginBottom: 15,
    },
    driverMessageStyle: {
      maxWidth: '70%',
      alignSelf: 'flex-start',
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 10,
      paddingHorizontal: 5,
      backgroundColor: 'green',
    },
    myMessageStyle: {
      maxWidth: '70%',
      alignSelf: 'flex-end',
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 10,
      paddingHorizontal: 5,
      backgroundColor: '#3A6565',
    },

  });