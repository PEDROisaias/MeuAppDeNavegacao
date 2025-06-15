import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Pressable, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import EvilIcons from '@expo/vector-icons/EvilIcons';


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

    // const animatedPressable = Animated.createAnimatedComponent(Pressable);

    // const valueScale = useRef(new Animated.Value(1)).current;

    // const handlePressIn = () => {
    //     Animated.spring(scaleValue, {
    //         toValue: 0.9,
    //         useNativeDriver: true,
    //     }).start();
    // };

    // const handlePressOut = () => {
    //     Animated.spring(scaleValue, {
    //         toValue: 1,
    //         useNativeDriver: true,
    //     }).start();
    // };

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
                        placeholder="Apelido do colono "
                        onChangeText={(text) => saveUserName(text)}
                    />
                </View>
                <View style={styles.inputEmail}>
                    <TextInput
                        placeholder="Identificador de colono"
                        
                        onChangeText={(text) => saveUserEmail(text)}
                    />
                </View>
                <View style={styles.inputPassword}>
                    <TextInput
                        placeholder="Credenciais de acesso"
                        onChangeText={(text) => saveUserPassword(text)}
                    />
                    <EvilIcons 
                    name="lock" 
                    size={12} 
                    color="black"
                    style={styles.lock}
                    />
                </View>
                <Pressable 
                        onPress={ () => navigation.navigate('Home')}
                        style={styles.btnSignIn}
                    >
                    <Text style={styles.txtSignIn}>Acessar</Text>
                </Pressable>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#2196F3',
        justifyContent: 'center', 
    },

    loginContainer: {
        flex: 1,
        marginTop: 110,
        marginBottom: 200,
        alignSelf: 'center',
        borderRadius: 15,
        alignContent: 'center',
        padding: 5,
        width: windowWidth * 0.55,
        backgroundColor: '#F5F5DC',

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
        marginTop: 15,
        marginBottom: 20,
        paddingHorizontal: 10,
    },

    inputEmail: {
        height: 40,
        borderColor: '#cccccc',
        borderRadius: 23,
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },

    inputPassword: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 23,
        paddingHorizontal: 10,
    },

    btnSignIn: {
        display: 'flex',
        width: 110,
        borderWidth: 1,
        borderColor: '#2C3E50',
        borderRadius: 20,
        height: 40,
        padding: 9,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#2C3E50'
    },

    txtSignIn: {
        textAlign: 'center',
        color: 'white',
    },

    lock: {
        alignSelf: 'flex-end',
    }
});
