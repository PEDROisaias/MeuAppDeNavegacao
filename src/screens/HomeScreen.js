import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Alert } from 'react-native';
import { ImageBackground } from 'react-native';
import backgroundImage from '../assets/backgroundhome.png';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;


export default function HomeScreen({ navigation }) {
    const [userLoggedName, setUserLoggedName] = useState('Unrecognized colonist');

    useEffect(() => {
        const loadUserLogged = async () => {
            try {
                const userString = await AsyncStorage.getItem('userLogged');
                if (userString) {
                    const user = JSON.parse(userString);
                    setUserLoggedName(user.name);
                }
            } catch (error) {
                console.error('Error loading user logged in to Home', error)
            }
        };
        loadUserLogged();
    }, []);

    const handleLogout = async () => {
        Alert.alert(
            "Exit System",
            "Are you sure you want to log out?",
            [
                {
                    text: "Cancel",
                    style: 'cancel'
                },
                {
                    text: "Yes",
                    onPress: async () => {
                        try {
                            await AsyncStorage.removeItem('userLogged');
                            navigation.navigate('Login');
                        } catch (error) {
                            console.error('Error logging out', error);
                            Alert.alert('System Error', 'Unable to close session.');
                        }
                    }
                }
            ]
        );
    };

    return (
        <ImageBackground source={backgroundImage} resizeMode="covers">
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.txtTitle}>Colony Control Panel</Text>
                    </View>

                    <View style={styles.liderColoniaContainer}>
                        <Text style={{color: '#CECECF', textAlign: 'center', fontSize: 16}}> {userLoggedName} </Text>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('Details')}
                        >
                            <Text style={styles.txtBtn}>
                                Register of Colonists
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.btnContainer}>
                        <Pressable
                            onPress={handleLogout}
                        >
                            <Text style={[styles.txtBtn, {color: '#FF6347'}]}>Exit of System</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
    },

    infoContainer: {
        alignSelf: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#4E5763',
        alignContent: 'center',
        padding: 5,
        height: '50%',
        width: windowWidth * 0.6,
        backgroundColor: '#151515',
    },

    titleContainer: {
        width: '100%',
        backgroundColor: '#1F2225',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4E5763',
        paddingHorizontal: 18,
        paddingBottom: 5
    },

    btnContainer: {
        display: 'flex',
        width: '70%',
        borderWidth: 1,
        borderColor: '#4E5763',
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#1F2225',
        marginTop: 15,
        marginBottom: 10,

    },

    liderColoniaContainer: {
        display: 'flex',
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4E5763',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 12,
        backgroundColor: '#1F2225',
    },

    txtBtn: {
        color: '#CECECF',
        textAlign: 'center',
        fontSize: 12,
    },

    txtTitle: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 5,
        color: '#CECECF',
        textAlign: 'center',
        lineHeight: 22
    },

});
