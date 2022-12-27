import React from "react";
import { View, Text, StatusBar, Image,StyleSheet,TouchableOpacity ,FlatList,ScrollView} from 'react-native'
import { Colors ,Images,Fonts} from "../contants"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import CartItem from "../components/CartItem";
import { useState,useEffect } from "react";
import { getCartDetail } from "../api/user_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/api";

const CartScreen = ({navigation,route}) =>{

    const [listcart,setListcart] = useState();
    const [userId,setUserId] = useState('');
    const [token,setToken] = useState('');

    useEffect(()=>{
        if(userId == '' || token == ''){
            getuserId();
        }else{
            getCartDetail(userId,token)
            .then(res =>{
                setListcart(res.data.listProduct);
                // console.log(res.data.listProduct);
            })
            .catch(err =>{
                console.error(err);
            })
        }
    },[userId,token]);

    console.log(userId);
    console.log(token);
    //lay userId & token
    const getuserId = async () =>{
        const id = await AsyncStorage.getItem('userID');
        setUserId(id);

        const tk = await AsyncStorage.getItem('AccessToken');
        setToken(tk);
    };
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Ionicons 
                    name='chevron-back' 
                    size={35} 
                    style = {{color: Colors.THIRD_GREEN}}
                    onPress={() => navigation.navigate('Home')}/>
                
                <Text 
                    style = {{
                        fontFamily: Fonts.POPPINS_MEDIUM,
                        fontSize: 26,
                        fontWeight: '500',
                        color: Colors.THIRD_GREEN,
                        alignItems: 'center',
                        marginLeft: 15
                    }}
                >Giỏ hàng</Text>     
            </View>
            <View style = {{height: '85%'}}>
                <ScrollView style={styles.card}>
                    {listcart?.map((item)=>{
                        let subTotal = 0;
                        return (
                            <View style = {{backgroundColor : Colors.DEFAULT_WHITE,marginBottom: 5}}>
                                <Text style ={{
                                    borderBottomColor: Colors.THIRD_GREEN,
                                    borderBottomWidth: 1,
                                    marginBottom: 5,
                                    fontFamily: Fonts.POPPINS_MEDIUM,
                                    fontSize: 18,
                                    fontWeight: '400',
                                    color: Colors.THIRD_GREY,
                                    paddingHorizontal: 5
                                }}>{item?.shopName}</Text>
                                {item?.listProductAndNumberDto.map((product)=>{
                                    subTotal +=
                                        product?.price *
                                        parseInt(product?.numberOfProductInCart);
                                    return (
                                        <CartItem 
                                            product={product} 
                                            accessToken={token}
                                            setUserId = {setUserId}
                                            setToken ={setToken}/>   
                                    );
                                })}
                                

                                <Text style= {{
                                    borderTopColor: Colors.THIRD_GREEN,
                                    borderTopWidth: 1,
                                    marginTop: 5,
                                    fontFamily: Fonts.POPPINS_MEDIUM,
                                    fontSize: 18,
                                    fontWeight: '400',
                                    paddingHorizontal: 5,
                                    color: Colors.THIRD_GREEN
                                }}>Tổng tiền hàng : {subTotal} VND</Text>
                            </View>
                        );
                            })}
                    
                </ScrollView>
            </View>
            <View style={styles.total}>
                <TouchableOpacity style = {styles.order} onPress= {()=> navigation.navigate('CheckOut',token)}>     
                    <Text style= {{ 
                        marginHorizontal: 15,
                        fontSize : 22 , 
                        color: Colors.DEFAULT_WHITE, 
                        fontFamily: Fonts.POPPINS_MEDIUM, 
                        fontWeight: 'bold'
                    }}>ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingTop: 30
    },
    header:{
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        
    },
    card: {
        // backgroundColor: Colors.DEFAULT_YELLOW,
        marginTop: 5,
        marginHorizontal: 15,
        // alignItems: 'center',
    },
    cardItem:{
        height: 100,
        width: '100%',
        backgroundColor: Colors.THIRD_WHITE,
        flexDirection: 'row', 
        borderRadius: 10, 
        marginBottom: 10
    },
    cardImage:{
        height: 80,
        width: 80,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.THIRD_LIGHT_GREEN,
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
    total:{
        backgroundColor: Colors.DEFAULT_WHITE,
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right:0,
        paddingVertical: 5,
        marginHorizontal: 20,
    },
    order:{
        borderRadius: 35,
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.THIRD_GREEN,
        paddingVertical: 10,
    }
})
export default CartScreen;