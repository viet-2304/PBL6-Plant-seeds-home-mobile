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
                    marginLeft: 100
                }}
            >Edit Profile</Text>     
        </View>
        
        <View style={{height:'90%',width: '100%'}}>
            <ScrollView >
                <TextInput placeholder='Email' style ={styles.textInput} editable = {false}/>
                <TextInput placeholder='Username' style ={styles.textInput}/>
                <TextInput placeholder='Gender' style ={styles.textInput}/>
                <TextInput placeholder='Birthday' style ={styles.textInput}/>
                <TextInput placeholder='Address' style ={styles.textInput}/>
                <TextInput placeholder='Phone' style ={styles.textInput}/>
            </ScrollView>
            <View style = {{flex:1,position: 'relative' }}>
                <TouchableOpacity style = {styles.BtUpdate}>
                    <Text style = {{
                        fontSize : 22 , 
                        color: Colors.DEFAULT_WHITE, 
                        fontFamily: Fonts.POPPINS_MEDIUM, 
                        fontWeight: 'bold'
                    }}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
  )
}

export default SignInScreeen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        // height: '100%',
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingTop: 70,
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