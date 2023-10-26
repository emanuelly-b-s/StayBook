import { View, Text, StyleSheet } from "react-native"
import RoomCard from "../components/RoomCard"
import Nav from "../components/Nav"
export default function HomePage(params) {
    
    return (
        <View style={style.main}>
            <Nav />
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        alignItems: "center",
        gap: 10
    }
})