import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 34,
    },
    form: {
        gap: '1.5rem',
        marginTop: '3rem',
        marginBottom: '1rem',
    },
    center: {
        marginTop: '3rem',
        gap: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    space: {
        flexDirection: 'row',
        width: '45%',
        gap: '1rem',
        justifyContent: 'center',
        marginBottom: 30
    },
    font: {
        color: '#876431',
        fontSize: 14,
    },
    textInput: {
        backgroundColor: '#fff',
        color: '#876431',
        borderRadius: '.3rem',
        borderColor: '#876431',
        borderWidth: 2,
        padding: '.2rem',
        backgroundColor: '#000',
        fontSize: '1.2rem',
        width: '16rem',
    },
    wrapInput: {
        backgroundColor: '#fff',
        color: '#ff3fdd',
        borderRadius: '.3rem',
        width: '21.8vw',
    },
    align: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: '.3rem',
    },
    link: {
        color: "#876431",
        textDecorationLine: "underline",
        marginTop: "-1.3rem",
        marginBottom: '1rem',
    },
    alignLink: {
        width: "16rem",
        alignItems: "flex-start"
    },
    primaryButton: { 
        backgroundColor: "#E79E29", 
        padding: 8, 
        borderRadius: 7 
    },
    secondaryButton: { 
        backgroundColor: "#876431", 
        padding: 8, 
        borderRadius: 7,
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "600",
    }
});

export { styles };