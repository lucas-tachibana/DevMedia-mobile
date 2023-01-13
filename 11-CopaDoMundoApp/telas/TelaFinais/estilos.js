import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    itemFinais: {
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    containerFinal: {
        height: 145,
    },
    fundoEscuro: {
        backgroundColor: 'rgba(0, 0, 0, 0.26)',
        height: '100%',
        alignItems: 'center'
    },
    areaResultado: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        marginVertical: 15,
        padding: 0
    },
    titulo: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10
    },
    bandeira:{
        width: 100,
        height: 70,
    },
    placar: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginHorizontal: 10,
        textAlignVertical: "center",
    }
})

export default estilo;