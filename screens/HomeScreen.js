import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from 'twrnc'
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView styles={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={ styles.logo }
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder="Where from ?"
                    styles={styles.searchBar}
                    returnKeyType={'search'}
                    fetchDetails={true}
                    minLength={2}
                    enableHighAccuracyLocation={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    onPress={(data, details = null ) => {
                        console.log(data, details)
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    debounce={400}
                />
                <NavOptions />
            </View>

            <Text style={tw`text-red-500 p-10`}>I am the HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    searchBar: {
        container: {
            flex: 0
        },
        textInput: {
            fontSize: 18
        }
    }
});