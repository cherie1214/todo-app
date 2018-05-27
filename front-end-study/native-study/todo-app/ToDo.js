import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window")

export default class ToDo extends Component {
    state = {
        isEditing: false,
        isCompleted: false,
        todoValue: "",
    }

    render(){
        const { isCompleted, isEditing, todoValue  } = this.state;
        const { text } = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={[
                            styles.circle,
                            isCompleted ? styles.completedCircle : styles.uncompletedCircle]}
                        />
                    </TouchableOpacity>
                    {isEditing ? (
                            <TextInput
                                value={todoValue}
                                style={[
                                    styles.text,
                                    styles.input,
                                    isCompleted ? styles.completedText : styles.uncompletedText]}
                                multiline={true}
                                onChangeText={this._controlInput}
                                returnKeyType={"done"}
                                onBlur={this._finishEditing}
                            />
                        ) : (
                            <Text style={[
                                styles.text,
                                isCompleted ? styles.completedText : styles.uncompletedText
                            ]}>{text}</Text>
                    )}
                </View>
                { isEditing ?
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this._finishEditing}>
                            <View style={styles.actionContainer}>
                                {/*<Text style={styles.actionText}>V</Text>*/}
                                <Feather color="green" size={25} name="check" style={styles.actionIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                 :
                     <View style={styles.actions}>
                         <TouchableOpacity onPressOut={this._startEditing}>
                             <View style={styles.actionContainer}>
                                 {/*<Text style={styles.actionText}>수정</Text>*/}
                                 <Feather color="#666" size={22} name="edit-2" style={styles.actionIcon} />
                             </View>
                         </TouchableOpacity>
                         <TouchableOpacity>
                             <View style={styles.actionContainer}>
                                 {/*<Text style={styles.actionText}>삭제</Text>*/}
                                 <Feather color="#e83737" size={22} name="delete" style={styles.actionIcon} />
                             </View>
                         </TouchableOpacity>
                     </View>
                 }
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
    _startEditing = () => {
        const { text } = this.props;
        this.setState({
            isEditing: true,
            todoValue: text,
        })
    }
    _finishEditing = () => {
        this.setState({
            isEditing: false,
        })
    }
    _controlInput = () => {
        const { text } = this.props;
        this.setState({
            todoValue: text,
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
        justifyContent: 'space-between',
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width / 2,
        justifyContent: 'space-between',
    },
    circle: {
        marginRight: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#fda33e',
        borderWidth: 3,
    },
    completedCircle: {
        borderColor: '#bbb',
    },
    uncompletedCircle: {
        borderColor: '#f19023',
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 15 ,
    },
    completedText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    uncompletedText: {
        color: '#353839',
    },
    actions: {
        flexDirection: 'row',
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 7,
    },
    input: {
        marginVertical: 15,
        width: width / 2,
    },
})
