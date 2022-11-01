import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from 'twrnc'
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
    return (
        <SafeAreaView styles={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={ styles.logo }
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
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
    }
});