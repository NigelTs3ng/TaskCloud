import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

// Additional stuff to provide mapstyling for IOS
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

var lat = 1.381962975468755;
var long = 103.72586352182203;

// Map Json Styling Taken From: https://mapstyle.withgoogle.com/
const customStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]

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
            <MapView
              provider = {PROVIDER_GOOGLE}
              onMapLoaded={startLocation}
              style={styles.map} 
              showsUserLocation = {true}
              // Map will focus on user's Location (apple maps only)
              followsUserLocation = {true}
              showsTraffic = {true}
              showsPointsOfInterest = {true}
              customMapStyle = {customStyle}
              >
            </MapView>
          </View>
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
      height: Dimensions.get('window').height / 1.95,
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
        console.log(`${new Date(Date.now()).toLocaleString()}: ${lat},${long}`);
    }
});
export default UserLocation;