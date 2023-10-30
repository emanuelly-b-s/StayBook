import { TextInput, View, Text } from "react-native";
import { styles } from "../../Styles";

export default function StyledInput(props) {
    return (
        <View>
            <TextInput 
                style={styles.textInput} 
                placeholder={props.name} 
                value={props.value} 
                onChangeText={props.set}
                keyboardType="email"
                secureTextEntry={props.isSecure?true: false}
            ></TextInput>
        </View>
    )
}
