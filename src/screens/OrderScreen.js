import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OrderItem from '../components/OrderItem'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllOrder } from '../api/user_api'

const OrderScreen = ({navigation}) => {
    const [listOrder,setListOrder] = useState();
    const [userId,setUserId] = useState('');
    const [token,setToken] = useState('');

    useEffect(()=>{
        if(userId == '' || token == ''){
            getuserId();
        }else{
            getAllOrder(token,userId)
            .then(res =>{
                setListOrder(res.data);
                // console.log(res.data);
            })
            .catch(err =>{
                console.error(err);
            })
        }
    },[userId,token]);
    // console.log(userId);
    // console.log(token);
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
            >Lịch sử đặt hàng</Text>     
        </View>
        <View style = {{height: '90%', backgroundColor: Colors.DEFAULT_WHITE}}>
            <ScrollView style={styles.card}>
                {listOrder?.map((item)=>{
                    return(
                        <View style = {{
                            borderColor: Colors.THIRD_GREEN,
                            marginHorizontal: 15,
                            marginVertical: 5,
                            borderWidth: 1}}>
                            <OrderItem navigation={navigation} OrderItem={item}/>
                        </View>
                    )
                    
                })}
                
            </ScrollView>
        </View>
        
        
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingTop: 30,
        position: 'absolute'
    },
    header:{
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        marginBottom: 20
    },

})