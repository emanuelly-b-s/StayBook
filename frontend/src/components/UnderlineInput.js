import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

export default function UnderlineInput(props) {

    const setInput = (value) => {
        if (value.length < 2 && !isNaN(value)) {
            props.set(value)
            if(props.nextRef)
                props.nextRef.current.focus();
        }
    }

    return (
        <View>
            <TextInput
                ref={props.thisRef}
                style={styles.underline}
                autoFocus={props.focus}
                value={props.value}
                onChangeText={(target) => setInput(target)}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    underline: {
        borderColor: '#876431',
        borderBottomWidth: 2,
        width: 20,
        color: '#fff',
        textAlign: 'center',
        padding: 4
    }
});
