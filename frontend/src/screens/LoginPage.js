import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState } from "react";
import { usersContext } from "../../context/UserContext";
import StyledInput from "../components/StyledInput";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { reset } = useContext(usersContext);

    function ToLogin() {
        // reset();
        props.navigation.navigate("home");
    }

    return (
        <View style={styles.center}>
            <Image source={require('../../assets/logo.png')} style={{ width: 260, height: 160 }} />
            <View style={styles.form}>
                <StyledInput name={"Email"} value={email} set={setEmail} />
                <StyledInput name={"Password"} value={password} set={setPassword} />
            </View>
            <View style={styles.alignLink}>
                <Text style={styles.link}>Forgot your password?</Text>
            </View>
            <TouchableOpacity style={styles.primaryButton} onPress={() => ToLogin()}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => props.navigation.navigate('cadastro')}><Text style={styles.buttonText}>Sign Up</Text></TouchableOpacity>
        </View >
    )
}