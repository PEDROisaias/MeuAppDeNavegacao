import React from 'react';
// import Animated, {useSharedValue, withTiming, useAnimatedStyle, Easing, } from 'react-native-reanimated';
import { View, StyleSheet, TextInput, Button, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <TextInput style={styles.inpEmail}> Insira seu email</TextInput>
                <Button
                    title="Entrar"
                    onPress={() => navigation.navigate('Home')}
                ></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFEC6',
    },
    containerLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CC5D4C',
    },
    inpEmail: {
        
    }
})