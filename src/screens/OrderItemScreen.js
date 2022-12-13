import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const OrderItemScreen = ({navigation,route}) => {
    // const plants = route.params;
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
            >Order Detail</Text>     
        </View>
        <View style = {{backgroundColor: Colors.DEFAULT_WHITE, paddingHorizontal: 20}}>
            <Text style={{
                fontSize: 20,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '300',
                color: Colors.THIRD_GREEN
            }}>Delivery Address</Text>
            <TextInput placeholder='Address'editable = {false} style = {styles.address}/>
        </View>
        
        <Text style={{
            marginHorizontal:20,
            fontSize: 20,
            fontFamily: Fonts.POPPINS_MEDIUM,
            fontWeight: '300',
            color: Colors.THIRD_GREEN
        }}>Order List</Text>
        <View style = {{height: '35%'}}>
                <ScrollView style={styles.card}>
                    <View style={styles.cardItem}>
                        <View style={styles.cardImage}>
                            <Image
                                source={Images.Logo_home}
                                style={{flex: 1, resizeMode: 'contain'}}
                            />
                        </View>
                        <View style = {{width: '70%',flexDirection: 'column',paddingHorizontal:10}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between', marginVertical: 10}}>
                                <Text style={styles.plantName}>
                                        Hoa hong
                                </Text>
                            </View>
                            <View style={{marginVertical: 5,flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>
                                
                                <Text 
                                    style={{
                                        fontSize: 20,
                                        color: Colors.THIRD_GREEN,
                                        borderWidth: 1.5,
                                        borderColor: Colors.THIRD_GREEN,
                                        borderRadius: 8,
                                        paddingHorizontal: 8
                                    }}
                                    >1
                                </Text>
                                
                                <Text style={styles.textprice}>
                                    $30.00
                                </Text>
                            </View>
                        </View>    
                    </View>
                </ScrollView>
        </View>
        

        <Text style={{
                marginHorizontal:20,
                marginTop: 5,
                fontSize: 20,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '300',
                color: Colors.THIRD_GREEN
            }}>Payment Method</Text>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            // borderWidth: 1,
            // borderColor: Colors.THIRD_GREEN,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 8,
            alignItems: 'center',
            backgroundColor: Colors.THIRD_WHITE,
        }}> 
            <Text style={{
                fontSize: 20,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '300',
                color: Colors.THIRD_GREEN
            }}>By cash</Text>
        </View>

        <View style={styles.total}>
                <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
                    <Text style= {{
                        fontSize: 20,
                        fontFamily: Fonts.POPPINS_REGULAR,
                        color: Colors.THIRD_GREEN
                    }}>Subtotal</Text>
                    <Text style={styles.textprice}>
                                    $30.00
                                </Text>
                </View>
                
                <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
                    <Text style= {{
                            fontSize: 20,
                            fontFamily: Fonts.POPPINS_REGULAR,
                            color: Colors.THIRD_GREEN
                        }}>Shipping cost</Text>
                    <Text style={styles.textprice}>
                                        $10.00
                                    </Text>
                </View>
                <View style = {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                        alignItems: 'center',
                        borderTopWidth: 1,
                        borderTopColor: Colors.THIRD_GREEN
                    }}>
                    <Text style= {{
                            fontSize: 24,
                            fontFamily: Fonts.POPPINS_MEDIUM,
                            color: Colors.THIRD_GREEN,
                            fontWeight: '500',
                            
                        }}>Total</Text>
                    <Text style={{
                        fontSize: 24,
                        color: Colors.THIRD_GREEN,
                        fontFamily: Fonts.POPPINS_MEDIUM,
                        fontWeight: '500'
                    }}>$35.99</Text>
                </View>
            </View>
    </View>
  )
}

export default OrderItemScreen;

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
        marginBottom: 15
    },
    address:{
        // borderWidth: 1,
        // borderColor: Colors.THIRD_GREEN,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: Colors.THIRD_WHITE,
        paddingHorizontal: 15,
        fontSize: 18
    },
    card: {
        backgroundColor: Colors.DEFAULT_WHITE,
        marginTop: 0,
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
        fontSize: 22,
    },
    
    textprice:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.THIRD_GREEN,
        fontSize: 20, 
        fontWeight: '500',
        marginLeft: 20
    },
    total:{
        // backgroundColor: Colors.DEFAULT_YELLOW,
        // height: '30%',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right:0,
        marginTop: 15,
        paddingVertical: 5,
        marginHorizontal: 20,
        // borderTopWidth: 1,
        // borderTopColor: Colors.THIRD_GREEN
    },
    order:{
        borderRadius: 35,
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.THIRD_GREEN,
        paddingVertical: 10,
        marginTop: 10
    }
})