import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const LoginFormInput = ({
  value,
  setValue,
  formPlaceholder,
  error = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const formField = StyleSheet.compose(
    styles.formField,
    (value || isFocused) && styles.formFieldFocus
  );

  const formFieldStyles = StyleSheet.compose(
    formField,
    error && styles.formFieldErrorState
  );

  return (
    <View style={formFieldStyles}>
      <TextInput
        style={styles.formFieldText}
        placeholder={formPlaceholder}
        onChangeText={setValue}
        value={value}
        keyboardType="default"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        textAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    backgroundColor: "rgba(47, 103, 141, 0.35)",
    marginHorizontal: "5px",
    marginVertical: "1%",
    height: "60px",
    borderRadius: "100px",
    display: "flex",
    padding: "10px",
    justifyContent: "center"
  },
  formFieldFocus: {
    backgroundColor: "rgba(47, 103, 141, 1)",
  },
  formFieldText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "19px",
    color: "white",
    width: "100%",
    marginHorizontal: "10px",
  },
  formFieldErrorState: {
    borderWidth: "2px",
    borderColor: "rgba(255,0,0,0.6)",
  },
});

export default LoginFormInput;
