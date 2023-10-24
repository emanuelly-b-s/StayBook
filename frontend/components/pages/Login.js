import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState } from "react";
import { usersContext } from "../../context/UserContext";
import StyledInput from "../StyledInput";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { reset } = useContext(usersContext);

    function ToLogin() {
        reset();
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
            <TouchableOpacity style={{ backgroundColor: "#E79E29", padding: 8, borderRadius: 7 }} onPress={() => ToLogin()}><Text style={{ fontSize: 22 }}>Log In</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#876431", padding: 8, borderRadius: 7 }} onPress={() => props.navigation.navigate('cadastro')}><Text style={{ fontSize: 22 }}>Sign Up</Text></TouchableOpacity>
        </View >
    )
}