import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get("window")

export default class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            toDoValue: props.text,
        }
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        deleteToDo: PropTypes.func.isRequired,
        uncompleteToDo: PropTypes.func.isRequired,
        completeToDo: PropTypes.func.isRequired,
        updateToDo: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
    }

    render(){
        const { isEditing, toDoValue  } = this.state;
        const { text, id, deleteToDo, isCompleted } = this.props;

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
                                value={toDoValue}
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
                         <TouchableOpacity onPressOut={(event) => {
                                 event.stopPropagation;
                                 deleteToDo(id);
                             }}>
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

    _toggleComplete = (event) => {
        event.stopPropagation();
        const { isCompleted, uncompleteToDo, completeToDo, id } = this.props;
        if(isCompleted){
            uncompleteToDo(id);
        }else {
            completeToDo(id);
        }
    }
    _startEditing = (event) => {
        event.stopPropagation();
        this.setState({
            isEditing: true,
        })
    }
    _finishEditing = (event) => {
        event.stopPropagation();
        const { toDoValue } = this.state;
        const { id, updateToDo } = this.props;
        updateToDo(id, toDoValue);
        this.setState({
            isEditing: false,
        })
    }
    _controlInput = (text) => {
        this.setState({
            toDoValue: text,
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
        marginVertical: 15,
        marginHorizontal: 7,
    },
    input: {
        marginVertical: 15,
        width: width / 2,
    },
})
