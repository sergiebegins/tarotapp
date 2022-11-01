import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
  Alert,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const onLoginPressHandle = () => {};
  const onFBLoginPressHandle = () => {};
  const onGoogleLoginPressHandle = () => {};
  const onSignUpHandle = () => {};
  const onPasswordEditHandle = () => {};
  const onUsernameEditHandle = (value: any) => {
    setEmail(value);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{ justifyContent: "center", alignItems: "center", flexGrow: 1 }}
      >
        <Image
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
          }}
          style={{
            width: Dimensions.get("window").width * 0.8,
            height: (Dimensions.get("window").width * 0.8) / 2,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          paddingHorizontal: Dimensions.get("window").width * 0.1,
          paddingBottom: 50,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#464646",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              placeholder={"Email"}
              keyboardType="email-address"
              onChangeText={onUsernameEditHandle}
              returnKeyType="next"
              autoCapitalize="none"
              value={email}
            />
          </View>
        </View>
      </View>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <TouchableOpacity
        style={{ justifyContent: "center", alignItems: "center" }}
        onPress={onSignUpHandle}
      >
        <Text style={{ color: "#464646", marginTop: 20 }}>
          {"Hesabın yok mu "}
          <Text style={{ fontWeight: "bold", color: "#0a0" }}>{"signup"}</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
