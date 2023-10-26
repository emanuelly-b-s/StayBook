import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState, useRef } from "react";
import { usersContext } from "../../context/UserContext";
import StyledInput from "../components/StyledInput";
import UnderlineInput from "../components/UnderlineInput";

export default function ConfirmCode(props) {
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [thirdNum, setThirdNum] = useState("");
    const [fourthNum, setFourthNum] = useState("");
    const [fifthNum, setFifthNum] = useState("");

    const { addUser, reset } = useContext(usersContext);

    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();

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
                <UnderlineInput keyboardType="numeric" value={firstNum} set={setFirstNum} nextRef={ref_input2} focus={true}></UnderlineInput>
                <UnderlineInput value={secondNum} set={setSecondNum} thisRef={ref_input2} nextRef={ref_input3}></UnderlineInput>
                <UnderlineInput value={thirdNum} set={setThirdNum} thisRef={ref_input3} nextRef={ref_input4}></UnderlineInput>
                <UnderlineInput value={fourthNum} set={setFourthNum} thisRef={ref_input4} nextRef={ref_input5}></UnderlineInput>
                <UnderlineInput value={fifthNum} set={setFifthNum} thisRef={ref_input5}></UnderlineInput>
            </View>
            <TouchableOpacity style={styles.primaryButton} onPress={() => RegisterUser()}><Text style={styles.buttonText}>Confirm</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => BackToRegister()}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
        </View >
    )
}