import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    ratingContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    ratingHeader:{
        marginTop:10,
        marginBottom: 20,
    },
    eventHeader:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 40,
    }
});