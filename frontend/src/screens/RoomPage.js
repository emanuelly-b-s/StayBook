import { Image, Text, StyleSheet, View, VirtualizedList } from "react-native";
import Nav from "../components/Nav";
import { styles } from "../../Styles";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useEffect } from "react";

export default function RoomPage(params) {
    
    const { title, description, image, price, rate, location } = params.route.params.room;

    useEffect(() => {
        console.log(params.route.params.room);
    },[])

    const renderLocation = () => {
        var result = "";
        location.map((item, index) => {
            result += index != 0 ? ` ${item}` : "";    
        })
        return result;
    }

    const imagesRender = () => {
        return (
            <>
                <View style={styles.SwipperConatiner}>
                    <SwiperFlatList
                        index={0}
                        autoplay
                        autoplayLoop
                        showPagination
                        data={image}
                        renderItem={({ item }) => (
                            <>
                                <View>
                                    <Image source={{uri: item}} style={[styles.image]} />
                                    <Text>hola</Text>
                                </View>
                            </>
                        )}
                    />
                </View>
            </>
        )
    }

    return (
        <>
            <Nav />
            <View style={styles.main}>
                {imagesRender()}
                <View style={styles.Container}>
                    <View style={styles.info}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.AvaliationContainer}>
                            <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"white"}} />
                            <Text style={[styles.description, styles.RoomPageDescription]}>{rate.toFixed(2)}</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{renderLocation()}</Text>
                    <View style={styles.Line} />
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </>
    )
}
