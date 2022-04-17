import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native';
import Product from '../Components/Product';
import { baseUrl } from '../Constants/api';
const AllOrders = () => {
    const [page, setPage] = useState(1);
    const [products,setProducts] = useState([]);
    const getList = async () => {
        fetch(`${baseUrl}/user/cameraAds?page=${page}&limit=${10}`)
            .then(res => res.json()).then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }
    const loadMore = ()=> {
        setPage(page+1);
    }

    useEffect(() => {
        getList()
    }, [getList])
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={products}
                renderItem={({ item }) => <Product prodImage={require('../Assets/product.png')} prodName={item.title} prodPrice={item.price} />}
                keyExtractor={prod => prod._id}
                onEndReached={loadMore}
                onEndReachedThreshold={10}
            />
        </View>
    )
}

export default AllOrders;