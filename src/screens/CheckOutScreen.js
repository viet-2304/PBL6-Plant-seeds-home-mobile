import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCartDetail } from '../api/user_api'
import CartItem from "../components/CartItem";

const CheckOutScreen = ({navigation}) => {
    const [allcart,setAllcart] = useState([]);
    const [userId,setUserId] = useState('');
    const [token,setToken] = useState('');
    const payment = ["cash", "paypal"];

    useEffect(()=>{
        if(userId == '' || token == ''){
            getuserId();
        }else{
            getCartDetail(userId,token)
            .then(res =>{
                setAllcart(res.data.listProduct);
                // console.log(res.data.listProduct);
            })
            .catch(err =>{
                console.error(err);
            })
        }
    },[userId,token]);
    //lay userId & token
    const getuserId = async () =>{
        const id = await AsyncStorage.getItem('userID');
        setUserId(id);

        const tk = await AsyncStorage.getItem('AccessToken');
        setToken(tk);
    };
  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Ionicons 
                name='chevron-back' 
                size={35} 
                style = {{color: Colors.THIRD_GREEN}}
                onPress={() => navigation.goBack()}/>
            
            <Text 
                style = {{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontSize: 24,
                    fontWeight: '500',
                    color: Colors.THIRD_GREEN,
                    alignItems: 'center',
                    marginLeft: 15
                }}
            >Check Out</Text>     
        </View>
        <View style={{height:'90%',width: '100%',position: 'relative'}}>
            <KeyboardAvoidingView >
                <Text style={{
                    fontSize: 20,
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '300',
                    color: Colors.THIRD_GREEN,
                    paddingHorizontal: 20
                }}>Delivery Address</Text>
                <TextInput placeholder='Address' style = {styles.address}/>
                <Text style={{
                    marginHorizontal:20,
                    fontSize: 20,
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '300',
                    color: Colors.THIRD_GREEN
                }}>Order List</Text>
                <ScrollView style={styles.card}>
                    {allcart?.map((shop)=>{
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
                                    }}>{shop?.shopName}</Text>
                                    {shop?.listProductAndNumberDto.map((product)=>{
                                        subTotal +=
                                            product?.price *
                                            parseInt(product?.numberOfProductInCart);
                                        return (
                                            <CartItem 
                                                plants={product} 
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
                                    }}>Total: {subTotal} VND</Text>
                                </View>
                            );
                        })}
                </ScrollView>

                <Text style={{
                    marginHorizontal:20,
                    marginTop: 5,
                    fontSize: 20,
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '300',
                    color: Colors.THIRD_GREEN
                }}>Payment Method</Text>

                <View style = {styles.countTotal}>
                    <Text style= {{
                            fontSize: 20,
                            fontFamily: Fonts.POPPINS_MEDIUM,
                            color: Colors.THIRD_GREEN,
                            fontWeight: '500',
                            
                        }}>Total</Text>
                    <Text style={styles.textprice}>$35.99</Text>
                </View>
                <View style = {{top: 0,alignItems:'center',marginHorizontal: 10}}>
                    <TouchableOpacity style = {styles.order} >     
                        <Text style= {{ 
                            marginHorizontal: 15,
                            fontSize : 20 , 
                            color: Colors.DEFAULT_WHITE, 
                            fontFamily: Fonts.POPPINS_MEDIUM, 
                            fontWeight: 'bold'
                        }}>Payment</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    </View>
  )
}

export default CheckOutScreen;
const styles= StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.DEFAULT_WHITE,
        position: 'absolute'
    },
    header:{
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        marginBottom: 0,
        position: 'relative',
        paddingTop: 30,
    },
    address:{
        // borderWidth: 1,
        // borderColor: Colors.THIRD_GREEN,
        borderRadius: 10,
        marginVertical: 0,
        backgroundColor: Colors.THIRD_WHITE,
        paddingHorizontal: 15,
        fontSize: 18,
        marginHorizontal: 20,
    },
    card: {
        backgroundColor: Colors.DEFAULT_YELLOW,
        marginTop: 0,
        marginHorizontal: 15,
        // alignItems: 'center',
        height: '65%',
    },
    countTotal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.THIRD_GREEN,
        marginHorizontal: 20
    },
    textprice:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.THIRD_GREEN,
        fontSize: 20, 
        fontWeight: '500',
        marginLeft: 20
    },
    order:{
        borderRadius: 35,
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.THIRD_GREEN,
        paddingVertical: 10,
        marginTop: 10,
    }
})