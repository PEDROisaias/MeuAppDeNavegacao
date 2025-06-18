import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions, FlatList } from 'react-native';
import { ImageBackground } from 'react-native';
import backgroundImage from '../assets/background.png';


const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    const colonos = [
        {
            id: '001',
            title: 'Colonist 1',
        },

        {
            id: '002',
            title: 'Colonist 2',
        },

        {
            id: '003',
            title: 'Colonist 3',
        },
    ];

    const Item = ({ item, onPress, navigation, backgroundColor, textColor }) => (
        <Pressable onPress={onPress} style={[styles.item, { backgroundColor }]}>
            <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
        </Pressable>
    );

    const [selectedId, setSelectedId] = useState();

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#313E46' : '#324754';
        const color = item.id === selectedId ? '#606265' : '#CECECF';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    const checkProfile = ({ item }) => {
        const btnProfile = item.id === selectedId

        return (
            <Pressable
                onPress={navigation.navigate('Profile')}
            >
                <Text style={styles.txtBtn}>
                    Colonist file
                </Text>
            </Pressable>
        )

    };


    return (
        <ImageBackground source={backgroundImage} resizeMode="covers">

            <View style={styles.container}>

                <View style={styles.infoContainer}>

                    <View style={styles.titleContainer}>
                        <Text style={styles.txtTitle}>Register of Colonists</Text>
                    </View>

                    <View style={styles.listContainer}>
                        <FlatList
                            data={colonos}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            extraData={selectedId}
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <Text style={styles.txtBtn}>Go to Profile
                            </Text>
                        </Pressable>
                    </View>

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

    infoContainer: {
        width: windowWidth * 0.6,
        height: '50%',
        backgroundColor: '#151515',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#4E5763',
        alignSelf: 'center',
        padding: 5,
    },

    titleContainer: {
        width: '100%',
        backgroundColor: '#1F2225',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4E5763',
        paddingHorizontal: 18,
        paddingBottom: 5,
    },

    btnContainer: {
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

    listContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'space-between'
        
    },

    item: {
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 10,
        justifyContent: 'center'
    },

    txtBtn: {
        color: '#CECECF',
        textAlign: 'center',
        fontSize: 12,
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


});