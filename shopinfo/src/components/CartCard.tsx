import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ICartItem } from "../types/Products";
import { MaterialIcons } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";

interface Props {
    item: ICartItem;
}

const CartCard = ({ item }: Props) => {
    const { removeProduct } = useContext(CartContext);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{item.product.title}</Text>
                <TouchableOpacity onPress={() => removeProduct(item.product.id)} style={styles.removeBtn}>
                    <MaterialIcons name="delete" size={24} color="#D20606" />
                </TouchableOpacity>
            </View>
            <Image
                resizeMode="cover"
                style={styles.image}
                source={{ uri: item.product.thumbnail }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.description}>{item.product.description}</Text>
                <Text style={styles.price}>$ {item.product.price}</Text>
            </View>
            <Text style={styles.quantity}>x{item.quantity}</Text>
        </View>
    );
};

export default CartCard;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#252525",
        borderRadius: 10,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 12,
        flex: 1,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 8,
    },
    infoContainer: {
        marginLeft: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff", 
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        color: "#ffffff", 
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4CAF50",
        textAlign: 'center',
    },
    quantity: {
        alignSelf: "flex-end",
        color: "#ffffff", 
    },
    removeBtn: {
        alignSelf: "flex-end",
    },
});