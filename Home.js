import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard,Button } from "react-native";
import { globalStyles } from "../styles/global";
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    
    const [screens,setScreens]=useState([
        {title:'SigntUpPages' ,key:'1'}
    ])

    return (
        <View style={globalStyles.container}>
         <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')} >
         {console.log("sign up")}

         <Button title="set up harvest account" />
         </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
})