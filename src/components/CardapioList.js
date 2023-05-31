import React from 'react';
import Container from './Container';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const CardapioList = ({
  listaCardapio,
  modoSelecao = false,
  itensSelecionados,
  setItensSelecionados,
}) => {
  const renderList = () => {
    return (
      <View style={styles.sectionWrapper}>
        <SectionList
          sections={listaCardapio}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.product}>
                {modoSelecao ? (
                  <RadioButton
                    value={item.id}
                    status={
                      itensSelecionados?.find((idItem) => idItem === item.id)
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => {
                      itensSelecionados?.find((idItem) => idItem === item.id)
                        ? setItensSelecionados([
                            ...itensSelecionados.filter(
                              (idItem) => idItem !== item.id
                            ),
                          ])
                        : setItensSelecionados([...itensSelecionados, item.id]);
                    }}
                  />
                ) : (
                  `${item.index} - `
                )}
                {item.name}
              </Text>
              <View
                style={{
                  borderStyle: 'dotted',
                  borderBottomWidth: 2,
                  flexGrow: 1,
                }}
              ></View>
              <Text style={styles.product}>{item.price}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <Container>
        Desculpe, mas não conseguimos encontrar itens no cardápio.
      </Container>
    );
  };

  return <>{!!listaCardapio ? renderList() : renderEmpty()}</>;
};

const styles = StyleSheet.create({
  sectionWrapper: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'rgba(217, 217, 217, 0.35)',
    marginVertical: '10%',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 10,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    padding: 5,
  },
  header: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23,
    marginHorizontal: 5,
    marginTop: 15,
  },
  product: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
});

export default CardapioList;
