import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        justifyContent: "center", 
        alignItems:"center",

    },  
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
    },
    SwipperConatiner: {
        gap:10,
    },
    image: {
        width: 350,
        height: 300,
        resizeMode: "cover",
        borderRadius:20


    },
    main:{
        paddingLeft: 20,
        paddingRight: 20,
        top: 80,
    },
    description: {
        marginTop: 10,
        color: "white",
        fontSize: 15,
        alignItems: "center",
        flexShrink:1,
        textAlign: "justify",
        maxWidth:"100vw",
        padding:10
    },
    CardContainer: {
        width:360,
        height:340,
        padding:15,
        borderRadius:20,
        backgroundColor: "#876431"
    },
    Image: {
        width: 330,
        height: 210,
        borderRadius:15,
        shadowColor: "black",
        shadowOpacity:100,
        shadowOffset: { width: 100, height: 100 }
    },
    AvaliationContainer: {
        flexDirection: 'row',
        gap:2,
        alignItems: 'center',
        paddingTop: 5,
        paddingRight: 10
    },
    DescriptionContainer: {
        width:270,
        height:70
    },
    HeaderCardContainer: {
        paddingTop:2,
        flexDirection: 'row',
        gap:2,
        alignItems: 'Start',
        justifyContent: "space-between"
    },
    title: {
        fontWeight: "bold",
        fontSize:18,
        color:"#fff"
    },
    local: {
        fontWeight: "600",
        color:"#fff"
    },
    price :{ 
        fontWeight: "bold",
        fontSize:20,
    },
    Line: {
        height:2,
        width: "70vw",
        backgroundColor: "#fff",
        marginTop:20,
        marginBottom:20
    }

});

export { styles };