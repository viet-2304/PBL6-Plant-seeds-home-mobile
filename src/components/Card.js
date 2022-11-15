import React from 'react';
import {StyleSheet,View, TouchableOpacity,Image,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors ,Fonts} from '../contants';

const Card = ({plant,navigation}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Detail',plant)}>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={styles.plantName}>
            {plant.name}
          </Text>
          <View style={styles.price}>
            <Text style={styles.textprice}>
              ${plant.price}
            </Text>
            <Ionicons name='cart' size={25} color = {Colors.THIRD_GREY} />
          </View>
        </View>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    card: {
        height: 225,
        backgroundColor: Colors.THIRD_LIGHT_GREEN,
        width: 180,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    cardImage:{
        height: 120,
        alignItems: 'center',
    },
    plantName:{
        fontFamily: Fonts.FREDOKA_REGULAR,
        color: Colors.THIRD_GREEN,
        fontWeight: 'bold', 
        fontSize: 20, 
        marginTop: 10
    },
    price:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    textprice:{
        fontFamily: Fonts.FREDOKA_REGULAR,
        color: Colors.THIRD_GREEN,
        fontSize: 20, 
        fontWeight: 'bold',
    }
});
export default Card;