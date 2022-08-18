import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';



var lat = 1.381962975468755;
var long = 103.72586352182203;

const LOCATION_TRACKING = 'location-tracking';
function UserLocation() {
const [locationStarted, setLocationStarted] = React.useState(false);


const startLocationTracking = async () => {
        await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
            accuracy: Location.Accuracy.Highest,
            timeInterval: 10000,
            distanceInterval: 0,
        });
        const hasStarted = await Location.hasStartedLocationUpdatesAsync(
            LOCATION_TRACKING
        );
        setLocationStarted(hasStarted);
        console.log('tracking started?', hasStarted);
    };
React.useEffect(() => {
        const config = async () => {
            let resf = await Location.requestForegroundPermissionsAsync();
            let resb = await Location.requestBackgroundPermissionsAsync();
            if (resf.status != 'granted' && resb.status !== 'granted') {
                console.log('Permission to access location was denied');
            } else {
                console.log('Permission to access location granted');
            }
        };
config();
    }, []);
const startLocation = () => {
        startLocationTracking();
    }
const stopLocation = () => {
        setLocationStarted(false);
        TaskManager.isTaskRegisteredAsync(LOCATION_TRACKING)
            .then((tracking) => {
                if (tracking) {
                    Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
                }
            })
    }
return (
        <View>
              {/* Contains the details of the student being tracked (Name, Username and Current Location) */}
              <View style = {{
                display: 'flex', 
                flexDirection: 'row'
                }}>
                {/* Left Column: Image of user*/}
                <View style = {{padding: 10}}>
                  <Image source= {require("../assets/images/User-Pic-Icon.png")} style = {{
                    width: 80,
                    height: 80,
                    resizeMode: "contain"}}/> 
                </View>

                {/* Right Column: Name, age and ratings of user*/}
                <View style = {{padding: 10}}>
                  
                  {/* Username Details */}
                  <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 19, color: 'white',  fontWeight: "bold"}}>Username: </Text>
                    <Text style={{ fontSize: 19, color: 'white' }}>roadster29</Text>
                  </View>

                  {/* Name Details */}
                  <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 19, color: 'white',  fontWeight: "bold"}}>Name: </Text>
                    <Text style={{ fontSize: 19, color: 'white' }}>Jane Doe</Text>
                  </View>

                  {/* Current Location */}
                  <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 19, color: 'white',  fontWeight: "bold"}}>Current Location: </Text>
                      <Text style={{ fontSize: 19, color: 'red' }}>LIVE</Text>
                  </View>
                </View>
              </View>


          <View style = {styles.container}>
            {/* Insert old map code here */}
            <MapView 
              style={styles.map} 
              onMapLoaded = {startLocation}
              initialRegion = {{
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0922
              }}>
              {/* Pins */}
              <Marker
                coordinate={{
                  latitude: lat,
                  longitude: long
                }}
                pinColor = 'black'>

                <Callout>
                  <Text>Jane Doe's Location</Text>
                </Callout>

              </Marker>
            </MapView>
          </View>
            {locationStarted ?
                <TouchableOpacity onPress={stopLocation}>
                    <Text style={styles.btnText}>Start Tracking</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={startLocation}>
                    <Text style={styles.btnText}>Stop Tracking</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
const styles = StyleSheet.create({
  // Styling for the buttons
    btnText: {
        fontSize: 20,
        backgroundColor: 'blue',
        color: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        alignContent: "center"
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get('window').height / 3
    },
    map: {
      width: Dimensions.get('window').width / 1.2,
      height: Dimensions.get('window').height / 2.3,
    }

});
TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  // If there is a location tracking error
    if (error) {
      // Error message will be printed
        console.log('LOCATION_TRACKING task ERROR:', error);
        return;
    }
    if (data) {
        const { locations } = data;
        lat = locations[0].coords.latitude;
        long = locations[0].coords.longitude;
        // Print out the current user co-ordinates
console.log(
            `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
        );
    }
});
export default UserLocation;