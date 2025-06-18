import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { ImageBackground } from 'react-native';
import backgroundImage from '../assets/backgroundhome.png';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <ImageBackground source={backgroundImage} resizeMode='covers'>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.txtTitle}>Ficha do Colono</Text>
                    </View>

                    <View style={styles.nameContainer} >
                        <Text style={styles.txtColono}>Colono 1</Text>
                    </View>

                    <View style={styles.habilitiesContainer} >
                        <Text style= {{color: '#CECECF    ', flexDirection: 'column', fontSize: 11, marginLeft: 8, marginTop: 5}}>
                            Shooting
                        </Text>
                        <Text style={styles.txtHabilities}>Melee</Text>
                        <Text style={styles.txtHabilities}>Construction</Text>
                        <Text style={styles.txtHabilities}>Mining</Text>
                        <Text style={styles.txtHabilities}>Plants</Text>
                        <Text style={styles.txtHabilities}>Animals</Text>
                        <Text style={styles.txtHabilities}>Crafts</Text>
                        <Text style={styles.txtHabilities}>Arts</Text>
                        <Text style={styles.txtHabilities}>Medicine</Text>
                        <Text style={styles.txtHabilities}>Social</Text>
                        <Text style={styles.txtHabilities}>Intellectual</Text>
                        {/* <View></View> */}

                    </View>

                    <View style={styles.buttonContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={styles.txtBtn}>Go to home</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },

    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        width: windowWidth * 0.6,
        height: '50%',
        backgroundColor: '#151515',
        borderRadius: 15,
        alignSelf: 'center',
        padding: 5,                  
    },

    titleContainer: {
        width: '100%',
        backgroundColor: '#1F2225',
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: '#4E5763',

    },

    nameContainer: {
        width: '90%',
        backgroundColor: '#1F2225',
        height: 40,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4E5763',
    },

    habilitiesContainer: {
        width: '95%',
        height: 180,
        backgroundColor: '#1F2225',
        alignSelf: 'center',
        position: 'relative',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4E5763',
        marginTop: 10
    },

    buttonContainer: {
        display: 'flex',
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#4E5763',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#1F2225',
        marginTop: 15,
        marginBottom: 10,
    },

    txtTitle: {
        color: '#CECECF',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 5,
        textAlign: 'center',
        lineHeight: 22
    },

    txtBtn: {
        color: '#CECECF',
        textAlign: 'center',
        fontSize: 12,
    },

    txtColono: {
        color: '#CECECF',
        textAlign: 'center',
        fontSize: 16
    },

    txtHabilities: {
        color: '#CECECF',
        fontSize: 11,
        flexDirection: 'column',
        marginLeft: 8,
    }
});