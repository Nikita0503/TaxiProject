import React from 'react';
import {connect} from 'react-redux';
import {setDistanceFromMe,
        setSelectedCars,
        setShowDriver,
        setShowFilter,
        setShowDrivers,
        setShowChat,
        setDriver,
        setLatitude,
        setLongitude,
        setShowContract,
        setMyLatitude,
        setMyLongitude,
        setCurrentDriver} from '../../../redux/menu/home/actions';
import {addCheck} from '../../../redux/menu/cards/actions';
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
                latitude={this.props.latitude}
                longitude={this.props.longitude}
                myLatitude={this.props.myLatitude}
                myLongitude={this.props.myLongitude}
                showContract={this.props.showContract}
                checks={this.props.checks}
                currentDriver={this.props.currentDriver}
                setDistanceFromMe={this.props.setDistanceFromMe}
                setSelectedCars={this.props.setSelectedCars}
                setShowDriver={this.props.setShowDriver}
                setShowFilter={this.props.setShowFilter}
                setShowDrivers={this.props.setShowDrivers}
                setShowChat={this.props.setShowChat}
                setDriver={this.props.setDriver}
                setLatitude={this.props.setLatitude}
                setLongitude={this.props.setLongitude}
                setShowContract={this.props.setShowContract}
                setMyLatitude={this.props.setMyLatitude}
                setMyLongitude={this.props.setMyLongitude}
                addCheck={this.props.addCheck}
                setCurrentDriver={this.props.setCurrentDriver}
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
        driver: state.map.driver,
        latitude: state.map.latitude,
        longitude: state.map.longitude,
        myLatitude: state.map.myLatitude,
        myLongitude: state.map.myLongitude,
        showContract: state.map.showContract,
        checks: state.cards.checks,
        currentDriver: state.map.currentDriver
    }
}

const mapDispatchToProps = {
    setDistanceFromMe,
    setSelectedCars,
    setShowDriver,
    setShowFilter,
    setShowDrivers,
    setShowChat,
    setDriver,
    setLatitude,
    setLongitude,
    setShowContract,
    setMyLatitude,
    setMyLongitude,
    addCheck,
    setCurrentDriver
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);