import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({navigation}){
    const openMenu = () =>{
        navigation.openDrawer();
        // we use the navigation object in which we use the method called openDrawer which opens up the drawer for the hamebuger menu
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
             {/* background inmages for header called from global */}
              {/* icon for the menu */}
            {/* <MaterialIcons name="shopping-cart" size={28} onPress={openMenu} style={styles.icon} /> */}
            <MaterialIcons name="shopping-cart" size={24} color="black" style={styles.icon} />
            <View style={styles.headerTitle}>
                {/* <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} /> */}
                <Text style={styles.headerText}>Harvest</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'flex-start'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        // add space between letters
    },
    icon: {
        position: 'absolute',
        right: 25,
    },
    headerTitle: {
        flexDirection: 'row',
        // done to bring down the logo from above the name to beside it
    },
    // headerImage: {
    //     width: 26,
    //     height: 26,
    //     marginHorizontal: 10,
    // },
    
});