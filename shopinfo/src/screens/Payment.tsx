import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const Payment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>
      <View style={styles.paymentForm}>
        <Text style={styles.label}>Numero do cartão</Text>
        <TextInput style={styles.input} placeholder="Bote o numero do cartão" />

        <Text style={styles.label}>Data de expiração</Text>
        <View style={styles.expiryInputContainer}>
          <TextInput style={[styles.input, styles.expiryInput]} placeholder="MM" />
          <Text style={styles.separator}>/</Text>
          <TextInput style={[styles.input, styles.expiryInput]} placeholder="YY" />
        </View>

        <Text style={styles.label}>CVV</Text>
        <TextInput style={styles.input} placeholder="digite o CVV" secureTextEntry />

        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
  },
  paymentForm: {
    width: "80%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#252525",
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#252525",
  },
  expiryInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  expiryInput: {
    width: "45%",
  },
  separator: {
    fontSize: 20,
    alignSelf: "center",
    color: "#252525",
  },
  payButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Payment;
