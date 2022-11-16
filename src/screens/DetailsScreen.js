import { View, Text, StatusBar, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react';
import { Colors ,Images,Fonts} from "../contants"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'


const DetailsScreen = ({navigation,route}) => {
    const plant = route.params;

    return (
        <View style = {styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
            <View style = {styles.header}>
                <Ionicons 
                    name='caret-back-circle-outline' 
                    size={40} 
                    onPress={() => navigation.goBack()}/>
                
                <Ionicons name='cart' size={40}/>
            </View>
            <View style = {styles.imageContain}>
                <Image source={plant.img} style = {styles.image}/>
            </View>

            <View style = {styles.detailContain}>
                <View style = {{marginLeft: 10,alignItems: 'center',}}>
                    <View style = {styles.line} />
                </View>
                <View style = {styles.name}>
                    <View style = {styles.nameContain}>
                        <Text style={styles.textName}>{plant.name}</Text>
                        <Text style = {styles.textPrice}>${plant.price}</Text>    
                    </View>
                    <View style = {styles.buyContain}>
                        <Text style= {{fontSize : 24 , color: Colors.DEFAULT_WHITE, fontWeight: 'bold'}}>-</Text>
                        <Text style= {{fontSize : 20 , color: Colors.DEFAULT_WHITE ,fontWeight: 'bold'}}>1</Text>
                        <Text style= {{fontSize : 24 , color: Colors.DEFAULT_WHITE, fontWeight: 'bold'}}>+</Text>
                    </View>
                </View>

                <View style = {styles.detail}>
                    <Text 
                        style={{
                            fontSize: 24, 
                            fontWeight: 'bold', 
                            fontFamily: Fonts.POPPINS_BOLD, 
                            color: Colors.THIRD_GREEN
                        }}>About</Text>
                    
                    <Text
                        style={{
                            fontFamily: Fonts.POPPINS_LIGHT,
                            fontSize: 16,
                            fontWeight : '400',
                            marginTop: 10,
                            color: Colors.DEFAULT_BLACK
                        }}>{plant.about}</Text>
                </View>
                
                <View style = {styles.buy}>
                    <View style = {styles.icon}>
                        <Feather name='shopping-bag' size={30}/>
                    </View>
                    
                    <TouchableOpacity style = {styles.BuyNow}>
                        <Text style= {{fontSize : 20 , color: Colors.DEFAULT_WHITE, fontFamily: Fonts.OPENSANS_REGULAR, fontWeight: 'bold'}}>BUY NOW</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: Colors.THIRD_LIGHT_GREEN,
    //   paddingBottom: 70,
      paddingTop: 70
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    imageContain:{
        flex: 0.45,
        alignItems: 'center',
        // backgroundColor: Colors.THIRD_LIGHT_GREEN
    },
    image:{
        flex: 1,
        resizeMode: 'contain'
    },
    detailContain:{
        flex: 0.60,
        backgroundColor: Colors.DEFAULT_WHITE,
        marginHorizontal: 2,
        // marginBottom: 7,
        borderRadius: 20,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    nameContain:{
        marginTop: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        // backgroundColor: Colors.THIRD_LIGHT_GREEN,
    },
    textName:{
        fontFamily: Fonts.FREDOKA_REGULAR,
        fontWeight: 'bold',
        fontSize: 28,
        color: Colors.THIRD_GREEN
    },
    textPrice:{
        fontFamily: Fonts.FREDOKA_REGULAR,
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.SECONDARY_GREEN
    },
    detail:{
        marginHorizontal: 30,
        marginTop: 15
    },
    buy:{
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginTop: 40,
    },
    icon:{
        height: 50,
        width: 50,
        backgroundColor: Colors.THIRD_LIGHT_GREEN,
        alignItems: 'center',
        paddingTop: 10,
        borderRadius: 100
    },
    BuyNow:{
        borderRadius: 25,
        height: 50,
        width: 270,
        alignItems: 'center',
        backgroundColor: Colors.THIRD_GREEN,
        paddingTop: 10
    }
})
export default DetailsScreen;