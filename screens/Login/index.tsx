import React, { useState, FC } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { bs } from "../bootstrap";
interface IloginScreen {
  navigation: any;
}
const LoginScreen: FC<IloginScreen> = ({ navigation }) => {
  const [email, setEmail] = useState();

  const onSignUpHandle = () => {};

  const onUsernameEditHandle = (value: any) => {
    setEmail(value);
  };

  const onLoginHandle = (value: any) => {
    navigation.replace("TicTacToeScreen");
  };

  return (
    <ScrollView contentContainerStyle={bs.container}>
      <View style={[bs.row8]}>
        <Image
          source={require("../../assets/images/crashcity.jpg")}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width,
            marginBottom: 20,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={[bs.row1]}>
        <View style={[bs.col12]}>
          <TextInput
            style={[bs.w75, bs.alignCenter, bs.border1, bs.br5, bs.p1]}
            placeholder={"Email"}
            keyboardType="email-address"
            onChangeText={onUsernameEditHandle}
            returnKeyType="next"
            autoCapitalize="none"
            value={email}
          />
        </View>
      </View>
      <View style={[bs.row1]}>
        <TouchableOpacity
          onPress={(e) => onLoginHandle(e)}
          style={[bs.btn, bs.w100]}
        >
          <Text style={[bs.btn]}>{"Oyuna Giriş"}</Text>
        </TouchableOpacity>
      </View>
      <View style={[bs.row1]}>
        <View style={[bs.col12]}>
          <TouchableOpacity onPress={onSignUpHandle}>
            <Text style={[bs.alignCenter]}>
              {"Hesabın yok mu "}
              <Text style={{ fontWeight: "bold", color: "#0a0" }}>
                {"signup"}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
