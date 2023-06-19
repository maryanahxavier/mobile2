import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { styles } from "./style"
import MapView, { Region, Marker, Polyline } from 'react-native-maps';
import { style } from '../../components/TitleSlider/styles';
import { color } from 'react-native-reanimated';
import { colors } from '../../styles/colors';


type ICoords ={
    latitude: number
    longitude: number
}

export function LocationScreen() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [region, setRegion] = useState<Region>()
    const [marker, setMarker] = useState<Region[]>()
    const [coords,setCoords] = useState<ICoords[]>([])

    useEffect(() => {
        let subscription: Location.LocationSubscription
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permita o acesso à sua localização');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location)
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009

            })

            setMarker([{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.006,
                longitudeDelta: 0.006
            }]);
            subscription = await Location.watchPositionAsync({
                accuracy: Location.LocationAccuracy.High,
                timeInterval: 1000,
                distanceInterval: 1
            }, (outro) => {
                setCoords ((prevState) => [...prevState,outro.coords])
            });
        })()
        return () =>{
            if(subscription){
                subscription.remove()
            }
        }
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    return (
        <View style={styles.container}>
            {region ? (
                <MapView region={region} style={styles.map} showsUserLocation={true} >
                    {marker && marker.map((i) => (
                        <Marker key={i.latitude} coordinate={i} />
                       
                    ))}
                    {
                        coords && <Polyline
                        coordinates={coords}
                        strokeColor={colors.black}
                        strokeWidth={7}
                   /> }
                    
                </MapView>
            ) : (
                <Text style={styles.paragraph}>{text}</Text>


            )}

        </View>
    );
}

function setCoords(arg0: (prevState: any) => any[]) {
    throw new Error('Function not implemented.');
}
