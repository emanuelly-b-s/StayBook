import { useState } from "react"
import { View, Image, Text, StyleSheet, Pressable } from "react-native"
import { Svg } from "react-native-svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"


export default function Filters(params) {
    const [showFilters, setShowFilters] = useState(false);

    if (showFilters) {
        return (
            <View style={styles.NavContainer}>
                <Pressable style={styles.FilterButtom}>
                    <View style={styles.TopSearchBar}></View>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={styles.SearchIcon} />
                </Pressable>
            </View>
        )
    }


    return (
        <View style={styles.NavContainer}>
            <Pressable style={styles.FilterButtom} onPress={() => setShowFilters(!showFilters)}>
                <View style={styles.TopSearchBar}></View>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={styles.SearchIcon} />
            </Pressable>
        </View>
    )

}



const styles = StyleSheet.create({
    NavContainer: {
        position: 'fixed',
        zIndex: 2,
        bottom: 0,
        backgroundColor: "#160D00",
        width: "100vw",
        height: 75,
        color: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    FilterButtom: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:15
    },
    SearchIcon: {
        width: 30,
        height: 30,
        color: 'white',
    },
    TopSearchBar: {
        width: 70,
        height: 3,
        borderRadius:20,
        backgroundColor: 'white'
    }
})