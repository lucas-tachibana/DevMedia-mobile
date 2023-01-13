import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        marginVertical: 15
    },
    imageBg: {
        width: 300,
        height: 150
    },
    textoMenu: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        width: 300,
        height: 150,
        textAlignVertical: 'center'
    },
    fundoEscuro: {
        backgroundColor: 'rgba(0, 0, 0, 0.34)',
        borderRadius: 20,
        height: '100%'
    }
});

export default estilo;