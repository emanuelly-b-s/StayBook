import { Image, View,StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

export default function RoomCard(params) {
    
    return (
        <View style={styles.CardContainer}>
            <Image 
                style={styles.Image}
                source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"}}
            />
            <View>
                <View>
                    <Text style={styles.title}>Pousada em algum lugar do mundo</Text>
                    <Text style={styles.title}>São Paulo</Text>
                    <FontAwesomeIcon icon="faMugSaucer" />
                </View>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Image: {
        width: 330,
        height: 210,
        borderRadius:15,

    },
    CardContainer: {
        width:360,
        height:350,
        padding:15,
        borderRadius:20,
        backgroundColor: "#876431"
    }
})