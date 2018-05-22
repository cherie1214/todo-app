import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window")

export default class ToDo extends Component {
    state = {
        isEditing: false,
        isCompleted: false,
    }

    render(){
        const { isCompleted } = this.state;

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[
                        styles.circle,
                        isCompleted ? styles.completedCircle : styles.uncompletedCircle]}
                    />
                </TouchableOpacity>
                <Text style={styles.text}> Todo will be here</Text>
            </View>
        )
    }

    _toggleComplete = () => {
        this.setState(prevState => {
            return{
                isCompleted: !prevState.isCompleted
            }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 80,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        marginRight: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'red',
        borderWidth: 3,
    },
    completedCircle: {
        borderColor: '#bbb',
    },
    uncompletedCircle: {
        borderColor: '#f23657',
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 15 ,
    },
})
