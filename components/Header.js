import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Header(navigation) {
  return (
    // <View style={{ backgroundColor: "#2C66FF", padding: 20 }}>
    //     <HeaderButton text="TaskCloud"/>
    // </View>


        <View style={{display: 'flex', flexDirection: 'row', alignContent: "center" }}>
        <View>
          {/* Taskcloud Logo */}
          <Image 
              source={require("../assets/images/TaskCloud-Icon.png")} 
              style = 
              {{
                width: 60,
                height: 60,
                resizeMode: "contain",
                padding: 10
              }}>
            </Image>
        </View>
        <View>       
          {/* Header Text */}
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold", padding: 5 }}>
              TaskCloud
          </Text>
        </View>
      </View>

  );
}

const HeaderButton = (navigation) => (
  <TouchableOpacity
    style={{
      backgroundColor: "#2C66FF",
      paddingVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => navigation.navigate("Home")}
  >

<View style={{display: 'flex', flexDirection: 'row', alignContent: "center" }}>
  <View>
    {/* Taskcloud Logo */}
    <Image 
        source={require("../assets/images/TaskCloud-Icon.png")} 
        style = 
        {{
          width: 60,
          height: 60,
          resizeMode: "contain",
          padding: 10
        }}>
      </Image>
  </View>
  <View>       
    {/* Header Text */}
    <Text style={{ color: "white", fontSize: 30, fontWeight: "bold", padding: 5 }}>
      {props.text}
    </Text>
  </View>


    </View>

  </TouchableOpacity>
);
