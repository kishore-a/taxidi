import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { useState } from "react";
const Guest = () => {
  let initialState = 0;
  const [adult, setadult] = useState(0);
  const [children, setchildren] = useState(initialState);
  const [infant, setinfant] = useState(initialState);
  return (
    <SafeAreaView>
      {/* This is The adult option in the number of guest selection Screen */}
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Adult</Text>
          <Text style={{ color: "grey" }}>Age 13 or above</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={() => setadult(Math.max(0, adult - 1))}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "black",
                borderRadius: 45,
                marginRight: 20,
                width: 30,
                height: 30,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>-</Text>
            </View>
          </Pressable>
          <Text>{adult}</Text>
          <Pressable onPress={() => setadult(Math.max(0, adult + 1))}>
            <View
              style={{
                borderWidth: 0.5,
                height: 30,
                width: 30,
                justifyContent: "center",
                marginLeft: 20,
                alignItems: "center",
                borderRadius: 45,
              }}
            >
              <Text>+</Text>
            </View>
          </Pressable>
        </View>
      </View>
      {/* This is the Children option in the guest selection screen */}
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Children</Text>
          <Text style={{ color: "grey" }}>Ages 2-12</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={() => setchildren(Math.max(0, children - 1))}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "black",
                borderRadius: 45,
                marginRight: 20,
                width: 30,
                height: 30,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>-</Text>
            </View>
          </Pressable>
          <Text>{children}</Text>
          <Pressable onPress={() => setchildren(children + 1)}>
            <View
              style={{
                borderWidth: 0.5,
                height: 30,
                width: 30,
                justifyContent: "center",
                marginLeft: 20,
                alignItems: "center",
                borderRadius: 45,
              }}
            >
              <Text>+</Text>
            </View>
          </Pressable>
          <Pressable >
          </Pressable>
        </View>
      </View>
      {/* This is the infant option in the guest selection screen */}
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Infant</Text>
          <Text style={{ color: "grey" }}>Under 2</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={() => setinfant(Math.max(0, infant -1))}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "black",
                borderRadius: 45,
                marginRight: 20,
                width: 30,
                height: 30,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>-</Text>
            </View>
          </Pressable>
          <Text>{infant}</Text>
          <Pressable onPress={() => setinfant(Math.max(0,infant+1))}>
            <View
              style={{
                borderWidth: 0.5,
                height: 30,
                width: 30,
                justifyContent: "center",
                marginLeft: 20,
                alignItems: "center",
                borderRadius: 45,
              }}
            >
              <Text>+</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Guest;
