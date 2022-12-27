import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PaymentMethodScreen = ({navigation,route})=>{
    const setPaymentMethod = route.params;
    const ChangePaymentMethod=(value)=>{
        if(value == 'paypal'){
            setPaymentMethod('paypal');
            navigation.goBack();
        }
        else{
            setPaymentMethod('tiền mặt');
            navigation.goBack();
        }
    }
    return(
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
                >Phương thức thanh toán</Text> 
            </View>
            
            <TouchableOpacity 
                style = {styles.order}
                onPress={()=> ChangePaymentMethod('paypal')} >     
                <Text style= {{ 
                    marginHorizontal: 15,
                    fontSize : 20 , 
                    color: Colors.THIRD_GREEN, 
                    fontFamily: Fonts.POPPINS_MEDIUM, 
                    fontWeight: 'bold'
                }}>Thanh toán bằng paypal</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {styles.order}
                onPress={()=> ChangePaymentMethod('cash')} >     
                <Text style= {{ 
                    marginHorizontal: 15,
                    fontSize : 20 , 
                    color: Colors.THIRD_GREEN, 
                    fontFamily: Fonts.POPPINS_MEDIUM, 
                    fontWeight: 'bold'
                }}>Thanh toán bằng tiền mặt</Text>
            </TouchableOpacity>
                
        </View>
    )
}

export default PaymentMethodScreen;
const styles = StyleSheet.create({
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
    order:{
        // borderRadius: 35,
        height: 100,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.THIRD_WHITE,
        paddingVertical: 10,
        marginTop: 10,
        // marginHorizontal: 20,
        justifyContent: 'center'
    }
})