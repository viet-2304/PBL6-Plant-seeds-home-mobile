import { StyleSheet, Text, View,StatusBar ,TouchableOpacity,Image,TextInput} from 'react-native'
import React,{useState} from 'react'
import { Colors,Images,Fonts } from '../contants'
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const AccountScreen = ({navigation})=> {
    return(
        <View style = {styles.container}>
            <StatusBar barStyle='light-content' 
                backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
            <Separator height={40}/>  
            <View style= {styles.titleContain}>
                <Ionicons 
                    name='chevron-back' 
                    size={35} 
                    style = {{color: Colors.DEFAULT_BLACK}}
                    onPress={() => navigation.navigate('Home')}/>       
                <Text style = {styles.text}>Profile</Text>
            </View>
            <View style = {styles.Avatar}>
                <Image source={Images.AvatarImage} style= {styles.ImageAvatar}/>
                <Text style = {styles.NameAccount}>Vu Thi Nga</Text>
            </View>
            <View style = {{marginHorizontal: 10,alignItems: 'center'}}>
                    <View style = {styles.line} />
            </View>

            <View style = {styles.funtion}>
                <View style= {styles.element}>
                    <Ionicons name='create-outline' size={30} style={{color: Colors.DEFAULT_BLACK}}/>
                    <Text style={styles.funtionText}>Edit Profile</Text>
                    <Ionicons name='chevron-forward-outline' size={25} style={{color: Colors.DEFAULT_BLACK, right: 0 ,position:'absolute'}}/>
                </View>

                <View style= {styles.element}>
                    <Ionicons name='key-outline' size={30} style={{color: Colors.DEFAULT_BLACK}}/>
                    <Text style={styles.funtionText}>Change Password</Text>
                    <Ionicons name='chevron-forward-outline' size={25} style={{color: Colors.DEFAULT_BLACK, right: 0 ,position:'absolute'}}/>
                </View>

                <View style= {styles.element}>
                    <Ionicons name='card-outline' size={30} style={{color: Colors.DEFAULT_BLACK}}/>
                    <Text style={styles.funtionText}>Orders</Text>
                    <Ionicons name='chevron-forward-outline' size={25} style={{color: Colors.DEFAULT_BLACK, right: 0 ,position:'absolute'}}/>
                </View>
                <View style= {styles.element}>
                    <TouchableOpacity 
                        style = {{
                            flexDirection: 'row',}}
                        onPress = {()=> navigation.navigate('SignIn')}>

                        <Ionicons name='exit-outline' size={30} style={{color: Colors.DEFAULT_RED}}/>
                        <Text 
                            style={{
                                fontFamily: Fonts.POPPINS_MEDIUM,
                                fontWeight: '500',
                                fontSize: 20,
                                color: Colors.DEFAULT_RED,
                                marginHorizontal: 15}}
                            >Log Out</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>

            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    titleContain:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 10,    
    },
    Image:{
        height: 60,
        width: 60,  
        // borderRadius: 100
    },
    text:{
        fontSize: 26,
        marginHorizontal: 5,
        fontFamily: Fonts.POPPINS_REGULAR,
        fontWeight: 'bold',
        color: Colors.DEFAULT_BLACK
    },
    Avatar:{
        alignItems: 'center',
        marginTop: 25,
        flexDirection: 'column'
    },
    ImageAvatar:{
        height: 130,
        width: 130,  
        borderRadius: 100
    },
    NameAccount:{
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: 28,
        fontWeight:'bold',
        color: Colors.DEFAULT_BLACK,
        marginTop: 10,
    },
    line: {
        width: 350,
        height: 1,
        backgroundColor: Colors.THIRD_GREY,
        marginTop: 20,
    },
    funtion:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 15,
        
    },
    element:{
        flexDirection: 'row',
        // justifyContent: 'space-around',
        marginVertical: 10,
        marginHorizontal: 15,
    },
    funtionText:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontWeight: '500',
        fontSize: 20,
        color: Colors.DEFAULT_BLACK,
        marginHorizontal: 15
    },

});
export default AccountScreen; 