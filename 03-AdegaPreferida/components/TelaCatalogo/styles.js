import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerScroll: {
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '450',
    },
    boxTitle: {
        marginBottom: 15,
    },
    wineCard: {
        flexDirection: 'row',
        backgroundColor: '#ab887c',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: 'center'
    },
    wineImg: {
        width: 60,
        height: 120
    },
    cardBoxDescription: {
        flex: 1,
        marginLeft: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    cardDescription: {
        color: '#fff',
    }
})

export default style;