import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function NavContent(props) {

    const navigation = useNavigation();

    const navTo = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="none"
                transparent={true}
                visible={props.visible}>
                <Pressable onPress={() => props.set(false)} style={{zIndex: 2}}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" size={50} style={styles.resize}/>
                </Pressable>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}>
                            <Text style={styles.textStyle}
                            onPress={() => navTo("chat")}>Chat</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => navTo("history")}>
                            <Text style={styles.textStyle}>History</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => navTo("favorites")}>
                            <Text style={styles.textStyle}>Favorites</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => console.log("oi")}>
                            <Text style={styles.textStyle}>Logoff</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
    },
    resize: {
        position: "absolute",
        top: 14,
        left: 6,
        color: "white"
    }, 
    modalView: {
        backgroundColor: 'black',
        gap: 10,
        marginTop: 80,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#876431',
        minWidth: 200,
        maxWidth: 200,
        borderRadius: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
