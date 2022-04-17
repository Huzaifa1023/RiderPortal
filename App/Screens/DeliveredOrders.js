import React from 'react'
import { View, FlatList, } from 'react-native';
import Product from '../Components/Product';

const DeliveredOrders = () => {
    const products = [
        {
            prodId:1,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:2,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:3,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:4,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:5,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:6,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:7,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:8,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:9,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:10,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:11,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
        {
            prodId:12,
            prodImage:require('../Assets/box.webp'),
            prodName:"Product Name",
            prodPrice:"20$",
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={products}
                renderItem={({ item }) => <Product prodImage={item.prodImage} prodName={item.prodName} prodPrice={item.prodPrice} />}
                keyExtractor={prod => prod.prodId}
            />
        </View>
    )
}

export default DeliveredOrders;