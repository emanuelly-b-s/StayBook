import { View, StyleSheet } from "react-native"
import RoomCard from "../components/RoomCard"
import Nav from "../components/Nav"
import Filters from "../components/Filters"


export default function HomePage(params) {

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