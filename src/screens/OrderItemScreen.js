import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState} from 'react'
import { Colors ,Images,Fonts, plants} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const OrderItemScreen = ({navigation,route}) => {
    const OrderItem = route.params;
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
            >Lịch sử đặt hàng</Text>     
        </View>

        <View style = {styles.address}>
            <Text style={{
                fontSize: 20,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '300',
                color: Colors.THIRD_GREEN,
            
            }}>Ngày đặt : </Text>
            <Text style = {{fontSize: 20,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '300',
                color: Colors.THIRD_GREEN,

            }}>
            {OrderItem.orderResponseDto?.createDate?.split('T')[0]}</Text>
            
        </View>


        <View style = {{
            height: '15%',
            flexDirection: 'column',
            // alignItems: 'center
            borderRadius: 10,
            marginHorizontal: 20,
            // paddingHorizontal: 10,
            paddingVertical: 5,
        }}>
            <Text style={{
                fontSize: 20,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '300',
                color: Colors.THIRD_GREEN,
            
            }}>Địa chỉ : </Text>
            <Text style = {{fontSize: 20,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '300',
                color: Colors.THIRD_GREEN,
                borderRadius: 10,
                backgroundColor: Colors.THIRD_WHITE,
                paddingHorizontal: 10,
            paddingVertical: 5,
            }}>
            {OrderItem.orderResponseDto?.address}</Text>
            
        </View>
        
        <Text style={{
            marginHorizontal:20,
            fontSize: 20,
            fontFamily: Fonts.POPPINS_MEDIUM,
            fontWeight: '300',
            color: Colors.THIRD_GREEN,
        }}>Danh sách sản phẩm</Text>
        <View style = {{height: '50%',backgroundColor: Colors.DEFAULT_WHITE}}>
                <ScrollView style={styles.card}>
                    {OrderItem.listProduct?.map((product)=>{
                        const image= product.imagesUrl ? product.imagesUrl[0] : "" ;
                        return (
                            <View style={styles.cardItem}>
                                <View style={styles.cardImage}>
                                    <Image source={{uri: image!=="" ? image: undefined }}
                                    style={{ resizeMode: 'contain',height: "100%",width: '100%'}} />
                                </View>
                                <View style = {{width: '70%',flexDirection: 'column'}}>
                                    <View style={{ marginVertical: 5, marginHorizontal: 5}}>
                                        <Text style={styles.plantName}>
                                                {product.productName}
                                        </Text>

                                    </View>
                                    <View style={{marginVertical: 0,flexDirection: 'column',alignItems:'flex-start'}}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            width: '100%'
                                            }}>

                                            <Text 
                                                style={{
                                                    fontSize: 18,
                                                    color: Colors.THIRD_GREEN,
                                                    paddingHorizontal: 8
                                                }}
                                            >Số lượng : </Text>
                                            <Text 
                                                style={{
                                                    fontSize: 18,
                                                    color: Colors.THIRD_GREEN,
                                                    paddingHorizontal: 8
                                                }}
                                            >{product.number}</Text>
                                        </View>
                                        
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            width: '100%'
                                        }}>
                                            <Text 
                                                style={{
                                                    fontSize: 18,
                                                    color: Colors.THIRD_GREEN,
                                                    paddingHorizontal: 8
                                                }}
                                            >Tổng tiền</Text>
                                            <Text 
                                                style={{
                                                    fontSize: 18,
                                                    color: Colors.THIRD_GREEN,
                                                    paddingHorizontal: 8
                                                }}
                                            >{product.total} VND</Text>
                                            
                                        </View>
                                        
                                    </View>
                                </View>    
                            </View>   

                        );
                    })}
                </ScrollView>
        </View>

        <Text style = {{
            borderRadius: 10,
            marginVertical: 5,
            backgroundColor: Colors.THIRD_WHITE,
            paddingHorizontal: 15,
            paddingVertical: 10,
            fontSize: 18,
            marginHorizontal:20,
            color: Colors.THIRD_GREEN
        }}>{OrderItem?.orderResponseDto.paymentMethod}</Text>

        <View style={styles.total}>
                
            <Text style= {{
                fontSize: 24,
                fontFamily: Fonts.POPPINS_MEDIUM,
                color: Colors.THIRD_GREEN,
                fontWeight: '500',
                    
            }}>Tổng tiền</Text>
            <Text style={{
                fontSize: 24,
                color: Colors.THIRD_GREEN,
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '500'

            }}>{OrderItem?.orderResponseDto.total}</Text>
                
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
        paddingTop: 30,
        position: 'absolute'
    },
    header:{
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    address:{
        backgroundColor: Colors.THIRD_WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        borderRadius: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5
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
        fontSize: 18,
    },
    
    textprice:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.THIRD_GREEN,
        fontSize: 18, 
        fontWeight: '500',
        paddingHorizontal: 8
    },
    total:{     
        paddingVertical: 5,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.THIRD_GREEN
    },

})