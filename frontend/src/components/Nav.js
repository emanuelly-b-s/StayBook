import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../assets/StayBook Icon.png"

export default function Nav ( params ) {
    return(
        <View style={styles.NavContainer}>
            <Image source={{uri: "../../assets/StayBook Icon.png"}} />
        </View>
    )
}

const styles = StyleSheet.create({
    NavContainer:{
        position:'absolute',
        zIndex:2,
        top:0,
        backgroundColor:"#160D00",
        width: "100vw",
        height: 75,
        color:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
})