import React from 'react';
import {StyleSheet,View, TouchableOpacity,Image,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors ,Fonts} from '../contants';

const OrderItem = ({navigation,OrderItem}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('OrderDetail',OrderItem)}>
        <View style= {styles.orderItem}>
            <View>
                <Text style ={{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '400',
                    fontSize: 20,
                    color: Colors.THIRD_GREEN
                }}>Người đặt : {OrderItem.orderResponseDto?.userName}</Text>
                <Text style ={{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '400',
                    fontSize: 20,
                    color: Colors.THIRD_GREEN
                }}>Tổng tiền : {OrderItem.orderResponseDto?.total} VND</Text>
                <Text style={{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontWeight: '400',
                    fontSize: 18,
                    color: Colors.THIRD_GREEN
                }}>Ngày đặt : {OrderItem.orderResponseDto?.createDate?.split('T')[0]}</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    orderItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.THIRD_WHITE,
        // marginHorizontal : 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10, 
        // alignItems: 'center'
    }
});
export default OrderItem;