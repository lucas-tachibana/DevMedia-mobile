import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4fbc3',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
    },
    cardImage: {
        width: 300,
        height: 80,
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    }
});

export default styles;