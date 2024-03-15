import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
    const { cart, getCart } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigation = useNavigation<any>();

    useEffect(() => {
        getCart();
    }, []);

    useEffect(() => {
        // Calculando o total a pagar com base nos itens do carrinho
        let total = 0;
        cart.forEach((item) => {
            total += item.product.price * item.quantity;
        });
        setTotalPrice(total);
    }, [cart]);

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartCard item={item} />}
                keyExtractor={(item) => item.product.id.toString()}
            />

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total a pagar: $ {totalPrice.toFixed(2)}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Payment")} style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Pagar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252525",
        paddingTop: 20,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    checkoutButton: {
        backgroundColor: "#FF6347",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    checkoutText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
});

export default Cart;