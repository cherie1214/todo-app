import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
     Rain: {
         colors: ['#00c6fb', '#005bea'],
         tit: "Raining",
         subtit: "For more info look outside",
         icon: "weather-pouring",

     },
     Clear: {
         colors: ['#fef253', '#ff7300'],
         tit: "Sunny clearly",
         subtit: "Go outside to get Vitamin D",
         icon: "weather-sunny",

     },
     Thunderstorm: {
         colors: ['#00ecbc', '#007adf'],
         tit: "Thunderstorm in the house",
         subtit: "Actually, outside of house ",
         icon: "weather-lightning",

     },
     Clouds: {
         colors: ['#d7d2cc', '#304352'],
         tit: "Clouds",
         subtit: "It makes gloomy moods",
         icon: "weather-cloudy",

     },
     Snow: {
         colors: ['#7de2fc', '#b9b6e5'],
         tit: "Snowing",
         subtit: "Do you wanna build a snowman?",
         icon: "weather-snowy",

     },
     Drizzle: {
         colors: ['#89f7fe', '#66a6ff'],
         tit: "Drizzle",
         subtit: "Is like rain ",
         icon: "weather-rainy",

     },
     Haze: {
         colors: ['#89f7fe', '#66a6ff'],
         tit: "Haze",
         subtit: "Be careful the fog",
         icon: "weather-fog",

     },
     Mist: {
         colors: ['#89f7fe', '#66a6ff'],
         tit: "Mist",
         subtit: "Be careful when you drive",
         icon: "weather-fog",

     },
}

function Weather( {weatherName, temp} ){
    // console.log(weatherName)
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.tit}>{weatherCases[weatherName].tit}</Text>
                <Text style={styles.subtit}>{weatherCases[weatherName].subtit}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        fontSize: 48,
        color:'#fff',
    },
    lower: {
        flex: 1,
        padding: 24,
        marginBottom: 40,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    tit: {
        marginBottom: 10,
        fontSize: 38,
        fontWeight: '300',
        color:'#fff',
    },
    subtit: {
        fontSize: 24,
        color:'#fff',
    },
})
