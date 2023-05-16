import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressab,
} from "react-native";
import { Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import LoginFormInput from "../components/loginFormInput";

const Login = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.css}>
        <Text style={styles.saudacao}>Bem Vindo</Text>
      </View>

      <View style={styles.image}>
        <Image
          source={require("../images/Logo_OhChefia.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputs}>
        <LoginFormInput
          value={login}
          setValue={setLogin}
          formPlaceholder="Usuário"
        />
        <LoginFormInput
          value={senha}
          setValue={setSenha}
          formPlaceholder="Senha"
        />
      </View>

      <View style={styles.buttonlogin}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Home")}
          style={styles.entrarButton}
        >
        <Text
            style={{ fontWeight: 700 }}
        >
          ENTRAR
        </Text>
        </Button>
      </View>
      <View style={styles.forgotpassword}>
        <Button mode="text">
          <Text
            style={{ color: "#5D2860", fontWeight: 700 }}
          >
            Esqueci minha senha
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  css: {
    alignItems: "center",
    padding: 100,
    paddingBottom: 50,
  },
  saudacao: {
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "33px",
    color: "rgba(93, 40, 96, 1)",
  },
  logo: {
    minWidth: "31vmax",
    minHeight: "20vmax",
    alignSelf: "center",
    marginBottom: "10%",
  },
  image: {
    alignItems: "center",
    paddingBottom: 20,
  },
  input_login: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input_password: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonlogin: {
    padding: 30,
  },
  entrarButton: {
    backgroundColor: "#6c0a74",
    marginHorizontal: "22vw",
    marginVertical: "10px",
    height: "50px",
    justifyContent: "center",
    borderRadius: "100px",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
  },
  forgotpassword: {},
});

export default Login;
