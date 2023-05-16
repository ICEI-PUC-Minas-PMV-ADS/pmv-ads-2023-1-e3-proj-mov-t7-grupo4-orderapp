import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Body from "../../components/Body";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("ohchefia.db");

import { useNavigation } from "@react-navigation/native";
import CadastroFormInput from "../../components/CadastroFormInput";

const AdicionaCardapio = () => {
  const navigation = useNavigation();
  const [categoria, setCategoria] = useState();
  const [nome, setNome] = useState();
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState();

  const [formValidateError, setFormValidateError] = useState({
    categoria: false,
    nome: false,
    codigo: false,
    descricao: false,
  });

  const handleSave = () => {
    if (categoria && nome && codigo && descricao) {
      // inserir aqui a logica de salvamento de item ao cardapio
      return navigation.navigate("Cardapio");
    }
    setFormValidateError({
      categoria: !!!categoria,
      nome: !!!nome,
      codigo: !!!codigo,
      descricao: !!!descricao,
    });
    console.log(formValidateError);
  };

  return (
    <Container>
      <Header title={"ADICIONAR ITEM"} />
      <Body>
        <View style={styles.adicionaCardapioWrapper}>
          <Image
            source={require("../../images/Logo_OhChefia.png")}
            style={styles.logo}
          />
          <CadastroFormInput
            value={categoria}
            setValue={setCategoria}
            formTitle="Categoria"
            error={formValidateError.categoria}
          />
          <CadastroFormInput
            value={nome}
            setValue={setNome}
            formTitle="Nome do item"
            error={formValidateError.nome}
          />
          <CadastroFormInput
            value={codigo}
            setValue={setCodigo}
            formTitle="Código"
            error={formValidateError.codigo}
          />
          <CadastroFormInput
            value={descricao}
            setValue={setDescricao}
            formTitle="Descrição"
            error={formValidateError.descricao}
          />
          <Button
            icon="content-save-outline"
            mode="contained"
            style={styles.saveButton}
            onPress={handleSave}
          >
            SALVAR
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  adicionaCardapioWrapper: {
    display: "flex",
    height: "100%",
  },
  logo: {
    minWidth: "31vmax",
    minHeight: "20vmax",
    alignSelf: "center",
    marginTop: "15%",
    marginBottom: "10%",
  },
  saveButton: {
    marginTop: "auto",
    marginBottom: "2%",
    marginHorizontal: "12vw",
    backgroundColor: "#311433",
    height: "50px",
    justifyContent: "center",
    borderRadius: "100px",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
  },
});

export default AdicionaCardapio;
