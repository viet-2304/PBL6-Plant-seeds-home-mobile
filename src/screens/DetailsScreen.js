import { View, Text, StatusBar, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react';
import { Colors ,Images,Fonts} from "../contants"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { addtoCart, getCurrentUser } from '../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DetailsScreen = ({navigation,route}) => {
    const {plant} = route.params;
    const [quantity, setQuantity] = useState(1);
    const [userId,setUserId] = useState('');
    const [token,setToken] = useState('');
    const image= plant.imagesUrl ? plant.imagesUrl[0] : '';
    //ham tang giam so luong
    const handleQuantity= (type) =>{
        if(type === 'down'){
            quantity > 1 && setQuantity((prev) => prev - 1 );
        }
        else{
            setQuantity((prev) => prev + 1);
        }
    }

    useEffect(()=>{
        if(userId == '' || token == ''){
            getuserId();
        }
    },[userId,token]);

    //lay userId & token
    const getuserId = async () =>{
        const id = await AsyncStorage.getItem('userID');
        setUserId(id);

        const tk = await AsyncStorage.getItem('AccessToken');
        setToken(tk);
    };
    //ham them vao gio hang
    const handleAddtoCart=() =>{
        addtoCart(token,{
            number: quantity,
            userId: userId,
            productId: plant.productId,
        }).then(async (res) =>{
            alert('Thêm vào giỏ hàng thành công!');            
            navigation.replace('CartTab');
        })
        .catch(err =>{
            console.error(err);
        })
    }

    return (
        <View style = {styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
            <View style = {styles.header}>
                <Ionicons 
                    name='chevron-back' 
                    size={35} 
                    style = {{color: Colors.THIRD_GREEN}}
                    onPress={() => navigation.goBack()}/>
                
            </View>
            <View style = {styles.imageContain}>
                <Image source={{uri: image}}
                    style={{ resizeMode: 'contain',height: "100%",width: '100%'}} />
            </View>

            <View style = {styles.detailContain}>
                <View style = {{marginLeft: 10,alignItems: 'center',}}>
                    <View style = {styles.line} />
                </View>
                <View style = {styles.name}>
                    <View style = {styles.nameContain}>
                        <Text style={styles.textName}>{plant.productName}</Text>   
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                        <Text style = {styles.textPrice}>{plant.price} VND</Text>
                        <View style = {styles.buyContain}>
                            <Ionicons 
                                name="remove"size={24} 
                                style={{color: Colors.DEFAULT_WHITE}}
                                onPress={() => handleQuantity('down')}/>
                            <Text style= {{
                                fontSize : 20 , 
                                color: Colors.DEFAULT_WHITE ,
                                fontWeight: 'bold'
                            }}>{quantity}</Text>
                            <Ionicons 
                                name="add"size={24}
                                style={{color: Colors.DEFAULT_WHITE}}
                                onPress={() => handleQuantity('up')}/>
                        </View> 
                    </View>
                    
                </View>

                <View style = {styles.detail}>
                    <Text 
                        style={{
                            fontSize: 24, 
                            fontWeight: 'bold', 
                            fontFamily: Fonts.POPPINS_BOLD, 
                            color: Colors.THIRD_GREEN
                        }}>Chi tiết sản phẩm</Text>
                    
                    <Text
                        style={{
                            fontFamily: Fonts.POPPINS_MEDIUM,
                            fontSize: 16,
                            fontWeight : '200',
                            marginTop: 10,
                            color: Colors.DEFAULT_BLACK
                    }}>{plant.description}</Text>
                    
                    <Text
                        style={{
                            fontFamily: Fonts.POPPINS_MEDIUM,
                            fontSize: 16,
                            fontWeight : '200',
                            marginTop: 10,
                            color: Colors.DEFAULT_BLACK
                    }}>Hạn sử dụng: {plant?.exp?.split('T')[0]}</Text>
                </View>
                
                <View style = {styles.buy}>          
                    <TouchableOpacity style = {styles.BuyNow} 
                        onPress={() => handleAddtoCart()}>
                        <Feather name='shopping-cart' size={30} style = {{color: Colors.DEFAULT_WHITE}} />
                        <Text style= {{ 
                            marginHorizontal: 15,
                            fontSize : 22 , 
                            color: Colors.DEFAULT_WHITE, 
                            fontFamily: Fonts.POPPINS_MEDIUM, 
                            fontWeight: 'bold'
                        }}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.THIRD_LIGHT_GREEN,
      paddingTop: 30
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    imageContain:{
        flex: 0.40,
        alignItems: 'center',
        
    },
    
    detailContain:{
        flex: 0.60,
        backgroundColor: Colors.DEFAULT_WHITE,
        marginHorizontal: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 15,
        paddingTop: 10,
    },
    line: {
        width: 50,
        height: 2,
        backgroundColor: Colors.THIRD_GREY,
        marginTop: 10,
    },
    name:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        height: 100
    },
    nameContain:{
        marginTop: 15,
        alignItems: 'flex-start',
    },
    textName:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontWeight: '700',
        fontSize: 22,
        color: Colors.THIRD_GREEN
    },
    textPrice:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontWeight: '700',
        fontSize: 24,
        color: Colors.SECONDARY_GREEN
    },
    detail:{
        marginHorizontal: 30,
        marginTop: 15,
        height: 220,
        justifyContent: 'space-between'
    },
    buy:{
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 20,
    },
    buyContain:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.THIRD_GREEN,
        borderRadius: 20,
        height: 35,
        width: 120,
        paddingHorizontal: 15,
    },
    BuyNow:{
        borderRadius: 35,
        flexDirection: 'row',
        height: 50,
        width: 350,
        justifyContent: 'center',
        backgroundColor: Colors.THIRD_GREEN,
        paddingVertical: 10
    }
})
export default DetailsScreen;