import { useContext } from "react";
import { TextInput, View, Text } from "react-native";
import { usersContext } from "../context/UserContext";
import { styles } from "../Styles";

export default function StyledInput(props) {
    const { name, setName } = useContext(usersContext);

    return (
        <View>
            <TextInput style={styles.textInput} placeholder={props.name} value={name} onChangeText={setName}></TextInput>
        </View>
    )
}
