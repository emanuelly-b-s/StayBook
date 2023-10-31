import { View, Image, Text, TouchableOpacity, ScrollView, Button, Pressable, TextInput } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState } from "react";
import { usersContext } from "../../context/UserContext";
import StyledInput from "../components/StyledInput";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import axios from "axios";

export default function RegisterRoom(props) {
    const [hotel, setHotel] = useState("");
    const [title, setTitle] = useState("");
    const [hasKitchen, setHasKitchen] = useState(false);
    const [hasWifi, setHasWifi] = useState(false);
    const [hasWasher, setHasWasher] = useState(false);
    const [hasDryer, setHasDryer] = useState(false);
    const [capacity, setCapacity] = useState("");
    const [singleBed, setSingleBed] = useState("");
    const [doubleBed, setDoubleBed] = useState("");
    const [price, setprice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([""]);

    const Register = async () => {
        const rate = Math.random() * 5;
        const baseUrl = 'http://localhost:8080';
        var category = [];
        const available = true;

        if (hasKitchen)
            category = [...category, "Kitchen"];
        if (hasWifi)
            category = [...category, "Wifi"];
        if (hasWasher)
            category = [...category, "Washer"];
        if (hasDryer)
            category = [...category, "Dryer"];

        const response = await axios.post(`${baseUrl}/api/room`, {
            title,
            capacity,
            doubleBed,
            singleBed,
            price,
            rate,
            hotel,
            description,
            category,
            image,
            available
        });

        console.log(response.data);
    }

    const updateFieldChanged = index => e => {
        let newArr = [...image];
        newArr[index] = e.target.value;

        setImage(newArr);
    }

    const addIndex = () => {
        let newArr = [...image];
        newArr[newArr.length] = "";

        setImage(newArr);
    }

    return (
        <View style={styles.center}>
            <Image source={require('../../assets/logo.png')} style={{ width: 260, height: 160 }} />
            <View style={styles.form}>
                <Pressable onPress={addIndex}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={styles.font}>Add Image</Text>
                        <FontAwesomeIcon icon="fa-solid fa-plus" style={{ color: "white" }} />
                    </View>
                </Pressable>
                <ScrollView style={{ maxHeight: 90 }}>
                    {
                        image.map((image, index) => {
                            return (
                                <TextInput style={[styles.textInput, { marginBottom: 5 }]} placeholder={"Image " + (index + 1)} key={index} value={image} onChangeText={updateFieldChanged(index)}></TextInput>
                            );
                        })
                    }
                </ScrollView>
                <StyledInput name={"Hotel"} value={hotel} set={setHotel} />
                <StyledInput name={"Title"} value={title} set={setTitle} />
                <ScrollView style={{ maxHeight: 90 }}>
                    <BouncyCheckbox onPress={() => setHasKitchen(!hasKitchen)} text="Kitchen" style={{ marginBottom: 5 }} textStyle={{
                        textDecorationLine: "none",
                    }} /><BouncyCheckbox onPress={() => setHasWifi(!hasWifi)} text="Wifi" style={{ marginBottom: 5 }} textStyle={{
                        textDecorationLine: "none",
                    }} /><BouncyCheckbox onPress={() => setHasWasher(!hasWasher)} text="Washer" style={{ marginBottom: 5 }} textStyle={{
                        textDecorationLine: "none",
                    }} /><BouncyCheckbox onPress={() => setHasDryer(!hasDryer)} text="Dryer" style={{ marginBottom: 5 }} textStyle={{
                        textDecorationLine: "none",
                    }} />
                </ScrollView>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <StyledInput width={110} name={"Single Bed"} type={"number-pad"} value={singleBed} set={setSingleBed} />
                    <StyledInput width={110} name={"Double Bed"} type={"number-pad"} value={doubleBed} set={setDoubleBed} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <StyledInput width={100} name={"Capacity"} type={"decimal-pad"} value={capacity} set={setCapacity} />
                    <StyledInput width={100} type={"decimal-pad"} name={"Price"} value={price} set={setprice} />
                </View>
                <StyledInput name={"Description"} value={description} set={setDescription} isTextArea={true} />
            </View>
            <TouchableOpacity style={styles.primaryButton} onPress={() => Register()}><Text style={styles.buttonText}>Register</Text></TouchableOpacity>
        </View >
    )
}