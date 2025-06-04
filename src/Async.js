import React, { useState, useEffect, use }from 'react';
import {View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
    const [userDate, setUserDate] = useState('');
    const [userDates, setUserDates] = useState([]);

    
    const saveUserDates = async (DatesArray) => {
        try {
            await AsyncStorage.setItem('userDates', JSON.stringify(datesArray));
        } catch (error) {
            console.log('Erro ao salvar os dados do usuário:', error);
        }
    };

    const loadTasks = async () => {
        try {
            const storedUsers = await AsyncStorage.getItem('userDates');
            if ( storedUsers !== null) {
                setUserDates(JSON.parse(storedUsersDates));
            }
        } catch (error) {
            console.log('Erro ao carregar os dados do usuario:', error);
        }
    };

    const addUserDate = () {
        if (userDate.trim() !=='') {
            const newUserDates = [...userDates, userDate];
            setUserDates(newUserDates);
            saveUserDates(newUserDates);
            setUserDates('');
        }
    };

    const removeUserDate = (index) => {
        const newUserDates = userDates.filter((_, i) => i !== index);
        setUserDates()
    }
}