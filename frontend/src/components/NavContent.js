import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function NavContent(props) {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}>
                            <Text style={styles.textStyle}>Chat</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}>
                            <Text style={styles.textStyle}>Historic</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}>
                            <Text style={styles.textStyle}>Favorites</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}>
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
        minWidth: 400,
        maxWidth: 400,
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
