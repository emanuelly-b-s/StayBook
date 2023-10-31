import { View, StyleSheet } from "react-native"
import RoomCard from "../components/RoomCard"
import Nav from "../components/Nav"
import Filters from "../components/Filters"
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";

export default function HomePage(params) {
    const navigation = useNavigation();

    const roomList = [
        {
            image: "",
            title: "Algum quarto",
            local: "Algum lugar",
            avaliation: 4.5,
            price: 500.00
        },
        {
            image: "",
            title: "Algum quarto",
            local: "Algum lugar",
            avaliation: 4.5,
            price: 500.00
        }
    ]

    const renderCards = () => {
        return roomList.map((room, index) => {
            return (
                <RoomCard key={index} room={room}></RoomCard>
            )
        })
    
    }

    useEffect(() => {
        var session = sessionStorage.getItem("user");
        console.log(session)
        if(!session)
            navigation.navigate('login');
    }, []);

    return (
        <View style={style.main}>
            <Nav />
            <View style={style.cardsContainer}>
                {renderCards()}
            </View>
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