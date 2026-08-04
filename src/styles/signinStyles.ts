import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.background
    },
    box1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: 60
    },
    containerTitle:{
        
        alignItems:'center',
        paddingTop: 10
    },
    title:{
        fontSize:30,
        color: COLORS.primary
    },
    subTitle:{
        fontSize: 16,
        color:COLORS.subTitle
    },
    box2:{
        flex:1,
        padding: 10,
    },
    emailTitle:{    
        fontSize: 20,
        color:COLORS.primary
    },
    containerInput:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:COLORS.back2,
        borderRadius: 8,
        marginTop: 5,
        paddingLeft: 5,
        borderWidth:0.5,
        borderColor:COLORS.text,
        height:50
    },
    input:{
        paddingLeft: 5,
        flex:1,
        
    },
    containerInputBox2:{
        marginTop:25,

    },
    btnForgot:{
        alignItems:'flex-end',
        paddingTop:7
    },
    textBtn:{
        fontSize:14,
        color:COLORS.subTitle
    },
    containerBtnEntrar:{
        backgroundColor:COLORS.primary,
        width:'100%',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginTop: 60,
        flexDirection:'row',
        gap:5
    },
    box3:{
        flex:0.6
    },
    containerBox3:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        padding:10
    },
    btnEntrar:{
        
    },
    textBtnEntrar:{
        fontSize:20,
        color:COLORS.white,
        fontWeight:'bold'
    },
    containerCriarConta:{
        flexDirection:'row',
        marginBottom:12
    },
    textCriarConta:{
        paddingRight:7,
        color:COLORS.text
    },
    textBtnCriarConta:{
        color:COLORS.primary
    },
    errorMessage:{
        color:'red'
    }
})