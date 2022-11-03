import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from 'twrnc'
import NavOptions from "../components/NavOptions";
import MapView from "react-native-maps";
import Map from "../components/Map";

const MapScreen = () => {
    return (
        <View>
            <View style={tw `h-1/2`}>
                <Map />
            </View>
            <View style={tw `h-1/2`}></View>
        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({

});