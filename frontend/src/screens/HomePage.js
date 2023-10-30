import { View, StyleSheet } from "react-native"
import RoomCard from "../components/RoomCard"
import Nav from "../components/Nav"
import Filters from "../components/Filters"
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";

export default function HomePage(params) {
    const navigation = useNavigation();

    useEffect(() => {
        var session = sessionStorage.getItem("user");
        console.log(session)
        if(!session)
            navigation.navigate('login');
    }, []);

    return (
        <View style={style.main}>
            <Nav />
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <Filters />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        alignItems: "center",
        gap: 10,
        paddingTop: 90
    }
})