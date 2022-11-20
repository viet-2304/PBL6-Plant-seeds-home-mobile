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

          <View style={styles.price}>
            <Text style={styles.plantName}>
              {plant.name}
            </Text>
            <Text style={styles.textprice}>
              ${plant.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    card: {
        height: 225,
        backgroundColor: Colors.THIRD_WHITE,
        width: 180,
        marginHorizontal: 2,
        borderRadius: 15,
        marginBottom: 20,
    },
    cardImage:{
        height: 150,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.THIRD_LIGHT_GREEN
    },
    plantName:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.THIRD_GREEN,
        fontWeight: 'bold', 
        fontSize: 20, 
    },
    price:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 15
    },
    textprice:{
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.THIRD_GREEN,
        fontSize: 20, 
        fontWeight: 'bold',
    }
});
export default Card;