import { StyleSheet,KeyboardAvoidingView,Image,Linking , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCartDetail } from '../api/user_api'
import CartItem from "../components/CartItem";
import api from '../api/api'


const CheckOutScreen = ({navigation}) => {
    const [listcart,setlistcart] = useState([]);
    const [userId,setUserId] = useState('');
    const [token,setToken] = useState('');

    const [paymentMethod, setPaymentMethod] = useState('tiền mặt');
    const [address, setAddress] = useState('');
    let sum = 0;
    let listCartId = [];

    useEffect(()=>{
        if(userId == '' || token == ''){
            getuserId();
        }else{
            getCartDetail(userId,token)
            .then(res =>{
                setlistcart(res.data.listProduct);
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

    const handlePayment=(total) =>{
        if (paymentMethod == 'paypal'){
            console.log(paymentMethod);
            api.post(
                'v1/payment/pay',
                {
                    price: total,
                    currency: '',
                    method: 'paypal',
                    intent: '',
                    description: 'test post man',
                    order: {
                        listCartId: listCartId,
                        total: total,
                        paymentMethodId: 1,
                        address: address,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                },
            )
                .then((res) => {
                    
                    // alert('Thanh toán bằng paypal thành công!');
                    Linking.openURL(res.data)
                    .catch(err => {
                        console.error("Couldn't load page", err);
                    })
                    navigation.replace('CartTab');
                    console.log(res.data);
                })
                .catch((err) => console.log('err', err));
        }
        else{
            console.log(paymentMethod);
            api.post(
                'v1/order/createOrder',
                {
                    listCartId: listCartId,
                    total: total,
                    paymentMethodId: 2,
                    address: address,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                },
            )
                .then((res) => {
                    alert('Thanh toán thành công!');
                    navigation.replace('CartTab');
                    console.log(res.data);
                })
                .catch((err) => console.log('err', err));
        }
    }
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
            >Đặt hàng</Text>     
        </View>
        <View style={{height:'90%',width: '100%',position: 'relative'}}>
            <KeyboardAvoidingView >
                <Text style={{
                    fontSize: 20,
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '300',
                    color: Colors.THIRD_GREEN,
                    paddingHorizontal: 20
                }}>Địa chỉ giao hàng</Text>
                <TextInput 
                    placeholder='Địa chỉ' 
                    value={address}
                    onChangeText={newText => setAddress(newText)}
                    style = {styles.address}/>
                <Text style={{
                    marginHorizontal:20,
                    fontSize: 20,
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '300',
                    color: Colors.THIRD_GREEN
                }}>Danh sách sản phẩm</Text>
                <ScrollView style={styles.card}>
                    {listcart?.map((item)=>{
                            let subTotalByShop = 0;
                            let subFee = 30000;
                            return (
                                <View style = {{
                                    backgroundColor : Colors.DEFAULT_WHITE,
                                    marginBottom: 5,
                                    borderColor: Colors.THIRD_GREEN,
                                    borderWidth: 1}}>
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
                                        listCartId.push(product.cartId);
                                        const image= product.imagesUrl ? product.imagesUrl[0] : '';
                                        console.log(image);

                                        //suntotal la tong tien cua mot san pham
                                        let subTotal =
                                            product?.price *
                                            parseInt(product?.numberOfProductInCart);
                                        
                                        //subtotalByShop la tong tien cua mot shop
                                        subTotalByShop += subTotal;
                                        subFee += subTotal;

                                        
                                        return (
                                            <View style={styles.cardItem}>
                                                <View style={styles.cardImage}>
                                                    <Image source={{uri: image}}
                                                        style={{ resizeMode: 'contain',height: "100%",width: '100%'}} />
                                                </View>
                                                <View style = {{width: '70%',flexDirection: 'column'}}>
                                                    <View style={{ marginVertical: 10, marginHorizontal: 5}}>
                                                        <Text style={styles.plantName}>
                                                                {product.productName}
                                                        </Text>
        
                                                    </View>
                                                    <View style={{marginVertical: 0,flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>
                                                        
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
                                                        
                                                        <Text style={styles.textprice}>
                                                            {subTotal} VND
                                                        </Text>
                                                    </View>
                                                </View>    
                                            </View>   
                                        );
                                    })}
                                    
                                    {/* sum += subFee; */}
                                    <Text style= {{
                                        display: 'none'
                                    }}>{sum += subFee} </Text>

                                    <Text style= {{
                                        // borderTopColor: Colors.THIRD_GREEN,
                                        // borderTopWidth: 1,
                                        marginTop: 0,
                                        fontFamily: Fonts.POPPINS_MEDIUM,
                                        fontSize: 16,
                                        fontWeight: '400',
                                        paddingHorizontal: 5,
                                        color: Colors.THIRD_GREEN
                                    }}>Tiền hàng : {subTotalByShop} VND</Text>
                                    <Text style= {{
                                        // borderTopColor: Colors.THIRD_GREEN,
                                        // borderTopWidth: 1,
                                        marginTop: 0,
                                        fontFamily: Fonts.POPPINS_MEDIUM,
                                        fontSize: 16,
                                        fontWeight: '400',
                                        paddingHorizontal: 5,
                                        color: Colors.THIRD_GREEN
                                    }}>Phí ship: 30000 VND</Text>
                                    
                                    <Text style= {{
                                        // borderTopColor: Colors.THIRD_GREEN,
                                        // borderTopWidth: 1,
                                        marginTop: 0,
                                        fontFamily: Fonts.POPPINS_MEDIUM,
                                        fontSize: 18,
                                        fontWeight: '400',
                                        paddingHorizontal: 5,
                                        color: Colors.THIRD_GREEN
                                    }}>Tổng: {subFee} VND</Text>
                                </View>
                            );
                        })}
                </ScrollView>
                <TouchableOpacity 
                    style={styles.paymentMethod}
                    onPress={()=> navigation.navigate('PaymentMethod',setPaymentMethod)}
                >
                    <Text style={{
                        fontSize: 20,
                        fontFamily: Fonts.POPPINS_MEDIUM,
                        fontWeight: '300',
                        color: Colors.THIRD_GREEN,
                    }}>Thanh toán bằng {paymentMethod}</Text>
                    <Ionicons 
                        name='chevron-forward' 
                        size={35} 
                        style = {{color: Colors.THIRD_GREEN}}
                    />
                </TouchableOpacity>
                
                
                <View style = {styles.countTotal}>
                    <Text style= {{
                            fontSize: 20,
                            fontFamily: Fonts.POPPINS_MEDIUM,
                            color: Colors.THIRD_GREEN,
                            fontWeight: '500',
                            
                        }}>Tổng tiền </Text>
                    <Text style={styles.textprice}>{sum}</Text>
                </View>
                <View style = {{top: 0,alignItems:'center',marginHorizontal: 10}}>
                    {
                        address =='' ?(
                            <TouchableOpacity 
                                style = {styles.orderDisable}
                                onPress={()=> handlePayment(sum)} >     
                                <Text style= {{ 
                                    marginHorizontal: 15,
                                    fontSize : 20 , 
                                    color: Colors.DEFAULT_WHITE, 
                                    fontFamily: Fonts.POPPINS_MEDIUM, 
                                    fontWeight: 'bold'
                                }}>THANH TOÁN</Text>
                            </TouchableOpacity>
                        ) :(
                            <TouchableOpacity 
                                style = {styles.order}
                                onPress={()=> handlePayment(sum)} >     
                                <Text style= {{ 
                                    marginHorizontal: 15,
                                    fontSize : 20 , 
                                    color: Colors.DEFAULT_WHITE, 
                                    fontFamily: Fonts.POPPINS_MEDIUM, 
                                    fontWeight: 'bold'
                                }}>THANH TOÁN</Text>
                            </TouchableOpacity>
                        )
                    }
                    
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
        backgroundColor: Colors.DEFAULT_WHITE,
        marginTop: 0,
        marginHorizontal: 15,
        // alignItems: 'center',
        height: '65%',
    },
    cardItem:{
        height: 100,
        width: '100%',
        // backgroundColor: Colors.THIRD_WHITE,
        flexDirection: 'row', 
        // borderRadius: 10,
        borderBottomColor: Colors.THIRD_GREEN,
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
    paymentMethod:{
        // borderWidth: 1,
        backgroundColor: Colors.THIRD_WHITE,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal:20,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    order:{
        borderRadius: 35,
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.THIRD_GREEN,
        paddingVertical: 10,
        marginTop: 10,
    },
    orderDisable:{
        borderRadius: 35,
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.THIRD_GREY,
        paddingVertical: 10,
        marginTop: 10,
    },
})