import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
// Additional stuff to provide mapstyling for IOS
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// Map Json Styling Taken From: https://mapstyle.withgoogle.com/
import customMap from './mapStyle.json'
function UserLocation() {
return (
        <View>
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
                  
                  {/* Row 1: Username Details */}
                  <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Username: </Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>roadster29</Text>
                  </View>

                  {/* Row 2: Name Details */}
                  <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Name: </Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>Jane Doe</Text>
                  </View>

                  {/* Row 3: Current Location */}
                  <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Current Location: </Text>
                      <Text style={{ fontSize: 18, color: 'red' }}>LIVE</Text>
                  </View>
                </View>
              </View>

          {/* Container holding Google Maps */}
          <View style = {styles.container}>
            <MapView
              // Uses Google Maps on both android and ios
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              //  Location Tracking
              showsUserLocation = {true}
              showsTraffic = {true}
              showsPointsOfInterest = {true}
              // Custom mapStyling
              customMapStyle = {customMap}
              // Display user location button
              showsMyLocationButton = {true}
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
      width: "100%",
      height: '100%',
    }

});

export default UserLocation;