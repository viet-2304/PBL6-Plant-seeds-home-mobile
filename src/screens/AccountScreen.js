import { StyleSheet, Text, View,StatusBar ,TouchableOpacity,Image,TextInput} from 'react-native'
import React,{useState,useEffect,localStorage} from 'react'
import { Colors,Images,Fonts } from '../contants'
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../api/api'
import { getCurrentUser } from '../api/user_api'

const AccountScreen = ({navigation})=> {
    const [currentUser,setCurrentUser] = useState([]);
    const [accessToken,setAccessToken] = useState('');

    useEffect(()=>{    
        if(accessToken == "") {
            getAccessToken();
            // console.log(accessToken);
        }
        else {
            getCurrentUser(accessToken)
            .then(async (res) => {
                setCurrentUser(res.data);
            })
            .catch(err =>{
                console.error(err);
            });
        }
    },[accessToken]);

    const getAccessToken = async () =>{
        const value = await AsyncStorage.getItem('AccessToken');
        if (value !== null) {
            // We have data!!
            setAccessToken(value);
        }
    }

    const handleEditUser=()=>{
        navigation.navigate('EditProfile',{currentUser,setAccessToken});
    }
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
                >Tài khoản</Text>     
            </View>
            <View style = {styles.Avatar}>
                <Image source={Images.AvatarImage} style= {styles.ImageAvatar}/>
                <Text style = {styles.NameAccount}>{currentUser?.userName}</Text>
            </View>
            <View style = {{marginHorizontal: 10,alignItems: 'center'}}>
                    <View style = {styles.line} />
            </View>

            <View style = {styles.funtion}>
                <View style= {styles.element}>
                    <TouchableOpacity style = {{
                            flexDirection: 'row',}}
                        onPress = {()=> handleEditUser()}>
                        <Ionicons name='create-outline' size={30} style={{color: Colors.THIRD_GREEN}}/>
                        <Text style={styles.funtionText}>Chỉnh sửa thông tin</Text>    
                    </TouchableOpacity>
                    
                </View>

                <View style= {styles.element}>
                    
                    <TouchableOpacity style = {{
                            flexDirection: 'row',}}
                        onPress = {()=> navigation.navigate('ChangePass')}>
                        <Ionicons name='key-outline' size={30} style={{color: Colors.THIRD_GREEN}}/>
                        <Text style={styles.funtionText}>Thay đổi mật khẩu </Text>    
                    </TouchableOpacity>
                </View>

                <View style= {styles.element}>
                    <TouchableOpacity 
                        style = {{
                            flexDirection: 'row',}}
                        onPress = {()=> navigation.navigate('SignIn')}>
                        <Feather name='log-out' size={30} style={{color: Colors.DEFAULT_RED}}/>
                        {/* <Ionicons name='exit-outline' size={30} style={{color: Colors.DEFAULT_RED}}/> */}
                        <Text 
                            style={{
                                fontFamily: Fonts.POPPINS_MEDIUM,
                                fontWeight: '500',
                                fontSize: 20,
                                color: Colors.DEFAULT_RED,
                                marginHorizontal: 15}}
                            >Đăng xuất</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>

            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingTop: 30,
        position: 'absolute'
    },
    header:{
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        marginBottom: 20
    },
    Image:{
        height: 60,
        width: 60,  
        // borderRadius: 100
    },
    text:{
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: 26,
        fontWeight: '500',
        color: Colors.THIRD_GREEN,
        alignItems: 'center',
        marginLeft: 15
    },
    Avatar:{
        alignItems: 'center',
        marginTop: 10,
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
        color: Colors.THIRD_GREEN,
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
        color: Colors.THIRD_GREEN,
        marginHorizontal: 15
    },

});
export default AccountScreen; 