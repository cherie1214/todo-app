import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import uuidv1 from 'uuid/v1';
import ToDo from './ToDo';

const { width, height } = Dimensions.get("window")

export default class App extends React.Component {
    state = {
        newToDo: "",
        loadedToDos: false,
    }

    componentDidMount = () => {
        this._loadToDos();
    }

    render() {
        const { newToDo, loadedToDos } = this.state;
        if(!loadedToDos){
            return <AppLoading></AppLoading>
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>

                <Text style={styles.tit}>TO DO LIST</Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder={"New To do"}
                        value={newToDo}
                        onChangeText={this._controlNewToDo}
                        placeholderTextColor={"#999"}
                        returnKeyType={"done"}
                        autoCorrect={false}
                        onSubmitEditing={this._addToDo}
                    />
                    <ScrollView contentContainerStyle={styles.toDos}>
                        <ToDo text={"hello i will be a To do"}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
    _controlNewToDo = text => {
        this.setState({
            newToDo: text,
        })
    }
    _loadToDos = () => {
        this.setState({
            loadedToDos: true,
        })
    }
    _addToDo = () => {
         const { newToDo } = this.state;
         if(newToDo !== ""){
             this.setState(prevState => {
                 const ID = uuidv1();
                 const newToDoObject= {
                     [ID] : {
                         id: ID,
                         isCompleted : false,
                         text: newToDo,
                         createdAt: Date.now()
                     }
                 }
                 const newState = {
                     ...prevState,
                     newToDo: "",
                     toDos: {
                         ...prevState.toDos,
                         ...newToDoObject
                     }
                 }
                 return { ...newState };
             })
         }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fda33e',
        alignItems: 'center',
    },
    tit: {
        marginTop: 70,
        marginBottom: 20,
        color: '#fff',
        fontSize: 30,
        fontWeight: '200',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        width: width - 40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        ...Platform.select({
          ios: {
              shadowColor:'rgb(50, 50, 50)',
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                  width: 1,
                  height: 1,
              }
          },
          android: {
              elevation: 3,
          }
        })
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 30,
    },
    toDos: {
        alignItems: 'center',
    },
});
