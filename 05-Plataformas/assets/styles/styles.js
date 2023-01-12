import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        display: 'flex',
        width: '100%',
        paddingHorizontal: 18,
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    imageHistoria: {
        width: '100%',
        height: 200,
        marginBottom: 15
    },
    description: {
        lineHeight: 20,
        marginBottom: 15
    },
    cardsContainer: {
        width: '100%',
        alignItems: 'center'
    },
    containerRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    card: {
        width: 150,
        height: 150,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 10,
        boxSizing: 'border-box',
        borderRadius: 5,
    },
    cardIcon: {
        marginBottom: 10,
        tintColor: '#fff'
    },
    cardText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 20
    },
    xboxBackgroundColorCard: {
        backgroundColor: 'green'
    },
    playstationBackgroundColorCard: {
        backgroundColor: 'blue'
    },
    nintendoBackgroundColorCard: {
        backgroundColor: 'red'
    },
})

export default styles;