import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import tw from 'twrnc';
import { selectDestination, selectOrigin, setTravelTimeInformation } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useRef } from "react";

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!origin || !destination) return; //Break this code if condition not valid
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {edgePadding: {top: 50, right: 50, bottom: 50, left: 50}})
    }, [origin, destination])

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destination=${destination.description}&key=${GOOGLE_MAP_APIKEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
            })
        }
        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY])

    return (
        <MapView
            style={tw `flex-1`}
            initialRegion={{
                // latitude: origin.location.lat,
                // longitude: origin.location.lng,
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate = {{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
        </MapView>
    )
}

export default Map;

const styles = StyleSheet.create({

});