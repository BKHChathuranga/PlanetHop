import React, { useEffect, useState } from "react";
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import SearchOptionInfo from "../components/SearchOptionInfo";
import planetDetails from "../constants/PlanetDetails";
import { getTransportationMode } from "../services/TransportationMode";
import { getLocations } from "../services/LocationService";

const dimensions = Dimensions.get("screen");

const BookingScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2160);
  const [mode, setMode] = useState("");
  const [isBookDisabled, setIsBookDisabled] = useState(true);
  const [modes, setModes] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getTransportationMode()
      .then((res) => {
        setModes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getLocations()
      .then((res) => {
        setLocations(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const validate = () => {
    // if(mode != 0 && destination!= 0 && currentLocation != 0){
    //   setIsBookDisabled(false)
    // }
  // }

  return (
    <View style={{ ...styles.container, paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={(_) => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color={"#FFFEFE"} />
        </TouchableOpacity>
        <Text style={styles.title}>Book your next trip</Text>
      </View>
      <ScrollView>
        <Text style={styles.text}>You can compare different features between different transportation modes</Text>
        <View style={styles.form}>
          <View style={styles.dropdown}>
            <Text style={styles.label}>Current Location</Text>
            <View style={Platform.OS === "android" ? styles.picker : ""}>
              <Picker
                selectedValue={currentLocation}
                onValueChange={(value) => setCurrentLocation(value)}
                dropdownIconColor={"#791AF6"}
                dropdownIconRippleColor={"#791AF6"}
                selectionColor={"#B36EFA1F"}
                itemStyle={styles.pickerItem}
                placeholder="Select the Current Location"
              >
                <Picker.Item label="---" value={0} color="#791AF680" />
                {locations.map((item, idx) => (
                  <Picker.Item label={item.name} value={item._id} color="#791AF6" key={idx} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.dropdown}>
            <Text style={styles.label}>Destination Location</Text>
            <View style={Platform.OS === "android" ? styles.picker : ""}>
              <Picker
                selectedValue={destination}
                onValueChange={(value) => setDestination(value)}
                dropdownIconColor={"#791AF6"}
                dropdownIconRippleColor={"#791AF6"}
                selectionColor={"#B36EFA1F"}
                itemStyle={styles.pickerItem}
                placeholder="Select the Current Location"
              >
                <Picker.Item label="---" value={0} color="#791AF680" />
                {locations.filter(x => x._id != currentLocation).map((item, idx) => (
                  <Picker.Item label={item.name} value={item._id} color="#791AF6" key={idx} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.dropdown}>
            <Text style={styles.label}>Depature Date</Text>
            <View style={styles.date}>
              <View style={styles.inputGroup}>
                <TextInput keyboardType="number-pad" style={styles.textInput} value={`${day}`} onChangeText={(value) => setDay(value)} />
                <Text style={{ ...styles.label, textAlign: "center", paddingTop: 5 }}>Day</Text>
              </View>
              <View style={styles.inputGroup}>
                <TextInput keyboardType="number-pad" style={styles.textInput} value={`${month}`} onChangeText={(value) => setMonth(value)} />
                <Text style={{ ...styles.label, textAlign: "center", paddingTop: 5 }}>Month</Text>
              </View>
              <View style={styles.inputGroup}>
                <TextInput keyboardType="number-pad" style={styles.textInput} value={`${year}`} onChangeText={(value) => setYear(value)} />
                <Text style={{ ...styles.label, textAlign: "center", paddingTop: 5 }}>Year</Text>
              </View>
            </View>
          </View>

          <View style={styles.dropdown}>
            <Text style={styles.label}>Transportation Mode</Text>
            <View style={Platform.OS === "android" ? styles.picker : ""}>
              <Picker
                selectedValue={mode}
                onValueChange={(value) => setMode(value)}
                dropdownIconColor={"#791AF6"}
                dropdownIconRippleColor={"#791AF6"}
                selectionColor={"#B36EFA1F"}
                itemStyle={styles.pickerItem}
                placeholder="Select the Current Location"
              >
                <Picker.Item label="---" value={0} color="#791AF680" />
                {modes.map((item, idx) => (
                  <Picker.Item label={item.name} value={item.name} color="#791AF6" key={idx} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <SearchOptionInfo bullets={planetDetails.mars.bullets} desc={planetDetails.mars.desc} price={560} />
      </ScrollView>
      <TouchableOpacity style={!(mode != 0 && destination!= 0 && currentLocation != 0)? styles.bookBtnDisabled : styles.bookBtnActive} disabled={(mode != 0 && destination!= 0 && currentLocation != 0)? false: true}>
        <Text style={!(mode != 0 && destination!= 0 && currentLocation != 0)? styles.bookTextDisabled : styles.bookTextActive}>Book the Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030413",
    width: dimensions.width,
    paddingLeft: "5%",
    paddingRight: "5%",
    flexDirection: "column",
    flex: 1,
  },
  text: {
    color: "#FFFEFE",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 5,
    fontFamily: "Poppins_400Regular",
  },
  header: {
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#B36EFA",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins_800ExtraBold",
  },
  backBtn: {
    paddingEnd: 15,
  },
  bookBtnActive: {
    backgroundColor: "#791AF6",
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
  bookBtnDisabled: {
    backgroundColor: "#D1A1FF",
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
  bookTextActive: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    color: "#FFFEFE",
  },
  bookTextDisabled: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    color: "#8E70AC",
  },
  label: {
    color: "#B36EFA",
    paddingBottom: 5,
    fontFamily: "Poppins_400Regular",
  },
  picker: {
    borderColor: "#791AF6",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#B36EFA1F",
  },
  pickerItem: {
    fontFamily: "Poppins_400Regular",
  },
  dropdown: {
    paddingVertical: 5,
  },
  date: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "center"
  },
  textInput: {
    height: 50,
    color: "#FFFEFE",
    borderColor: "#791AF6",
    borderWidth: 2,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  inputGroup: {
    paddingHorizontal: 15
  }
});
