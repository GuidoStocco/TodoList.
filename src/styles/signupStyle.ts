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
        height: Dimensions.get('window').height * 0.45,
        backgroundColor:'blue'
    },
    box3:{
         height: Dimensions.get('window').height * 0.25,
         backgroundColor:'red'
    }
})