import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


export default function SearchBar() {
  return (
    <View>
        <GooglePlacesAutocomplete placeholder="Search"/>
    </View>
  )
}