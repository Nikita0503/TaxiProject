import React from 'react';
import {connect} from 'react-redux';
import {} from '../../../redux/menu/profile/actions';
import ProfileScreen from './ProfileScreen';

class ProfileContainer extends React.Component{
    render(){
        return(
            <ProfileScreen
                navigation={this.props.navigation}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);