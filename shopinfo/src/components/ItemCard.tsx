import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";

interface Props {
    product: ProductDTO;
}

const ItemCard = ({ product }: Props) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details", product)}>
            <View style={styles.cardContainer}>
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={{ uri: product.thumbnail }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#252525",
        borderRadius: 10,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
        padding: 12,
        flex: 1
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 20
    },
    infoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 4,
        color: "#ffffff", // White text color
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        color: "#ffffff", // White text color
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4CAF50",
        textAlign: 'center',
    },
});
