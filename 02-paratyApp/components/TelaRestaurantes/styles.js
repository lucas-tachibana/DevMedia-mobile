import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffcda5',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        marginBottom: 20,
        textAlign: 'center',
    },

    restaurantCard: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 5,
        padding: 10,
        borderRadius: 10,
        borderColor: '#979797',
        borderWidth: 1,
    },
    cardImage: {
        width: 300,
        height: 80,
        marginBottom: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default styles;