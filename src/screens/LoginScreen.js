import { StyleSheet,KeyboardAvoidingView,Image , Text, View,StatusBar,TextInput ,TouchableOpacity} from 'react-native'
import React ,{useState, useEffect,localStorage} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import { user_login } from '../api/user_api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}) => {
    const [isPasswordShow,setPwShow] = useState(false);
    const [email, setEmail] = useState('user05@gmail.com');
    const [password, setPassword] = useState('user05');
    const handleUserLogin = () => {
        user_login({
          email: email,
          password: password
        })
        .then(async (res)=> {
          if(res.status == 200) {
            await AsyncStorage.setItem("AccessToken", res.data.token);
            // AsyncStorage.setItem("AccessToken", res.data.token);
            navigation.navigate('HomeTab');
          }
        })
        .catch(err =>{
          console.error(err);
        })
      };
  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Image source={Images.LogInImage} style= {styles.image}/>
        </View>
        <View style={{height:'75%',width: '100%',position: 'relative'}}>
            <KeyboardAvoidingView>
                <View style= {styles.titleContain}>
                    <Text style= {styles.title}>Welcome</Text>
                    <Text style={styles.text}>Login to your account  </Text>
                </View>
                <Separator height={20}/>
                <View style = {styles.inputUser}>
                    <View style = {styles.user}>
                        <Feather name='user' size={25} color= {Colors.THIRD_GREEN}/>
                        <TextInput 
                            placeholder='Email  '
                            value={email} 
                            onChangeText={newText => setEmail(newText)}
                            placeholderTextColor={Colors.THIRD_GREEN} 
                            style={styles.textInput}/>
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

                <View style= {styles.ForgetPass}>
                    <Text style = {styles.TextForgetPass} onPress={() => navigation.navigate('ForgotPass')}>Forgot Password?</Text>
                </View>
                <View style= {{marginTop: 30}}>
                    {email=='' || password=='' ?(
                        <TouchableOpacity style= {styles.btLogInDisable}
                        onPress= {()=> handleUserLogin()}>
                        <Text style= {styles.textLogIn}>Login</Text>
                        </TouchableOpacity>
                    ): (
                        <TouchableOpacity style= {styles.btLogIn}
                            onPress= {()=> handleUserLogin()}>
                        <Text style= {styles.textLogIn}>Login</Text>
                        </TouchableOpacity>
                    )}        
                    <View style={styles.signupContainer}>
                        <Text style={styles.accountText}>Don't have an account?</Text>
                        <Text
                        style={styles.signupText}
                        onPress={() => navigation.navigate('SignUp')}>
                        Sign Up
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.DEFAULT_WHITE,
    position: 'absolute',
  },
  header: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode:'cover',
    position:'relative',
    flex: 1
  },
  titleContain:{
    alignItems:'center',
    justifyContent: 'center'
  },
  title: {
    fontSize:44,
    color: Colors.THIRD_GREEN,
    fontFamily: Fonts.FREDOKA_BOLD,
    marginTop:0,
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
    paddingHorizontal:15,
    fontFamily: Fonts.NOTO_REGULAR,
    maxWidth: 250,
  },
  ForgetPass:{
    alignItems:'flex-end',
    paddingHorizontal: 20
  },
  TextForgetPass:{
    fontSize: 20,
    fontFamily: Fonts.NOTO_REGULAR,
    fontWeight: 'bold',
    color: Colors.THIRD_GREEN,
  },
  btLogIn:{
    backgroundColor: Colors.THIRD_GREEN,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    // marginBottom: 50 
  },
  btLogInDisable:{
    backgroundColor: Colors.THIRD_GREY,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  textLogIn:{
    fontFamily: Fonts.NOTO_REGULAR,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.THIRD_WHITE
  },
  signupContainer:{
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 18,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.NOTO_REGULAR,
  },
  signupText: {
    fontSize: 18,
    color: Colors.THIRD_GREEN,
    fontWeight:'bold',
    fontFamily: Fonts.NOTO_REGULAR,
    marginLeft: 5,
  },
})