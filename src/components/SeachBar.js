import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather
                name="search"
                style={styles.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 7,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;