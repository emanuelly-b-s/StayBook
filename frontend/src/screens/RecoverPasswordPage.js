import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useState } from "react";
import StyledInput from "../components/StyledInput";

export default function RecoverPassword(props) {
    const [email, setEmail] = useState("");

    function recoverReq() {
        if(email.length > 0)
            props.navigation.navigate('redefine');
    }

    return (
        <View style={styles.center}>
            <Image source={require('../../assets/logo.png')} style={{ width: 260, height: 160 }} />
            <View style={styles.form}>
                <StyledInput name={"Email"} value={email} set={setEmail} />
            </View>
            <TouchableOpacity style={styles.primaryButton} onPress={() => recoverReq()}><Text style={styles.buttonText}>Confirm</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => props.navigation.navigate('cadastro')}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
        </View >
    )
}