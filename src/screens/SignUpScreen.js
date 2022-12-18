import { StyleSheet, Text, View, StatusBar,Image,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React ,{useState} from 'react'
import { Colors,Images,Fonts } from '../contants'
import { Separator } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import {user_register} from '../api/user_api'

const SignUpScreen = ({navigation}) => {
  const [isPasswordShow,setPwShow] = useState(false);
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const handleUserRegister = () => {
    user_register({
      email: email,
      userName: userName,
      password: password
    })
    .then((res)=> {
      if(res.status == 200) {
        // AsyncStorage.setItem("AccessToken", res.data.token);
        // console.log(res.data);
        navigation.navigate('SignIn');
      }
    })
    .catch(err =>{
      console.error(err);
    })
  };

  return (
    <View style= {styles.container}>
        <StatusBar barStyle='light-content' 
            backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
        
        <Separator height={20} />
          <View style = {styles.header}>
            <Image source={Images.SignUpImage} style= {styles.image}/>
            <Ionicons 
                    name='chevron-back' 
                    size={35} 
                    style = {styles.icon}
                    onPress={() => navigation.goBack()}/>
          </View>
        <View style = {styles.Content}>
          <View style = {styles.titleContain}>
            <Text style= {styles.title}>Register</Text>
            <Text style= {styles.text}>Create your new account</Text>
          </View>
          <Separator height={20}/>
          <View style = {styles.inputUser}>
            <View style = {styles.user}>
              <Feather name='user' size={25} color= {Colors.THIRD_GREEN}/>
              <TextInput 
                placeholder='Username ' 
                value={userName}
                onChangeText={newText => setuserName(newText)}
                placeholderTextColor={Colors.THIRD_GREEN} 
                style={styles.textInput}/>
            </View>
          </View>
          <Separator height={20}/>
          <View style = {styles.inputUser}>
            <View style = {styles.user}>
              <Feather name='mail' size={25} color= {Colors.THIRD_GREEN}/>
              <TextInput 
                
                placeholder='Email' 
                value={email}
                onChangeText={newText => setEmail(newText)}
                placeholderTextColor={Colors.THIRD_GREEN} 
                style={styles.textInput}
                 />
            </View>
          </View>
          <Separator height={20}/>
          <View style = {styles.inputUser}>
            <View style = {styles.user}>
              <Feather name='lock' size={25} color= {Colors.THIRD_GREEN}/>
              <TextInput 
                secureTextEntry= {isPasswordShow ? false : true}
                placeholder='Password' 
                value={password}
                onChangeText={newText => setPassword(newText)}
                placeholderTextColor={Colors.THIRD_GREEN} 
                style={styles.textInput}
                 />
              <Feather 
                name={isPasswordShow ? 'eye' : 'eye-off'} 
                size={25} 
                color= {Colors.THIRD_GREEN} 
                style={{left: 300, position:'absolute'}}
                onPress ={()=>setPwShow(!isPasswordShow)} 
                />
            </View>
          </View>
          <Separator height={20}/>
          <View style = {styles.inputUser}>
            <View style = {styles.user}>
              <Feather name='lock' size={25} color= {Colors.THIRD_GREEN}/>
              <TextInput 
                secureTextEntry= {isPasswordShow ? false : true}
                placeholder='Confirm Password'
                value={confirmpassword}
                onChangeText={newText => setConfirmPassword(newText)}
                placeholderTextColor={Colors.THIRD_GREEN} 
                style={styles.textInput}
                 />
              <Feather 
                name={isPasswordShow ? 'eye' : 'eye-off'} 
                size={25} 
                color= {Colors.THIRD_GREEN} 
                style={{left: 300, position:'absolute'}}
                onPress ={()=>setPwShow(!isPasswordShow)} 
                />
            </View>
          </View>
          <TouchableOpacity style= {styles.btLogIn} onPress = {()=> handleUserRegister()}>
            <Text style= {styles.textLogIn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    height: '100%'
  },
  header:{
    // flex: 1,
    flexDirection:'column',
    height: 180
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode:'cover',
    position:'relative',
  },
  icon:{
    marginTop: 120,
    marginLeft: 20,
    color: Colors.THIRD_GREEN,
    position:'absolute',
  },
  Content:{
    flex :2,
    justifyContent:'center',
    paddingBottom: 70,
  },
  titleContain:{
    alignItems:'center',
    justifyContent: 'center'
  },
  title: {
    fontSize:44,
    color: Colors.THIRD_GREEN,
    fontFamily: Fonts.FREDOKA_BOLD,
    // marginTop:30,
  },
  text:{
    fontSize:20,
    fontFamily: Fonts.FREDOKA_REGULAR,
  },
  inputUser:{
    backgroundColor: Colors.LIGHT_GREY,
    borderColor: Colors.THIRD_GREEN,
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  user:{
    flexDirection:'row',
    alignItems: 'center',
  },
  textInput:{
    fontSize: 18,
    textAlignVertical: 'center',
    paddingHorizontal:10,
    fontFamily: Fonts.NOTO_REGULAR,
    maxWidth: 250,
  },
  btLogIn:{
    backgroundColor: Colors.THIRD_GREEN,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 70 
  },
  textLogIn:{
    fontFamily: Fonts.NOTO_REGULAR,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.THIRD_WHITE
  },
})