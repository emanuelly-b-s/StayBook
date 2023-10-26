import { Image, View,StyleSheet, Text } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { BoxShadow } from  'react-native-shadow'

export default function RoomCard(params) {
    
    const imgShadow = {
        width: 330,
        height: 210,
        color: "#000",
        border: 2,
        radius: 15,
        opacity: 0.2,
        x: 0,
        y: 3,
        style: { marginVertical: 5, borderRadius:15 }

    }

    return (
        <View style={styles.CardContainer}>
            <BoxShadow setting={imgShadow} >
                <Image 
                    style={styles.Image}
                    source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"}}
                />
            </BoxShadow>
            <View style={styles.HeaderCardContainer}>
                <View style={styles.DescriptionContainer}>
                    <Text style={styles.title}>Pousada em algum lugar do mundo</Text>
                    <Text style={styles.local}>São Paulo</Text>
                </View>
                <View style={styles.AvaliationContainer}>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <Text>4.50</Text>
                </View>
            </View>
            <Text style={styles.price} >R$ 500,00</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    CardContainer: {
        width:360,
        height:340,
        padding:15,
        borderRadius:20,
        backgroundColor: "#876431"
    },
    Image: {
        width: 330,
        height: 210,
        borderRadius:15,
        shadowColor: "black",
        shadowOpacity:100,
        shadowOffset: { width: 100, height: 100 }
    },
    AvaliationContainer: {
        flexDirection: 'row',
        gap:2,
        alignItems: 'center',
        paddingTop: 5,
        paddingRight: 10
    },
    DescriptionContainer: {
        width:270,
        height:70
    },
    HeaderCardContainer: {
        paddingTop:2,
        flexDirection: 'row',
        gap:2,
        alignItems: 'Start',
        justifyContent: "space-between"
    },
    title: {
        fontWeight: "bold",
        fontSize:18,
        color:"#fff"
    },
    local: {
        fontWeight: "600",
        color:"#fff"
    },
    price :{ 
        fontWeight: "bold",
        fontSize:20,
    }
})