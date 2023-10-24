import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useContext, useState } from "react";
import { usersContext } from "../../context/UserContext";
import StyledInput from "../StyledInput";

export default function Cadastro(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { addUser, reset } = useContext(usersContext);

    function RegisterUser() {
        // var res = addUser();
        // if (res != null)
            props.navigation.navigate("login");
    }

    function ToLogin() {
        reset();
        props.navigation.navigate('login');
    }

    return (
        <View style={styles.center}>
            <Image source={require('../../assets/logo.png')} style={{ width: 260, height: 160 }} />
            <View style={styles.form}>
                <StyledInput name={"Username"} value={username} set={setUsername}/>
                <StyledInput name={"Email"} value={email} set={setEmail}/>
                <StyledInput name={"Password"} value={password} set={setPassword}/>
                <StyledInput name={"Confirm Password"} value={confirmPassword} set={setConfirmPassword}/>
            </View>
            <TouchableOpacity style={{ backgroundColor: "#E79E29", padding: 8, borderRadius: 7 }} onPress={() => RegisterUser()}><Text style={{ fontSize: 22 }}>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#876431", padding: 8, borderRadius: 7 }} onPress={() => ToLogin()}><Text style={{ fontSize: 22 }}>Log In</Text></TouchableOpacity>
        </View >
    )
}