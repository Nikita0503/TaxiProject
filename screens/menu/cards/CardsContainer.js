import React from 'react';
import {connect} from 'react-redux';
import {showCardBankChange,
        addCard,
        cardNumberChange,
        validThruMMChange,
        validThruYYChange,
        cardHolderNameChange,
        cvvChange,
        selectCard,
        pay} from '../../../redux/menu/cards/actions';
import CardsScreen from './CardsScreen';

class CardsContainer extends React.Component {
    render(){
        return(
            <CardsScreen
                navigation={this.props.navigation}
                shownCardBlank={this.props.shownCardBlank}
                cards={this.props.cards}
                cardNumber={this.props.cardNumber}
                validThruMM={this.props.validThruMM}
                validThruYY={this.props.validThruYY}
                cardHolderName={this.props.cardHolderName}
                cvv={this.props.cvv}
                selectedCard={this.props.selectedCard}
                checks={this.props.checks}
                showCardBankChange={this.props.showCardBankChange}
                addCard={this.props.addCard}
                cardNumberChange={this.props.cardNumberChange}
                validThruMMChange={this.props.validThruMMChange}
                validThruYYChange={this.props.validThruYYChange}
                cardHolderNameChange={this.props.cardHolderNameChange}
                cvvChange={this.props.cvvChange}
                selectCard={this.props.selectCard}
                pay={this.props.pay}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        shownCardBlank: state.cards.shownCardBlank,
        cards: state.cards.cards,
        cardNumber: state.cards.cardNumber,
        validThruMM: state.cards.validThruMM,
        validThruYY: state.cards.validThruYY,
        cardHolderName: state.cards.cardHolderName,
        cvv: state.cards.cvv,
        selectedCard: state.cards.selectedCard,
        checks: state.cards.checks
    }
}

const mapDispatchToProps = {
    showCardBankChange,
    addCard,
    cardNumberChange,
    validThruMMChange,
    validThruYYChange,
    cardHolderNameChange,
    cvvChange,
    selectCard,
    pay
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);