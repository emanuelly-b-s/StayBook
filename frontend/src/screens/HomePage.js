import { View, Text, StyleSheet } from "react-native"
import RoomCard from "../components/RoomCard"
import Nav from "../components/Nav"
import Filters from "../components/Filters"
import { useEffect, useState } from "react"


export default function HomePage(params) {
    const [NamePage, setNamePage] = useState("");

    useEffect(() =>{
        if(NamePage)
            params.navigation.navigate(NamePage);
    }, [NamePage])

    return (
        <View style={style.main}>
            <Nav navTo={setNamePage}/>
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