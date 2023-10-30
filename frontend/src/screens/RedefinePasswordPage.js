import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState } from "react";
import { usersContext } from "../../context/UserContext";
import StyledInput from "../components/StyledInput";

export default function RedefinePassword(props) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {validatePassword} = useContext(usersContext);

    function ToLogin() {
        if(password === confirmPassword && validatePassword(password))
            props.navigation.navigate("login");
    }

    return (
        <View style={styles.center}>
            <Image source={require('../../assets/logo.png')} style={{ width: 260, height: 160 }} />
            <View style={styles.form}>
                <StyledInput name={"Password"} value={password} set={setPassword} />
                <StyledInput name={"Confirm Password"} value={confirmPassword} set={setConfirmPassword} />
            </View>
            <TouchableOpacity style={styles.primaryButton} onPress={() => ToLogin()}><Text style={styles.buttonText}>Confirm</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => props.navigation.navigate('cadastro')}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
        </View >
    )
}