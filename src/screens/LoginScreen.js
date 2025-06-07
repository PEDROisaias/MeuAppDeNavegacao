import React, { useState, useEffect, use }from 'react';
import {View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [userData, setUserData] = useState('');
    const [userDatas, setUserDatas] = useState([]);

    
    const saveUserDatas = async (DatasArray) => {
        try {
            await AsyncStorage.setItem('userDatas', JSON.stringify(DatasArray));
        } catch (error) {
            console.log('Erro ao salvar os dados do usuário:', error);
        }
    };

    const loadUserDatas = async () => {
        try {
            const storedUserDatas = await AsyncStorage.getItem('userDatas');
            if ( storedUserDatas !== null) {
                setUserDatas(JSON.parse(storedUserDatas));
            }
        } catch (error) {
            console.log('Erro ao carregar os dados do usuario:', error);
        }
    };

    const addUserData = () => {
        if (userData.trim() !=='') {
            const newUserDatas = [...userDatas, userData];
            setUserDatas(newUserDatas);
            saveUserDatas(newUserDatas);
            setUserDatas('');
        }
    };

    const removeUserData = (index) => {
        const newUserDatas = userDatas.filter((_, i) => i !== index);
        setUserDatas(newUserDatas);
        saveUserDatas(newUserDatas);
    };

    useEffect(() => {
        loadUserDatas();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
            <TextInput
            style={styles.inputName}
            placeholder="Name"
            value={userData}
            onChangeText={(text) => setUserData(text)}
            />

            <TextInput
            style={styles.inputEmail}
            placeholder="E-mail"
            value= {userData}
            onChangeText={(text) => setUserData(text)}
            />

            <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            value= {userData}
            onChangeText={(text) => setUserData(text)}
            />
            <Button title="Sign in" onPress={() => navigation.navigate('Home') } />
            <FlatList 
            data={userData}
            keyExtractor={(item, index) => index.ToString()}
            renderItem={({item, index}) => (
                <View style={styles.userDataContainer}>
                    <Text style={styles.userDataText}>{item}</Text>
                    <TouchableOpacity onPress={() => removeUserData(index)}>
                        <Text style={styles.deleteText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },

     inputName: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    inputEmail: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    inputPassword: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    userDataContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    userDataText: {
        fontSize: 18,
    },
    deleteText: {
        color: 'red',
        fontWeight: 'bold',
    },
});
