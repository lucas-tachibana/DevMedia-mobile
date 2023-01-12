import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e3e4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 320,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 30,
        borderColor: '#979797',
        borderWidth: 1,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    imageCover: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    buttonWrapper: {
        marginBottom: 10,
    },
    navButton: {
        buttonColor: '#372d00',
    }
})

export default styles;