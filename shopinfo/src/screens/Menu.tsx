import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";
import Toast from "react-native-root-toast";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import { ProductDTO } from "../types/Products";
import ItemCard from "../components/ItemCard";

const Menu = () => {
    const { getCart } = useContext(CartContext);
    const { getUser } = useContext(UserContext);
    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                getUser();
                await getCart();
                const url = "https://dummyjson.com/products";
                const response = await axios.get<{ products: ProductDTO[] }>(url);
                setProducts(response.data.products);
            } catch (error) {
                Toast.show("Não foi possível recuperar os produtos", {
                    duration: 3000,
                    position: Toast.positions.BOTTOM,
                    shadow: false,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                    backgroundColor: "red",
                });
            }
        };
        getData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ItemCard product={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252525",
    },
});

export default Menu;
