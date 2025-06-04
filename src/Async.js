import React, { useState, useEffect, use }from 'react';
import {View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
    const [userDate, setUserDate] = useState('');
    const [userDates, setUserDates] = useState([]);

    
    const saveUserDates = async (DatesArray) => {
        try {
            await AsyncStorage.setItem('dates', JSON.stringify(datesArray));
        } catch (error) {
            console.log('Erro ao salvar os dados do usuário:', error);
        }
    };

    const loadTasks = async () => {
        try {
            const storedUsers = await AsyncStorage.getItem('users');
            if ( storedUsers !== null) {
                setUserDates
            }
        }
    }
}