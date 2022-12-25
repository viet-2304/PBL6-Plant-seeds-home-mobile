import React from "react";
import { View, Text, StatusBar, Image,StyleSheet,TouchableOpacity ,FlatList,ScrollView} from 'react-native'
import { Colors ,Images,Fonts} from "../contants"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const CartScreen = ({navigation,route}) =>{
    const plants = route.params;
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
                >My Cart</Text>     
            </View>
            <View style = {{height: '65%'}}>
                <ScrollView style={styles.card}>

                    <View style={styles.cardItem}>
                        <View style={styles.cardImage}>
                            <Image
                                source={Images.Plant}
                                style={{flex: 1, resizeMode: 'contain'}}
                            />
                        </View>
                        <View style = {{width: '70%',flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-evenly', marginVertical: 10, marginHorizontal: 5}}>
                                <Text style={styles.plantName}>
                                        {plants.productName}
                                </Text>
                                <Ionicons name="trash" size={24} 
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
                                    >1
                                </Text>
                                <Ionicons name="add"size={24}style={{color: Colors.THIRD_GREEN}}/>
                                <Text style={styles.textprice}>
                                    {plants.price} VND
                                </Text>
                            </View>
                        </View>    
                    </View>


                    
                </ScrollView>
            </View>
            <View style={styles.total}>
                <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
                    <Text style= {{
                        fontSize: 22,
                        fontFamily: Fonts.POPPINS_REGULAR,
                        color: Colors.THIRD_GREEN
                    }}>Subtotal</Text>
                    <Text style={styles.textprice}>
                                    ${plants.price}
                                </Text>
                </View>
                
                <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
                    <Text style= {{
                            fontSize: 22,
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
                        marginTop: 20,
                        alignItems: 'center',
                    }}>
                    <Text style= {{
                            fontSize: 24,
                            fontFamily: Fonts.POPPINS_MEDIUM,
                            color: Colors.THIRD_GREEN,
                            fontWeight: '500',
                            
                        }}>Total</Text>
                    <Text style={styles.textprice}>$35.99</Text>
                </View>
                <TouchableOpacity style = {styles.order} onPress= {()=> navigation.navigate('CheckOut',plants)}>     
                    <Text style= {{ 
                        marginHorizontal: 15,
                        fontSize : 22 , 
                        color: Colors.DEFAULT_WHITE, 
                        fontFamily: Fonts.POPPINS_MEDIUM, 
                        fontWeight: 'bold'
                    }}>Check Out</Text>
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
        backgroundColor: Colors.DEFAULT_WHITE,
        marginTop: 15,
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
        height: '30%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right:0,
        paddingVertical: 5,
        marginHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: Colors.THIRD_GREEN
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
export default CartScreen;