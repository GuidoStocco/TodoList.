import { StyleSheet, Dimensions} from "react-native";
import {COLORS} from '@/constants/COLORS'


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.background
    },
    box1: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems:'center',
    },
    containerIcon:{
        backgroundColor: COLORS.back2,
        width: 60,
        height: 60,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 7},
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        marginBottom: 20,
        marginTop: 70
    },
    containerTitlebox1:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    titlebox1:{
        fontSize: 30,
        color: COLORS.primary
    },
    textbox1:{
        fontSize: 15,
        color: COLORS.subTitle
    },
    box2:{
        flex: 0.50,
        padding: 10,
    },
    nameBox2:{
        fontSize: 20,
        marginTop: -5,
        paddingTop: 5,
        color: COLORS.primary
    },
    containerInput:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingLeft: 8,
        borderRadius: 10,
        marginTop: 10,
        marginBottom:5,
        backgroundColor: COLORS.back2,
        borderWidth: 0.5,
        borderColor: COLORS.text
    },
    textInput:{
        
    },
    box3:{
         flex: 0.25,
    },
    containerBox3:{
        flex:1,
        padding: 10
    },
    btnBox3:{
        backgroundColor:COLORS.primary,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewConta:{
        flexDirection:'row',
        gap: 5,
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingBottom: 12
    },
    textBtn:{
        alignSelf:'center',
        fontSize: 20,
        color:COLORS.white
    },
    textFoot:{
        fontSize: 15,
        color:COLORS.subTitle
    },
    textFoot2:{
        color:COLORS.primary
    },
    errorMessage:{
        color: 'red',
    }
})