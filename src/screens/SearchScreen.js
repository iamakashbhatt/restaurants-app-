import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SeachBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults('');

    const filterResultsByPrice = (price) => {
        // price === '$
        return results.filter(result => {
            return result.price === price;
        });
    };

    return <>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ScrollView>
            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
            <ResultsList title="Bit Pricier " results={filterResultsByPrice('$$')} />
            <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
        </ScrollView>
    </>
};

const styles = StyleSheet.create({

});

export default SearchScreen;