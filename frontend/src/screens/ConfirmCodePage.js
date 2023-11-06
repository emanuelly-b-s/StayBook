import { View, Image, Text, TouchableOpacity, TouchableNativeFeedbackComponent } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState, useRef, useEffect } from "react";
import { usersContext } from "../../context/UserContext";
import UnderlineInput from "../components/UnderlineInput";
import AuthService from "../Services/Auth";
import { useNavigation } from "@react-navigation/native";
import Login from "./LoginPage";

export default function ConfirmCode(props) {
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [thirdNum, setThirdNum] = useState("");
    const [fourthNum, setFourthNum] = useState("");
    const [fifthNum, setFifthNum] = useState("");
    const { reset } = useContext(usersContext);
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();
    const navigator = useNavigation();

    async function Validate () {
        console.log("xalala");
        console.log(navigator);
        const token = firstNum + secondNum + thirdNum + fourthNum + fifthNum;
        const body = {
            code: token,
            jwtUser: props.route.params.jwt
        }
        console.log(body);
        const res = await AuthService.verifyToken(body);
        if(res.status === 200)
            navigator.navigate('login')
            
    }

    function RegisterUser() {
        props.navigation.navigate("login");
    }

    function BackToRegister() {
        reset();
        props.navigation.navigate('cadastro');
    }

    return (
        <View style={styles.center}>
            <Image source={require('../../assets/logo.png')} style={{ width: 260, height: 160 }} />
            <Text style={styles.font}>
                Enter Code
            </Text>
            <View style={styles.space}>
                <UnderlineInput value={firstNum} set={setFirstNum} nextRef={ref_input2} focus={true}></UnderlineInput>
                <UnderlineInput value={secondNum} set={setSecondNum} thisRef={ref_input2} nextRef={ref_input3}></UnderlineInput>
                <UnderlineInput value={thirdNum} set={setThirdNum} thisRef={ref_input3} nextRef={ref_input4}></UnderlineInput>
                <UnderlineInput value={fourthNum} set={setFourthNum} thisRef={ref_input4} nextRef={ref_input5}></UnderlineInput>
                <UnderlineInput value={fifthNum} set={setFifthNum} thisRef={ref_input5}></UnderlineInput>
            </View>
            <TouchableOpacity style={styles.primaryButton} onPress={() => Validate()}><Text style={styles.buttonText}>Confirm</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => BackToRegister()}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
        </View >
    )
}