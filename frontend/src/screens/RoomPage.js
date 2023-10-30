import { Image, Text, StyleSheet, View, VirtualizedList } from "react-native";
import Nav from "../components/Nav";
import { styles } from "../../Styles";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

export default function RoomPage(params) {
    
    const images = ["https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/25/ce/ea/kingsford-hotel-manila.jpg?w=1200&h=-1&s=1"];


    const imagesRender = () => {
        return (
            <>
                <View style={styles.SwipperConatiner}>
                    <SwiperFlatList
                        index={0}
                        autoplay
                        autoplayLoop
                        showPagination
                        data={images}
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
                        <Text style={styles.title}>Um hotel em algum lugar do mundo</Text>
                        <View style={styles.AvaliationContainer}>
                            <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"white"}} />
                            <Text style={styles.description}>4.50</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>São Luís do Purunã</Text>
                    <View style={styles.Line} />
                    <Text style={styles.description}>jasçldkfjasçldkfjaçsldkfjjasçldkfjasçldkfjaçsldkfjjasçldkfjasçldkfjaçsldkfjjasçldkfjasçldkfjaçsldkfjjasçldkfjasçldkfjaçsldkfjjasçldkfjasçldkfjaçsldkfj</Text>
                </View>
            </View>
        </>
    )
}
