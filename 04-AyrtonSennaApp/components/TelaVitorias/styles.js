import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    resultsCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 20,
        width: 340,
        marginBottom: 20
    },
    resultsTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    resultsParagraph: {
        color: '#c8c8c8',
        lineHeight: 18,
        marginBottom: 10
    },
    resultsDataItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    resultsDataSpan: {
        color: '#eecb01',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 5
    },
    resultsDataDescription: {
        color: '#a6a6a6',
        fontSize: 16
    },
    worldChampionshipCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginBottom: 15
    },
    worldChampionshipTitle: {
        color: '#fff',
        textAlign: 'center',
        padding: 15
    },
    worldChampionshipImage: {
        width: 300,
        height: 200
    }
})

export default style;