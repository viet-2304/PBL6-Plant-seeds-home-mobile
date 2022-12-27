import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SignInScreeen = ({navigation}) => {

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
            >Thay đổi mật khẩu</Text>     
        </View>
        
        <View style={{width: '100%'}}>
            
            <TextInput placeholder='Mật khẩu hiện tại' style ={styles.textInput} />
            <TextInput placeholder='Mật khẩu mới' style ={styles.textInput}/>
            <TextInput placeholder='Xác nhận mật khẩu mới' style ={styles.textInput}/>
            
        </View>
        
        <View style = {{flex:1,position: 'relative', marginTop: 50 }}>
                <TouchableOpacity style = {styles.BtUpdate}>
                    <Text style = {{
                        fontSize : 22 , 
                        color: Colors.DEFAULT_WHITE, 
                        fontFamily: Fonts.POPPINS_MEDIUM, 
                        fontWeight: 'bold'
                    }}>Lưu</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default SignInScreeen

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
    textInput:{
        fontSize: 18,
        textAlignVertical: 'center',
        paddingHorizontal:20,
        fontFamily: Fonts.NOTO_REGULAR,
        backgroundColor: Colors.THIRD_WHITE,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    BtUpdate:{
        backgroundColor: Colors.THIRD_GREEN,
        borderRadius: 30,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    }
})