import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 14,
        marginVertical: 20,
        paddingHorizontal: 20,
        textAlign: 'center'
    },

    inputLine: {
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },

    inputFocus: {
        borderWidth: 1,
        borderColor: '#1f4f66',
        borderRadius: 10,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10
    },

    inputNormal: {
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 5,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10
    },

    buttonBox: {
        width:200,
        marginTop: 20
    },

    numberBox: {
        borderColor: '#13b0c5',
        backgroundColor: '#13b0c5',
        borderWidth: 5,
        height: 150,
        width: 150,
        borderRadius: 75,
        justifyContent: "center",
        alignItems:"center",
        marginTop: 50,
        marginBottom: 50
    },

    number: {
        fontSize: 50,
        color: '#fff'
    }
});

export default styles;