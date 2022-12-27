import React, { useState,useEffect } from 'react';
import {StyleSheet,View, TouchableOpacity,Image,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors ,Fonts,Images} from '../contants';
import { deleteItemInCart } from '../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartItem = ({key,product,accessToken,setUserId,setToken})=>{
    const token = accessToken;
    const itemId = product.cartId;
    const setUserID = setUserId;
    const setAccessToken = setToken;

    const image = product.imagesUrl ? product.imagesUrl[0] : "";

    //ham xoa san pham khoi gio hang   
    const deleteProductInCart =() =>{
        deleteItemInCart(itemId,token)
        .then(res =>{
            alert('Xoá sản phẩm khỏi giỏ hàng thành công!');
            setUserID('');
            setAccessToken('');
        })
        .catch(err =>{
            console.error(err);
        })
    }
    return(
        <View style={styles.cardItem}>
            <View style={styles.cardImage}>
                <Image source={{uri: image!==""? image : undefined }}
                    style={{ resizeMode: 'contain',height: "100%",width: '100%'}} />
            </View>
            <View style = {{width: '70%',flexDirection: 'column'}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-evenly', marginVertical: 10, marginHorizontal: 5}}>
                    <Text style={styles.plantName}>
                            {product.productName}
                    </Text>
                    <Ionicons name="trash" size={24} 
                        onPress={()=> deleteProductInCart()}
                        style={{color: Colors.THIRD_GREEN, marginLeft: 10 }}
                    />
                </View>
                <View style={{marginVertical: 0,flexDirection: 'row',justifyContent:'space-around',alignItems:'center'}}>
                    <Ionicons name="remove"size={24} style={{color: Colors.THIRD_GREEN}}/>
                    <Text 
                        style={{
                            fontSize: 20,
                            color: Colors.THIRD_GREEN,
                            borderWidth: 1.5,
                            borderColor: Colors.THIRD_GREEN,
                            borderRadius: 8,
                            paddingHorizontal: 8
                        }}
                        >{product.numberOfProductInCart}
                    </Text>
                    <Ionicons name="add"size={24}style={{color: Colors.THIRD_GREEN}}/>
                    <Text style={styles.textprice}>
                        {product.price} VND
                    </Text>
                </View>
            </View>    
        </View>
    )
}
export default CartItem;
const styles = StyleSheet.create({
    cardItem:{
        height: 100,
        width: '100%',
        // backgroundColor: Colors.THIRD_WHITE,
        flexDirection: 'row', 
        // borderRadius: 10,
        borderBottomColor: Colors.THIRD_GREY,
        borderBottomWidth: 1,
        marginBottom: 5,
        // marginHorizontal: 5
    },
    cardImage:{
        height: 80,
        width: 80,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: Colors.THIRD_GREEN,
        borderWidth: 1,
        // backgroundColor: Colors.THIRD_LIGHT_GREEN,
        marginHorizontal:10,
        marginVertical: 10
    },
    price:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal:10,
    },
    plantName:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.THIRD_GREEN,
        fontWeight: 'bold', 
        fontSize: 16,
    },
    
    textprice:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.THIRD_GREEN,
        fontSize: 22, 
        fontWeight: '500',
        marginLeft: 20
    },
})