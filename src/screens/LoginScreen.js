import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions} from 'react-native';
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

    const userDatasVerification = {
        getName: userName,
        getEmail: userEmail,
        getPassword: userPassword,

        if ()
    }

    // const addUserData = () => {
    //     if (userData.trim() !=='') {
    //         const newUserDatas = [...userDatas, userData];
    //         setUserDatas(newUserDatas);
    //         saveUserDatas(newUserDatas);
    //         setUserDatas('');
    //     }
    // };

    // const removeUserData = (index) => {
    //     const newUserDatas = userDatas.filter((_, i) => i !== index);
    //     setUserDatas(newUserDatas);
    //     saveUserDatas(newUserDatas);
    // };

    // useEffect(() => {
    //     loadUserDatas();
    // }, []);

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}></Text>
                <TextInput
                    style={styles.inputName}
                    placeholder="Name"
                    onChangeText={(text) => saveUserName(text)}
                />
                <TextInput
                    style={styles.inputEmail}
                    placeholder="E-mail"
                    onChangeText={(text) => saveUserEmail(text)}
                />
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Password"
                    onChangeText={(text) => saveUserPassword(text)}
                />
                <Button title="Sign in" onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    loginContainer: {
        flex: 1,
        width: windowWidth * 0.5,
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
});
