import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import logo from "../../assets/StayBook Icon.png"

export default function Nav ( params ) {
    return(
        <View style={styles.NavContainer}>
            <Image source={logo} style={styles.IconStayBook} />
            <Pressable style={styles.BurgerButtom}>
                <View style={styles.BurgerItem}></View>
                <View style={styles.BurgerItem}></View>
                <View style={styles.BurgerItem}></View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    NavContainer:{
        position:'fixed',
        zIndex:2,
        top:0,
        backgroundColor:"#160D00",
        width: "100vw",
        height: 75,
        color:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    IconStayBook: {
        width:150,
        height:50,
        resizeMode:"contain"
    },
    BurgerItem:{
        width:40,
        height:4,
        backgroundColor:"#D9D9D9"
    },
    BurgerButtom: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'fixed',
        top:25,left:10,
        gap:7
    }
})