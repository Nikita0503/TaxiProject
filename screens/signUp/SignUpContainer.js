import React from 'react';
import {connect} from 'react-redux';
//import {} from '../../redux/signUp/actions';
import SignUpScreen from './SignUpScreen';

class SignUpContainer extends React.Component {
    render(){
        return(
            <SignUpScreen
                navigation={this.props.navigation}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);