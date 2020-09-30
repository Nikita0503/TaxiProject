import React from 'react';
import {connect} from 'react-redux';
import {setDistanceFromMe,
        setSelectedCars,
        setShowDriver,
        setShowFilter,
        setShowDrivers,
        setShowChat,
        setDriver} from '../../../redux/menu/home/actions';
import HomeScreen from './HomeScreen';

class HomeContainer extends React.Component{
    render(){
        return(
            <HomeScreen
                navigation={this.props.navigation}
                distanceFromMe={this.props.distanceFromMe}
                selectedCars={this.props.selectedCars}
                showDriver={this.props.showDriver}
                showFilter={this.props.showFilter}
                showDrivers={this.props.showDrivers}
                showChat={this.props.showChat}
                drivers={this.props.drivers}
                driver={this.props.driver}
                setDistanceFromMe={this.props.setDistanceFromMe}
                setSelectedCars={this.props.setSelectedCars}
                setShowDriver={this.props.setShowDriver}
                setShowFilter={this.props.setShowFilter}
                setShowDrivers={this.props.setShowDrivers}
                setShowChat={this.props.setShowChat}
                setDriver={this.props.setDriver}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        distanceFromMe: state.map.distanceFromMe,
        selectedCars: state.map.selectedCars,
        showDriver: state.map.showDriver,
        showFilter: state.map.showFilter,
        showDrivers: state.map.showDrivers,
        showChat: state.map.showChat,
        drivers: state.map.drivers,
        driver: state.map.driver
    }
}

const mapDispatchToProps = {
    setDistanceFromMe,
    setSelectedCars,
    setShowDriver,
    setShowFilter,
    setShowDrivers,
    setShowChat,
    setDriver
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);