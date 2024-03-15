import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";
import { ProductDTO } from "../types/Products";

const Details = ({ route }: any) => {
    const product: ProductDTO = route.params;
    const { addProduct } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={{ uri: product.images[0] }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                    <TouchableOpacity onPress={() => addProduct(product)} style={styles.addCart}>
                        <MaterialIcons name="add" size={40} color="#FF6347" />
                        <Text style={styles.priceTitle}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252525",
        justifyContent: "center",
        alignItems: "center",
    },
    cardContainer: {
        backgroundColor: "#252525",
        borderRadius: 10,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
        padding: 12,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: "#ffffff",
    },
    priceTitle: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        color: "#ffffff",
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: "#ffffff",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4CAF50",
        textAlign: 'center',
    },
    addCart: {
        alignItems: "center",
    },
});

export default Details;
