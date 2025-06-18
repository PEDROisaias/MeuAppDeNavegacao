import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backgroundImage from '../assets/background.png'
import { ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [userName, setName] = useState('adm');
    const [userEmail, setEmail] = useState('adm@123');
    const [userPassword, setPassword] = useState('123');
    const [users, setUsers] = useState([]);
    const [userLogged, setUserLogged] = useState(false);


        useEffect(() => {
        const userLoad = async () => {
            try {
                const usersSaved = await AsyncStorage.getItem('users');
                if (usersSaved) {
                    setUsers(JSON.parse(usersSaved));
                }

                const userLogged = await AsyncStorage.getItem('userLogged');
                if (userLogged) {
                    setUserLogged(true); 
                    navigation.navigate('Home');
                }
            } catch (error) {
                console.error('Error when loading users:', error);
            }
        };
        userLoad();
    }, []);


    const handleRegister = async () => {
        if (!userName || !userEmail || !userPassword) {
            Alert.alert('Error', 'Fill in all fields to register');
            return;
        }

        const existentEmail = users.some(user => user.email === userEmail);
        if (existentEmail) {
            Alert.alert('Error', 'This email is already registered. Try another one');
            return;
        }

        try {
            const newUser = {name: userName, email: userEmail, password: userPassword};
            const updatedUsers = [...users, newUser];
            await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
            setUsers(updatedUsers);
            Alert.alert('Sucess', 'Colonist successfully registered! The system can now be accessed.');

            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error registering settler', error);
            Alert.alert('System Error', 'An error occurred while registering a settler.');
        }
    };

    const handleLogin = async () => {
        if (!userEmail || !userPassword) {
            Alert.alert('Erro', 'System Error!! Enter your identifier and access credentials.');
            return;
        }

        const userFound = users.find(user => user.email === userEmail && user.password === userPassword);

        if (userFound) {
            try {
                await AsyncStorage.setItem('userLogged', JSON.stringify(userFound));
                setUserLogged(true);
                Alert.alert('Sucess', 'Welcome back Sir, {userFound.name}');
                navigation.navigate('Home');
            } catch (error) {
                console.error('Error loading logged in user', error);
                Alert.alert('Error', 'System Error!! Unable to maintain session.');
            }
        } else {
            Alert.alert('Error', 'System Error!! Incorrect identifier or access credentials.')
        }
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userLogged');
            setUserLogged(false);
            Alert.alert('System closed', 'You have been successfully logged out.');
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error logging out', error);
            Alert.alert('System error', 'Unable to close system.');
        }
    };


    return (
        <ImageBackground source={backgroundImage} resizeMode="cover">
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.txtTitle}>Autenticação de Colono</Text>
                    </View>
                    <View style={styles.containerInputName}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Apelido do colono"
                            placeholderTextColor={"#747F89"}
                            value={userName}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.containerInputEmail}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Identificador de colono"
                            placeholderTextColor={"#747F89"}
                            value={userEmail}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.containerInputPassword}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Credenciais de acesso"
                            placeholderTextColor={"#747F89"}
                            value={userPassword}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    <Pressable
                        onPress={handleLogin}
                        style={styles.btnSignIn}
                    >
                        <Text style={styles.txtSignIn}>Acessar</Text>
                    </Pressable>
                    <Pressable
                        onPress={handleRegister}
                        style={[styles.btnSignIn, { marginTop: 10 }]}
                    >
                        <Text style={styles.txtSignIn}>Cadastrar colono</Text>
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
        borderColor: '#4E5763',
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
        borderColor: '#4E5763',
        borderWidth: 1,
        borderRadius: 23,
        marginBottom: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: '#1F2225',
    },

    containerInputPassword: {
        height: 40,
        borderColor: '#4E5763',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 23,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: '#1F2225',
    },


    txtTitle: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 5,
        color: '#CECECF',
        lineHeight: 20,
        textAlign: 'center'
    },

    inputs: {
        color: 'white',
    },

    btnSignIn: {
        width: '60%',
        borderWidth: 1,
        borderColor: '#4E5763',
        borderRadius: 20,
        height: 40,
        marginBottom: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F2225'
    },

    txtSignIn: {
        textAlign: 'center',
        color: '#CECECF',
    }, 
});