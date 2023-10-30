import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState } from "react";
import { usersContext } from "../../context/UserContext";
import StyledInput from "../components/StyledInput";

export default function Cadastro(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { validateData, reset, RegisterUser } = useContext(usersContext);

    function Register() {
        if (validateData(username, email, password, confirmPassword)) {
            const res = RegisterUser(username, email, password)
            props.navigation.navigate("login");
        }
    }

    function ToLogin() {
        reset();
        props.navigation.navigate('login');
    }

    return (
        <View style={styles.center}>
            <Image source={require('../../assets/logo.png')} style={{ width: 260, height: 160 }} />
            <View style={styles.form}>
                <StyledInput name={"Username"} value={username} set={setUsername} />
                <StyledInput name={"Email"} value={email} set={setEmail} />
                <StyledInput isSecure={true} name={"Password"} value={password} set={setPassword} />
                <StyledInput isSecure={true} name={"Confirm Password"} value={confirmPassword} set={setConfirmPassword} />
            </View>
            <TouchableOpacity style={styles.primaryButton} onPress={() => Register()}><Text style={styles.buttonText}>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => ToLogin()}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
        </View >
    )
}