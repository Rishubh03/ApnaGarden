import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const gardens = [
    {
        name: 'Walkers Park',
        location: {
            latitude: 21.108303,
            longitude: 79.051183,
        },
    },
    {
        name: 'aji Ajoba Park',
        location: {
            latitude: 21.108175,
            longitude: 79.046849,
        },
    },
];


const NearestGarden = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    let text = 'Loading...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const customMarkerImage = require('../../assets/images/Marker.png');

    const customMapStyle = [
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
    ];
    return (
        <View className="flex-1">
            {location && (
                <MapView
                    className='w-full h-full'
                    provider="google"
                    customMapStyle={customMapStyle}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="My Location"
                        description="I am here"
                        image={customMarkerImage}
                    />
                    {gardens.map((garden, index) => (
                        <Marker
                            key={index}
                            coordinate={garden.location}
                            title={garden.name}
                            description="A beautiful garden"
                        />
                    ))}
                </MapView>
            )}
            <Text>{text}</Text>
        </View>
    )
}




export default NearestGarden
