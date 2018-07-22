import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

function formatTime(time){
    let minutes = Math.floor(time/60);
    time -= minutes * 60
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
        ? `0${seconds}`
        : seconds}`;


}

export default class Timer extends Component {
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        // console.log(`The current : ${currentProps.isPlaying} and the new ones : ${nextProps.isPlaying}`)
        if(!currentProps.isPlaying && nextProps.isPlaying){ // 앞에가 false고 뒤에가 true이면,
            // console.log("should start")
            const timerInterval = setInterval(() => {
                currentProps.addSecond()
            }, 1000 );
            this.setState({
                timerInterval
            })
        } else if (currentProps.isPlaying && !nextProps.isPlaying){ // 앞에가 true고 뒤에가 false이면,
            // console.log("should stop")
            clearInterval(this.state.timerInterval);
        }
    }

    render(){
        // console.log(this.props);
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            restartTimer,
            addSecond,
        } = this.props;
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName="play-circle" onPress={startTimer}/>
                    )}
                    {isPlaying && (
                        <Button iconName="stop-circle" onPress ={restartTimer}/>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4900',
    },
    upper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lower: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        color: '#fff',
        fontSize: 120,
        fontWeight: '100',
    },
})
