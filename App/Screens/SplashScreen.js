import React,{useEffect} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=> {
            navigation.replace('Login')
        },2000)
    },[])
    return (
        <View style={styles.splash}>
            <Image source={require('../Assets/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    splash: {
        display: "flex",
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems:"center",
    }
})
export default SplashScreen