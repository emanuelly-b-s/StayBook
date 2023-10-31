import { View, StyleSheet, Touchable, Pressable, TouchableOpacity } from "react-native"
import RoomCard from "../components/RoomCard"
import Nav from "../components/Nav"
import Filters from "../components/Filters"
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import RoomService from "../Services/RoomService";

export default function HomePage(params) {
    const navigation = useNavigation();
    const [roomList, setRoomlist] = useState([]);

    const getRooms = async () => {
        const res = await RoomService.getRooms();
        setRoomlist(res.data);
    }

    const cardOnClick = ( room ) => {
        navigation.navigate('room', { room: room })
    }

    const renderCards = () => {

        return roomList.map((room, index) => {
            return (
                <Pressable onPress={() => cardOnClick(room)}>
                    <RoomCard key={index} room={room}></RoomCard>
                </Pressable>
            )
        })
    
    }

    useEffect(() => {
        var session = sessionStorage.getItem("token");
        if(!session)
            navigation.navigate('login');

        getRooms();
    }, []);

    return (
        <View style={style.main}>
            <Nav />
                {renderCards()}
            <Filters />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        alignItems: "center",
        gap: 10,
        paddingTop: 90
    },
    cardsContainer: {
        height: 500,
        overflow:"scroll",
        gap:10
    }
})