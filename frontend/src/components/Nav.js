import { useState } from "react";
import { Image, Pressable, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import logo from "../../assets/StayBook Icon.png"
import NavContent from "./NavContent";
import { useNavigation } from "@react-navigation/native";

export default function Nav ( props ) {
    const navigateion = useNavigation();   
    const [modalVisible, setModalVisible] = useState(false);


    const setVisible = () => {
        setModalVisible(!modalVisible);
    }

    const navigate = (screen) => {
        navigateion.navigate(screen);
    }

    return(
        <View style={styles.NavContainer}>
            <TouchableOpacity onPress={() => navigate('home')}>
                <Image source={logo} style={styles.IconStayBook} />
            </TouchableOpacity>
            { !modalVisible && <Pressable style={styles.BurgerButtom} 
                onPress={() => setVisible()}>
                <View style={styles.BurgerItem}></View>
                <View style={styles.BurgerItem}></View>
                <View style={styles.BurgerItem}></View>
            </Pressable> }
            <NavContent visible={modalVisible} set={setModalVisible} />
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