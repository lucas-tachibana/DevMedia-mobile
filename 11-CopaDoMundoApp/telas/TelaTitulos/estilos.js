import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    itemTitulo: {
        width: '100%',
        marginTop: 15,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    imagemFundoTitulo: {
        height: 180,
        borderRadius: 20,
        overflow: 'hidden',
    },
    fundoEscuro: {
        backgroundColor: 'rgba(0, 0, 0, 0.23)',
        borderRadius: 20,
        height: '100%',
    },
    areaTopo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 5
    },
    pais: {
        fontSize: 28,
        color: '#fff'
    },
    estrelas: {
    },
    ano: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 20
    },
});

export default estilo;