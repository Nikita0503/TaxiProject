import React from 'react';
import {connect} from 'react-redux';
import {addNewTrip} from '../../../redux/menu/history/actions';
import HistoryScreen from './HistoryScreen';

class HistoryContainer extends React.Component {
    render(){
        return(
            <HistoryScreen
                navigation={this.props.navigation}
                trips={this.props.trips}
                addNewTrip={this.props.addNewTrip}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        trips: state.history.trips
    }
}

const mapDispatchToProps = {
    addNewTrip
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);