import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Pressable, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import backgroundImage from '../assets/background.png'
import { ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [users, setUsers] = useState([]);



    const saveUserName = (text) => {
        setName(text);
    };

    const saveUserEmail = (text) => {
        setEmail(text);
    };

    const saveUserPassword = (text) => {
        setPassword(text);
    };

    const saveUser = async () => {
        try {
            const newUser = { setName, setEmail, setPassword };
            const updatedUser = [...users, newUser];
            await AsyncStorage.setItem('users', JSON.stringify(updatedUser));
            setUsers(updatedUser);
            setName('');
            setEmail('');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Erro ao salvar usuario', error);

        }
    };

    React.useEffect(() => {
        const userLoad = async () => {
            try {
                const usersSaved = await AsyncStorage.getItem('users');
                if (usersSaved) {
                    setUsers(JSON.parse(usersSaved));
                }
            } catch (error) {
                console.error('Erro ao carregar usuários:', error);
            }
        };
        userLoad();
    }, []);

    // const getName = async () => {
    //     return AsyncStorage.getItem('Name');
    // }

    // const getEmail = async () => {
    //     return AsyncStorage.getItem('Email');
    // }

    // const getPassword = (text) => {
    //     return AsyncStorage.getItem('Password');
    // }


    return (
        <ImageBackground source={backgroundImage} resizeMode="cover">
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Autenticação de Colono</Text>
                    </View>
                    <View style={styles.containerInputName}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Apelido do colono"
                            placeholderTextColor={"#747F89"}
                            value={userName}
                            onChangeText={(text) => saveUserName(text)}
                        />
                    </View>
                    <View style={styles.containerInputEmail}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Identificador de colono"
                            placeholderTextColor={"#747F89"}
                            value={userEmail}
                            onChangeText={(text) => saveUserEmail(text)}
                        />
                    </View>
                    <View style={styles.containerInputPassword}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Credenciais de acesso"
                            placeholderTextColor={"#747F89"}
                            value={userPassword}
                            onChangeText={(text) => saveUserPassword(text)}
                        />
                    </View>
                    <Pressable
                        onPress={saveUser}
                        style={styles.btnSignIn}
                    >
                        <Text style={styles.txtSignIn}>Acessar</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    },

    loginContainer: {
        marginTop: 110,
        marginBottom: 200,
        alignSelf: 'center',
        borderRadius: 15,
        alignContent: 'center',
        padding: 5,
        width: windowWidth * 0.55,
        backgroundColor: '#151515',
    },

    titleContainer: {
        width: '100%',
        backgroundColor: '#1F2225',
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingBottom: 5
    },

    containerInputName: {
        height: 40,
        borderColor: '#C5C5C5',
        borderWidth: 1,
        borderRadius: 23,
        marginTop: 15,
        marginBottom: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: '#1F2225',
    },

    containerInputEmail: {
        height: 40,
        borderColor: '#C5C5C5',
        borderWidth: 1,
        borderRadius: 23,
        marginBottom: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: '#1F2225',
    },

    containerInputPassword: {
        height: 40,
        borderColor: '#C5C5C5',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 23,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: '#1F2225',
    },


    title: {
        fontSize: 14,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 5,
        color: 'white',
        lineHeight: 20,
    },

    inputs: {
        color: 'white',
    },


    btnSignIn: {
        display: 'flex',
        width: 110,
        borderWidth: 1,
        borderColor: '#C5C5C5',
        borderRadius: 20,
        height: 40,
        padding: 9,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#1F2225'
    },

    txtSignIn: {
        textAlign: 'center',
        color: 'white',
    },
});