import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Weather from './Weather'

const API_KEY = '432f78d6711166f1ad5c4393dab0f076';

export default class App extends Component {
    state = {
        isLoaded: false,
        error: null,
        temperature: null,
        name: null,
    }

    componentWillMount(){
        this._refresh();
    }

    _refresh(){
        this.setState({loading: false}, () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this._getWeather(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    this.setState({
                        error: error
                    })
                }
            )
        })

    }

    componentDidMount(){

    }

    _getWeather(lat, lon) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
        )
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                temperature: json.main.temp,
                name: json.weather[0].main,
                isLoaded: true,
                loading: true,
            })
        })
    }

    render(){
        const { isLoaded, error, temperature, name } = this.state;

        return(
            <View style={styles.container}>
                <StatusBar hidden={true} />
                { isLoaded ? (
                    <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/>
                ) : (
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>Getting the weather</Text>
                        { error ? <Text style={styles.errorText}>{error}</Text> : null}
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loading: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#fdf6aa',
    },
    loadingText: {
        marginBottom:  20,
        fontSize: 30,
    },
    errorText: {
        marginBottom: 40,
        color: 'blue',
    },
})
