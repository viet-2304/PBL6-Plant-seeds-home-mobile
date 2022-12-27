import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { editUser } from '../api/user_api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignInScreeen = ({navigation,route}) => {
    
    const {currentUser,setAccessToken} = route.params;
    const user = currentUser;

    const [id,setId] = useState(user.id);
    const [email,setEmail] = useState(user.email);
    const [username,setUsername] = useState(user.userName);
    const [phone,setPhone] = useState(user.phoneNumber);
    const [address,serAddress] = useState(user.address);
    const [Token,setToken] = useState('');

    useEffect(()=>{    
        if(Token == "") {
            getAccessToken();
        }        
    },[Token]);

    const handleSave =() =>{
        editUser(Token,{
            id: id,
            email: email,
            phoneNumber: phone,
            address: address,
            userName: username,
            imageAvatar: '',
            roleId: '',
        })
        .then((res) =>{
            alert('Edit success!');
            setAccessToken('')
            // navigation.goBack();
        })
        .catch(err =>{
            console.error(err);
        })
    }

    const getAccessToken = async () =>{
        const value = await AsyncStorage.getItem('AccessToken');
        if (value !== null) {
            // We have data!!
            setToken(value);
        }
    }
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
            >Chỉnh sửa thông tin</Text>     
        </View>
        
        <View style={{height:'90%',width: '100%',position: 'relative'}}>
            <KeyboardAvoidingView >
                <Text style ={styles.text}>Email:</Text>
                
                <TextInput 
                    value={email} 
                    onChangeText={newText => setEmail(newText)}
                    style ={styles.textInput}/>
                
                <Text style ={styles.text}>Tên tài khoản:</Text>
                
                <TextInput 
                    value={username} 
                    onChangeText={newText => setUsername(newText)}
                    style ={styles.textInput}/>
                
                <Text style ={styles.text}>Điện thoại:</Text>
                
                <TextInput 
                    value={phone}
                    onChangeText={newText => setPhone(newText)} 
                    style ={styles.textInput}/>

                <Text style ={styles.text}>Địa chỉ:</Text>

                <TextInput 
                    value={address} 
                    onChangeText={newText => serAddress(newText)}
                    style ={styles.textInput}/>
                
                <View style = {{top: 60,alignItems:'center',marginHorizontal: 10}}>
                    <TouchableOpacity 
                        style = {styles.BtUpdate}
                        onPress = {()=> handleSave()} >
                        <Text style = {{
                            fontSize : 22 , 
                            color: Colors.DEFAULT_WHITE, 
                            fontFamily: Fonts.POPPINS_MEDIUM, 
                            fontWeight: 'bold'
                        }}>Lưu thông tin</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
    },
    header:{
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
        paddingTop: 30,
    },
    text: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.THIRD_GREEN,
        marginHorizontal: 20,
    },
    textInput:{
        fontSize: 18,
        textAlignVertical: 'center',
        paddingHorizontal:20,
        fontFamily: Fonts.NOTO_REGULAR,
        backgroundColor: Colors.THIRD_WHITE,
        marginHorizontal: 20,
        margin: 10,
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
        width: '100%'
    },

})