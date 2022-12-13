import React from 'react';
import {StyleSheet,View, TouchableOpacity,Image,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors ,Fonts} from '../contants';

const OrderItem = ({navigation}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('OrderDetail')}>
        <View style= {styles.orderItem}>
            <View>
                <Text style ={{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '400',
                    fontSize: 20,
                    color: Colors.THIRD_GREEN
                }}>OrderID : 1252635</Text>
                <Text style={{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '400',
                    fontSize: 18,
                    color: Colors.THIRD_GREEN
                }}>May 20th</Text>
            </View>
            <Text style={{
                fontFamily: Fonts.POPPINS_MEDIUM,
                fontWeight: '600',
                fontSize: 20,
                color: Colors.DEFAULT_RED
            }}>$35.00</Text>
        </View>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    orderItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.THIRD_WHITE,
        marginHorizontal : 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10, 
        // alignItems: 'center'
    }
});
export default OrderItem;