import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState } from "react";
import StyledInput from "../components/StyledInput";
import { usersContext } from "../../context/UserContext";

export default function RecoverPassword(props) {
    const [email, setEmail] = useState("");
    const {validateEmail} = useContext(usersContext);

    function recoverReq() {
        if(validateEmail(email))
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