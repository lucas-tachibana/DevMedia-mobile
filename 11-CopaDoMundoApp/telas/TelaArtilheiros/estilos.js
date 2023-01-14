import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    itemArtilheiros: {
        width: '100%',
        marginTop: 15,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    imagemFundoArtilheiros: {
        height: 180,
        borderRadius: 20,
        overflow: 'hidden',
    },
    fundoEscuro: {
        backgroundColor: 'rgba(0, 0, 0, 0.23)',
        borderRadius: 20,
        height: '100%',
    },
    areaGols: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nome: {
        fontSize: 22,
        color: '#fff',
        textTransform: 'uppercase',
        marginLeft: 15,
        marginVertical: 5
    },
    gols: {
        width: 90,
        height: 30,
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#021245',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginRight: 15,
        marginVertical: 5,
        paddingHorizontal: 5,
        paddingVertical: 2.5,
        borderRadius: 10,
    },
    anos: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#00905c',
        marginTop: 115
    }

});

export default estilo;