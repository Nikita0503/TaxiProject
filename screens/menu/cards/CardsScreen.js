import React from 'react';
import { View, Platform, StyleSheet, FlatList, ScrollView, TouchableOpacity, TextInput, Image, Animated } from 'react-native';
import { Avatar, Text, Rating, Header, Icon } from 'react-native-elements';
import { Card } from 'native-base';

export default class CardsScreen extends React.Component {

    state={
        cardBlankHeight: new Animated.Value(0),
        cardBlankVisibility: new Animated.Value(0),
    }

    showCardBlank = () => {
        Animated.timing(this.state.cardBlankHeight, {
          toValue: 210,
          duration: 300
        }).start(({ finished }) => {
            Animated.timing(this.state.cardBlankVisibility, {
                toValue: 1,
                duration: 300
            }).start();
            this.props.showCardBankChange(true);
        });
      };
    
      hideCardBlank = () => {
        Animated.timing(this.state.cardBlankVisibility, {
            toValue: 0,
            duration: 300
        }).start(() => {
            Animated.timing(this.state.cardBlankHeight, {
                toValue: 0,
                duration: 300
            }).start();
            this.props.showCardBankChange(false);
        }); 
      };

    render(){
      return (
          <View style={styles.container}>
              <Header
                containerStyle={{backgroundColor: '#3C4146'}}
                centerComponent={{ text: 'Payments', style: { color: '#f0f0f0' } }}
              />
        <ScrollView style={styles.container}>
          <View style={{alignItems: 'center', paddingTop: 10}}>
            <FlatList
                horizontal
                pagingEnabled
                snapToInterval={350}
                initialNumToRender={1}
                initialScrollIndex={0}
                showsHorizontalScrollIndicator={false}
                style={{width: '100%'}}
                data={this.props.cards}
                renderItem={({ item }) => 
                    <BankCard
                        info={item}
                        color={item.color}
                        cardNumber={item.cardNumber}
                        validThruMM={item.validThruMM}
                        validThruYY={item.validThruYY}
                        cardHolderName={item.cardHolderName}
                        balance={item.balance}
                        selectCard={this.props.selectCard}
                    />}
                keyExtractor={item => item.id}
            />
          </View>
          {this.getSelectedCard()}
          <View style={{width: '100%', marginTop: 10}}>
            <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                onPress={() => {
                    if(this.props.shownCardBlank){
                        this.hideCardBlank()
                    }else{
                        this.showCardBlank()
                    }
                }}>
                <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 5}}>Add card</Text>
                <Icon 
                    style={{marginTop: 6, marginLeft: 10}}
                    size={20}
                    name={this.props.shownCardBlank ? "up" : "down"}
                    color='green'
                    type="ant-design"
                />
            </TouchableOpacity>
            <Animated.View style={{width: '100%', height: this.state.cardBlankHeight, backgroundColor: 'white'}}>
                {this.getCardBlank()}
            </Animated.View>
          </View>
          {this.getCheck()}
        </ScrollView>
        </View>
      );
    }

    getSelectedCard(){
        if(this.props.selectedCard != null) {
            return(
                <View style={{justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 10, height: 50}}>
                    <Text style={{fontSize: 18}}>{"number: " + this.props.selectedCard.cardNumber}</Text>
                    <Text style={{fontSize: 18}}>{"balance: " + this.props.selectedCard.balance + "$"}</Text>
                </View>
            )
        }
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, height: 50}}>
                <Text style={{fontSize: 18}}>Click to the desired card</Text>
            </View>            
        )
    }

    getCardBlank(){
        return(
            <Animated.View style={{opacity: this.state.cardBlankVisibility}}>
                 <View style={{width: '70%', height: '90%', backgroundColor: '#f0f0f0', borderRadius: 15, position: 'absolute', right: 0, bottom: 0}}>
                    <View style={{width: '100%', height: '50%', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => {
                                this.hideCardBlank();
                                this.props.addCard({
                                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                                    cardNumber: this.props.cardNumber,
                                    validThruMM: this.props.validThruMM,
                                    validThruYY: this.props.validThruYY,
                                    cardHolderName: this.props.cardHolderName,
                                    color: '#f0f0f0',
                                    balance: 681
                                })
                                this.props.cardNumberChange('');
                                this.props.validThruMMChange('');
                                this.props.validThruYYChange('');
                                this.props.cardHolderNameChange('');
                                this.props.cvvChange('');
                            }} 
                            style={{width: '100%', height: '50%', backgroundColor: 'black', alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{fontSize: 18, paddingRight: 5, color: 'white'}}>Add card</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: '100%', height: '50%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            
                        </View>
                        <View style={{width: '40%', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 12, textAlign: 'right', marginRight: 5}}>CVC2 /{"\n"}CVV</Text>
                            <TextInput
                                style={{backgroundColor: 'white', padding: 0, fontSize: 12, height: this.props.shownCardBlank ? 25 : 0, width: 50, borderWidth: this.props.shownCardBlank ? 1 : 0, borderColor: 'black', textAlign: 'center'}}
                                keyboardType="numeric"
                                maxLength={3}
                                value={this.props.cvv}
                                onChangeText={(text) => {this.props.cvvChange(text)}}
                            />
                        </View>
                    </View>
                </View>
                <View style={{width: '70%', height: '90%', backgroundColor: 'gray', borderRadius: 15}}>
                    <View style={{width: '100%', height: '50%', alignItems: 'center', justifyContent: 'space-around'}}>
                        <View style={{width: '100%', alignItems: 'center'}}>
                            <Text style={{width: '90%', textAlign: 'right', fontSize: 10}}>Card number</Text>
                            <TextInput
                                style={{backgroundColor: 'white', padding: 0, fontSize: 12, height: this.props.shownCardBlank ? 25 : 0, width: '90%', borderWidth: this.props.shownCardBlank ? 1 : 0, borderColor: 'black', textAlign: 'center'}}
                                keyboardType="numeric"
                                maxLength={16}
                                value={this.props.cardNumber}
                                onChangeText={(text) => {this.props.cardNumberChange(text)}}
                            />
                        </View>
                        <View style={{width: '90%', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{width: '50%', textAlign: 'center', fontSize: 10}}>Valid thru (MM/ YY)</Text>
                            <View style={{width: '50%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextInput
                                    style={{backgroundColor: 'white', padding: 0, fontSize: 12, height: this.props.shownCardBlank ? 25 : 0, width: '40%', borderWidth: this.props.shownCardBlank ? 1 : 0, borderColor: 'black', textAlign: 'center'}}
                                    keyboardType="numeric"
                                    maxLength={16}
                                    value={this.props.validThruMM}
                                    onChangeText={(text) => {this.props.validThruMMChange(text)}}
                                />
                                <TextInput
                                    style={{backgroundColor: 'white', padding: 0, fontSize: 12, height: this.props.shownCardBlank ? 25 : 0, width: '40%', borderWidth: this.props.shownCardBlank ? 1 : 0, borderColor: 'black', textAlign: 'center'}}
                                    keyboardType="numeric"
                                    maxLength={16}
                                    value={this.props.validThruYY}
                                    onChangeText={(text) => {this.props.validThruYYChange(text)}}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{width: '100%', height: '50%', paddingHorizontal: 10, justifyContent: 'center'}}>
                            <Text style={{width: '100%', textAlign: 'right', fontSize: 12}}>Card holder name</Text>
                            <TextInput
                                style={{backgroundColor: 'white', padding: 0, fontSize: 12, height: this.props.shownCardBlank ? 25 : 0, width: '100%', borderWidth: this.props.shownCardBlank ? 1 : 0, borderColor: 'black', textAlign: 'center'}}
                                keyboardType="numeric"
                                maxLength={16}
                                value={this.props.cardHolderName}
                                onChangeText={(text) => {this.props.cardHolderNameChange(text)}}
                            />
                    </View>
                </View>
            </Animated.View>
        )
    }

    getCheck(){
        return(
            <FlatList
                data={this.props.checks}
                renderItem={({ item }) => 
                    <Check
                        id={item.id}
                        name={item.name}
                        avatar={item.avatar}
                        car={item.car}
                        drove={item.drove}
                        sum={item.sum}
                        pay={this.props.pay}
                        addNewTrip={this.props.addNewTrip}
                    />}
                keyExtractor={item => item.id}
            />
        )
    }

  }
  
  const Check = (props) =>
  {
    return(
        <Card style={{width: '95%', height: 180, flexDirection: 'row', alignSelf: 'center', borderRadius: 10}}>
           <View style={{width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
               <View style={{flexDirection: 'row'}}>
                   <Image
                       style={{width: 70, height: 70, borderRadius: 100}}
                       source={{
                           uri:
                           props.avatar,
                       }}
                   />
                   <View style={{width: '55%'}}>
                        <Text style={{fontSize: 16,  textAlign: 'right'}}>{props.name}</Text>
                        <Text style={{fontSize: 12, color: '#f0f0f0', textAlign: 'right'}}>{props.car}</Text>
                   </View>
               </View>
               <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                   <View style={{width: '50%', marginLeft: 10}}>
                       <Text style={{ fontSize: 18, color: '#f0f0f0'}}>Drove:</Text>
                       <View style={{alignItems: 'flex-end', flexDirection: 'row'}}>
                           <Text style={{ fontSize: 35}}>{props.drove}</Text>
                           <Text style={{ fontSize: 18, marginBottom: 5}}> km</Text>
                       </View>
                   </View>
                   <View style={{width: '50%', alignItems: 'center'}}>
                       <Text style={{ fontSize: 18, color: '#f0f0f0'}}>To pay:</Text>
                       <View style={{alignItems: 'flex-end', flexDirection: 'row'}}>
                           <Text style={{ fontSize: 35}}>{props.sum}</Text>
                           <Text style={{ fontSize: 18, marginBottom: 5}}> $</Text>
                       </View>
                   </View>
               </View>
           </View>
           <View style={{width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
               <Card style={{width: '70%', height: '70%', borderRadius: 20, margin: 50, backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center'}}>
               <TouchableOpacity 
                   style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                   onPress={() => {
                       props.pay(props)
                       props.addNewTrip({
                           time: '1:33',
                           distance: '2,1 km',
                           spent: props.sum,
                           from: "SP 'Metropolis'",
                           to: "McDonald's",
                           car: props.car,
                           avatar: props.avatar,
                           rating: 4.7
                       })
                   }}>
                   <Text style={{fontSize: 30}}>Pay</Text>
               </TouchableOpacity>
               </Card>
               <Rating imageSize={25}  fractions="{1}" startingValue="{3.3}" />
           </View>
        </Card>
    )
  }
  
  const BankCard = (props) =>
  {
      return(
        <TouchableOpacity onPress={() => {props.selectCard(props.info)}}>
            <View style={{width: 340, 
                height: 200, 
                backgroundColor: props.color,
                alignItems: 'center',
                borderRadius: 15,
                marginHorizontal: 5}}>
                    <View style={{width: '100%', height: '50%', alignItems: 'flex-end'}}>
                        <Text style={{color: 'white', marginTop: 10, marginRight: 20, fontSize: 20}}>{props.balance} $</Text>
                    </View>
                    <View style={{width: '100%', height: '50%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={{color: 'white', fontSize: 20}}>{props.cardNumber}</Text>
                            <Text style={{color: 'white', fontSize: 6}}>VALID THRU</Text>
                            <Text style={{color: 'white', fontSize: 16}}>{props.validThruMM}/{props.validThruYY}</Text>
                            <Text style={{color: 'white', fontSize: 18}}>{props.cardHolderName}</Text>
                        </View>
                        <View style={{justifyContent: 'flex-end'}}>
                            <Image
                                source={require('../../../content/images/master_card.png')}
                                style={{ width: 70, height: 70, resizeMode: 'contain'}}
                            />
                        </View>
                    </View>
            </View>
        </TouchableOpacity>
      )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });
  