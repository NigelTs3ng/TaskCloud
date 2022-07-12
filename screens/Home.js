import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ListingItems from '../components/ListingItems';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1}}>
        <View style={{ backgroundColor: 'blue', padding: 40}}>
         <Header style={{ background: 'blue', flex: 1}}/>
         <SearchBar />
        </View>
         <Categories />
         <ListingItems />
    </SafeAreaView>
  )
}