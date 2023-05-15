import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Body from "../../components/Body";
import CardapioList from "../../components/CardapioList";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("ohchefia.db");

import { useNavigation } from "@react-navigation/native";

const EditaCardapio = () => {
  const navigation = useNavigation();
  const [itensSelecionados, setItensSelecionados] = useState([]);

  const listaCardapio = [
    {
      title: "Bebidas",
      data: [
        {
          name: "coquinha gelada",
          price: "R$8,80",
          index: "01",
          id: "coquinhaGeladaId",
        },
        {
          name: "whisky com agua de coco",
          price: "R$19,99",
          index: "02",
          id: "whiskyComAguaDeCocoId",
        },
      ],
    },
    {
      title: "Comida",
      data: [
        {
          name: "espetinho de carne",
          price: "R$3,50",
          index: "01",
          id: "EspetinhoDeCarneId",
        },
        {
          name: "feijão tropeiro",
          price: "R$10,25",
          index: "02",
          id: "feijãoTropeiroId",
        },
      ],
    },
  ];

  const handleSave = () => {
    navigation.navigate("Cardapio");
  };

  const handleDelete = () => {
    navigation.navigate("Cardapio");
  };

  return (
    <Container>
      <Header title={"EDIÇÃO"} />
      <Body>
        <CardapioList
          listaCardapio={listaCardapio}
          modoSelecao
          itensSelecionados={itensSelecionados}
          setItensSelecionados={setItensSelecionados}
        />
        <Button
          icon="square-edit-outline"
          mode="contained"
          style={styles.menuButtons}
          onPress={handleSave}
        >
          SALVAR
        </Button>
        <Button
          icon="delete-forever"
          mode="contained"
          style={styles.menuButtons}
          onPress={handleDelete}
        >
          EXCLUIR
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  menuButtons: {
    backgroundColor: "#311433",
    marginHorizontal: "12vw",
    marginVertical: "5px",
    height: "10%",
    justifyContent: "center",
    borderRadius: "100px",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
  },
});

export default EditaCardapio;
