import { Image, Text, StyleSheet, View } from "react-native";
import Nav from "../components/Nav";

import { SwiperFlatList } from 'react-native-swiper-flatlist';


export default function RoomPage(params) {
    
    return (
        <>
            <Nav />
            <View style={styles.main}>

                <Image 
                    style={styles.image}
                    source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"}} 
                />
                <Image 
                    style={styles.image}
                    source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"}} 
                    />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main:{
        top: 70
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover"
    }
})