import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20 
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 125,
        borderColor: '#202020',
        borderWidth: 3,
        marginBottom: 50,
    },
    card: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: 320,
        alignItems: "center",
        justifyContent: "center"
    },
    cardTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10 
    },
    cardDescription: {
        color: '#a6a6a6',
        fontSize: 14
    }
})

export default style;