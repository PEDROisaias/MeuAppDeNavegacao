import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { ImageBackground } from 'react-native';
import backgroundImage from '../assets/backgroundhome.png';
const windowWidth = Dimensions.get('window').width;


export default function HomeScreen({ navigation }) {


    return (
        <ImageBackground source={backgroundImage} resizeMode="covers">
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.txtTitle}>Painel de Controle da Colônia</Text>
                    </View>

                    <View style={styles.liderColoniaContainer}>
                        
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('Details')}
                        >
                            <Text style={styles.txtBtn}>
                                Registro dos Colonos
                            </Text>
                        </Pressable>
                    </View>
                    {/* <View style={styles.btnContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <Text style={styles.txtBtn}>Go to Profile</Text>
                        </Pressable>
                    </View> */}
                    <View style={styles.btnContainer}>
                        <Pressable
                            onPress={() =>
                                navigation.goBack()
                            }
                        >
                            <Text style={styles.txtBtn}>Go Back</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center'
    },

    infoContainer: {
        alignSelf: 'center',
        borderRadius: 15,
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
        paddingHorizontal: 18,
        paddingBottom: 5

    },


    btnContainer: {
        display: 'flex',
        width: '70%',
        borderWidth: 1,
        borderColor: '#C5C5C5',
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
        alignSelf: 'center',
        marginTop: 12,
        backgroundColor: '#1F2225',
    },

    txtBtn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12
    },

    txtTitle: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 5,
        color: 'white',
        textAlign: 'center',
        lineHeight: 20
    },

});
