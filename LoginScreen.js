import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [userName, setName] = useState('adm');
    const [userEmail, setEmail] = useState('adm@gmail.com');
    const [userPassword, setPassword] = useState('@adm123');

    const saveUserName = async () => AsyncStorage.setItem('Name', userName);

    const saveUserEmail = async () => AsyncStorage.setItem('Email', userEmail);

    const saveUserPassword = async () => AsyncStorage.setItem('Password', userPassword);

    const getName = async () => {
        return AsyncStorage.getItem('Name');
    }

    const getEmail = async () => {
        return AsyncStorage.getItem('Email');
    }

    const getPassword = async () => {
        return AsyncStorage.getItem('Password');
    }

    // const userDatasVerification = {
    //     getName: userName,
    //     getEmail: userEmail,
    //     getPassword: userPassword,

    //     if ()
    // }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>LOGIN</Text>

                <View style={styles.inputName}>
                    <TextInput
                        placeholder="Name"
                        onChangeText={(text) => saveUserName(text)}
                    />
                </View>
                <View style={styles.inputEmail}>
                    <TextInput
                        placeholder="E-mail"
                        onChangeText={(text) => saveUserEmail(text)}
                    />
                </View>
                <View style={styles.inputPassword}>
                    <TextInput
                        placeholder="Password"
                        onChangeText={(text) => saveUserPassword(text)}
                    />
                </View>
                <Pressable 
                        onPress={() => navigation.navigate('Home')}
                        android_ripple={}
                    >
                    <Text>Sign In</Text>

                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
    },

    loginContainer: {
        flex: 1,
        marginTop: 110,
        alignSelf: 'center',
        alignContent: 'center',
        width: windowWidth * 0.5,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
    },

    inputName: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 23,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    inputEmail: {
        height: 40,
        borderColor: '#cccccc',
        borderRadius: 23,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    inputPassword: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 23,
        paddingHorizontal: 10,
    },
});
