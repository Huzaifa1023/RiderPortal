import React from 'react'
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import colors from '../Constants/colors'
const Product = ({prodImage,prodName,prodPrice})=> {
    return (
        <View style={styles.product}>
            <Image source={prodImage} style={{height:70,width:70}} />
            <View style={styles.productDetails}>
                <Text>{prodName}</Text>
                <Text>{prodPrice}</Text>
            </View>
            <TouchableOpacity
                style={styles.prodViewBtn}
            >
                <Text style={{color:colors.primary}}>View Order</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    product:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:100,
        backgroundColor:"#fff",
        padding:10,
        
    },
    productDetails:{
        flex:1,
        marginLeft:5
    },
    prodViewBtn:{
        backgroundColor:colors.primaryLight,
        padding:10,
    }
})

export default Product