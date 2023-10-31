import { Image, View,StyleSheet, Text } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { BoxShadow } from  'react-native-shadow';
import { styles } from "../../Styles";


export default function RoomCard( params ) {
    console.log(params);
    const { image, title, local, avaliation, price } = params.room;


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
                    source={{uri: image}}
                />
            </BoxShadow>
            <View style={styles.HeaderCardContainer}>
                <View style={styles.DescriptionContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.local}>{local}</Text>
                </View>
                <View style={styles.AvaliationContainer}>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <Text>{avaliation}</Text>
                </View>
            </View>
            <Text style={styles.price} >R$ {price}</Text>
        </View>
    )
}

