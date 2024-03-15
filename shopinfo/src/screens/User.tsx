import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const User = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={{ uri: user?.image }} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.nome}>{user?.firstName} {user?.lastName}</Text>
                    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252525'
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333333',
        padding: 20,
        borderRadius: 10
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20
    },
    textContainer: {
        marginLeft: 20,
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10
    },
    logoutButton: {
        backgroundColor: '#FF6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    logoutText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default User;
