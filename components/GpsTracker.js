import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native';

// Importing items to ensure that location tracking works
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

// Additional stuff to provide mapstyling for IOS
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// Map Json Styling Taken From: https://mapstyle.withgoogle.com/
import customMap from './mapStyle.json'

// Custom original cooridinates
var lat = 1.381962975468755;
var long = 103.72586352182203;

const LOCATION_TRACKING = 'location-tracking';
function UserLocation() {
const [locationStarted, setLocationStarted] = React.useState(false);

// This function tracks the user's location
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
// Request user if app gather data from location tracking 
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
// Function which executes the location tracking function
const startLocation = () => {
        startLocationTracking();
    }

// Function which will stop tracking the user if executed
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
        <View >
              {/* Contains the details of the student being tracked (Name, Username and Current Location) */}
              <View style = {{
                display: 'flex', 
                flexDirection: 'row',
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
                    <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Username: </Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>roadster29</Text>
                  </View>

                  {/* Name Details */}
                  <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Name: </Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>Jane Doe</Text>
                  </View>

                  {/* Current Location */}
                  <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Current Location: </Text>
                      <Text style={{ fontSize: 18, color: 'red' }}>LIVE</Text>
                  </View>
                </View>
              </View>

          {/* Container holding Google Maps */}
          <View style = {styles.container}>
            <MapView
              onMapLoaded={startLocation}
              style={styles.map} 
              showsUserLocation = {true}
              // Map will focus on user's Location (apple maps only)
              followsUserLocation = {true}
              showsTraffic = {true}
              showsPointsOfInterest = {true}
              customMapStyle = {customMap}
              >
            </MapView>
          </View>
        </View>
    );
}
const styles = StyleSheet.create({
    // Dimension of the container holding the map (OR NOT GOOGLE MAPS WONT RENDER)
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Dimensions of google map
    map: {
      // width: Dimensions.get('window').width / 1.2,
      // height: Dimensions.get('window').height / 3,
      width: "100%",
      height: '100%',

    }

});
TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  // If there is a location tracking error
    if (error) {
      // Error message will be printed
        console.log('LOCATION_TRACKING task ERROR:', error);
        return;
    }
    // If data value is valid
    if (data) {
        const { locations } = data;

        // Set the latitude and longitute value from the current location of user's value
        lat = locations[0].coords.latitude;
        long = locations[0].coords.longitude;

        // Print out the current user co-ordinates on console
        console.log(`${new Date(Date.now()).toLocaleString()}: ${lat},${long}`);
    }
});
export default UserLocation;