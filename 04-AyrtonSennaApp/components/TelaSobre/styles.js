import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    aboutBox: {
        height: '100%',
        padding: 20,
        paddingBottom: 7,
        marginBottom: 15
    },
    aboutTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 7
    },
    aboutImage: {
        borderRadius: 50,
        height: 200,
        width: '100%',
        marginBottom: 7
    },
    aboutParagraph: {
        color: '#757575',
        fontWeight: 'bold',
        fontSize: 14,
    },
    newsBox: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        borderTopColor: '#d5d5d5',
        borderTopWidth: 1, 
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageNews: {
        width: 100,
        height: 100
    },
    newsCard: {
        padding: 10,
        flex: 1
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold', 
    },
    newsDescription: {
        fontSize: 12
    }
})

export default style;