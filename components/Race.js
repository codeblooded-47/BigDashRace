import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Fragment,
  SafeAreaView,
  StatusBar
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Race = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" />
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            flex: 1
          }}
        >
          {/* top banner start */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 150
              }}
              source={require("./../assets/Images/main-image.jpeg")}
            />
            <Text
              style={[
                styles.appBannerText,
                { fontSize: 30, backgroundColor: "transparent" }
              ]}
            >
              The Dash is On
            </Text>
          </View>
          {/* ./top banner end */}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10
            }}
          >
            <Text style={{ color: "white", fontSize: 30, marginTop: 10 }}>
              Salt Lake City April 1, 2021
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 10,
                marginBottom: 50,
                fontFamily: "Roboto-Regular",
                fontSize: 15
              }}
            >
              Simply put, The Big Dash For Cash is unlike any scavenger hunt
              you’ve ever joined. With a minimum of $5k for every grand prize,
              each race is designed to pay out in a big way.
            </Text>

            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => {
                navigation.navigate("Race");
              }}
            >
              <Text style={styles.appButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => {
                navigation.navigate("Qrscanner");
              }}
            >
              <Text style={styles.appButtonText}>Qr Scan</Text>
            </TouchableOpacity>
          </View>
          {/* circle for cheching how many qr scanned */}
          <View
            style={{
              flexWrap: "wrap",
              flex: 1,
              flexDirection: "row",
              alignItems: "stretch",
              // justifyContent: 'flex-start',
              justifyContent: "center"
            }}
          >
            {/* cicle one */}
            <View
              style={{
                justifyContent: "center"
              }}
            >
              <View
                style={[
                  styles.circleLine,
                  {
                    left: 10,
                    right: 0,
                    backgroundColor: "#98FB98"
                  }
                ]}
              />
              <Text
                style={[styles.cirlceTextview, { backgroundColor: "#98FB98" }]}
              >
                1
              </Text>
            </View>
            {/* cicle two */}
            <View
              style={{
                justifyContent: "center"
              }}
            >
              <View
                style={[
                  styles.circleLine,
                  {
                    backgroundColor: "#98FB98"
                  }
                ]}
              />
              <Text
                style={[styles.cirlceTextview, { backgroundColor: "#98FB98" }]}
              >
                2
              </Text>
            </View>

            {/* circle three */}

            <View
              style={{
                justifyContent: "center"
              }}
            >
              <View
                style={[
                  styles.circleLine,
                  {
                    backgroundColor: "#98FB98"
                  }
                ]}
              />
              <Text
                style={[styles.cirlceTextview, { backgroundColor: "#98FB98" }]}
              >
                3
              </Text>
            </View>
            {/* cicle four */}
            <View
              style={{
                justifyContent: "center"
              }}
            >
              <View style={styles.circleLine} />
              <Text style={styles.cirlceTextview}>4</Text>
            </View>

            {/* cicle five */}
            <View
              style={{
                justifyContent: "center"
              }}
            >
              <View style={[styles.circleLine, {}]} />
              <Text style={styles.cirlceTextview}>5</Text>
            </View>
            {/* cicle six */}
            <View
              style={{
                justifyContent: "center"
              }}
            >
              <View
                style={[
                  styles.circleLine,
                  {
                    right: 10
                  }
                ]}
              />
              <Text style={styles.cirlceTextview}>6</Text>
            </View>
          </View>

          {/* ./circle for cheching how many qr scanned */}

          {/* middle body banner */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 170
              }}
              source={require("./../assets/Images/main-image.jpeg")}
            />
            <Text
              style={[
                styles.appBannerText,
                { fontSize: 30, backgroundColor: "transparent" }
              ]}
            >
              The Dash is On
            </Text>
          </View>
          {/* ./middle body banner */}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 150
              }}
              source={require("./../assets/Images/rules-banner.jpg")}
            />
            <Text
              style={[
                styles.appBannerText,
                {
                  fontSize: 20,
                  backgroundColor: "transparent",
                  textAlign: "left",
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  alignSelf: "flex-start",
                  bottom: 10
                }
              ]}
            >
              How it Works: Official Rules
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              padding: 10
            }}
          >
            <Text style={styles.bottomText}>
              The first person to successfully hit all 6 stops wins the total
              cash prize.
            </Text>
            <Text style={styles.bottomText}>
              Races start at 8am on the given race day, with the first clue
              being added to thebigdashforcash.com race page at 8am that same
              day.
            </Text>
            <Text style={styles.bottomText}>
              Roughly 12 hours before the race starts, The Big Dash For Cash
              will send each participant a map through email showing a 4 square
              mile area where the first clue will be found.
            </Text>
            <Text style={styles.bottomText}>
              Each stop will be no more than 10 miles from the previous stop.
            </Text>
            <Text style={styles.bottomText}>
              At each stop (including the last stop), you will be required to
              check in through a QR code. This QR code will bring you to a page
              on thebigddashforcash.com where you will need to log in with your
              credentials you set when registering for the race. Once logged in,
              you will see the next clue. Login details are time stamped to
              identify the winner.
            </Text>
            <Text style={styles.bottomText}>
              Each stop will have a Big Dash For Cash Representative to monitor
              the race and assist where needed.
            </Text>
            <Text style={styles.bottomText}>
              The first person to successfully login with all 6 QR codes
              received at each stop wins the race.
            </Text>
            <Text style={styles.bottomText}>
              If no participant has successfully logged in to all 6 stops within
              10 hours, the race will be stopped, race participants notified by
              text, and the winner will be determined by the person who checked
              into the furthest stop in the shortest amount of time.
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 300,
                resizeMode: "contain"
              }}
              source={require("./../assets/Images/small.png")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cirlceTextview: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#898989",
    margin: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontFamily: "Roboto-Bold"
  },
  circleLine: {
    backgroundColor: "#898989",
    padding: 5,
    left: 0,
    right: 0,
    position: "absolute"
  },

  bottomText: {
    color: "#fff",
    padding: 10,
    fontSize: 18
  },
  appBannerText: {
    position: "absolute",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: "Roboto-Bold",
    elevation: 10,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 12,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 5,
    textAlign: "center"
  },
  // ...
  appButtonContainer: {
    width: "50%",
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10
  },
  appButtonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  scrollView: {
    backgroundColor: "black"
  }
});
export default Race;
