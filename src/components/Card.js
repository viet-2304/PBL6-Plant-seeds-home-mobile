import React from 'react';
import {StyleSheet,View, TouchableOpacity,Image,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors ,Fonts,Images} from '../contants';

const Card = ({plant,navigation}) => {
  const image= plant.imagesUrl ? plant.imagesUrl[0] : "";
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Detail',{plant})}>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image source={{uri: image !=="" ? image: undefined }}
              style={{ resizeMode: 'contain',height: 150,width: 150}} />

          </View>

          <View style={styles.price}>
            <Text style={styles.plantName}>
              {plant.productName}
            </Text>
            <Text style={styles.textprice}>
              {plant.price} VND
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
        fontWeight: '700', 
        fontSize: 16, 
        height: 40
    },
    price:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 15
    },
    textprice:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.SECONDARY_GREEN,
        fontSize: 18, 
        fontWeight: '700',
    }
});
export default Card;