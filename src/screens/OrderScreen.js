import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OrderItem from '../components/OrderItem'

const OrderScreen = ({navigation}) => {

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
            >My Orders</Text>     
        </View>
        
        <OrderItem navigation={navigation}/>
        
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
        paddingTop: 70,
        position: 'absolute'
    },
    header:{
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        marginBottom: 20
    },

})