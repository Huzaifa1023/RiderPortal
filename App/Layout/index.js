import React from 'react'
import {StyleSheet,View,Image} from 'react-native'
const Layout = ({children})=> {
    return (
        <View style={styles.layout}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    layout:{
        flex:1,
        backgroundColor:"#fff"
    },
})
export default Layout;