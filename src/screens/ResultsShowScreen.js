import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null)

    const id = navigation.getParam('id')
    //console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{result.name}</Text>
            <Text style={styles.address}> {result.location.address1}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        alignItems: "center"
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        paddingBottom: 10
    },
    address: {
        marginBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }
})