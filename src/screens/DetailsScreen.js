import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { ImageBackground } from 'react-native';
import backgroundImage from '../assets/background.png';


const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {

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
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#ffebcd',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});