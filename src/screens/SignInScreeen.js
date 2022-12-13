import { StyleSheet,Image , Text, View,StatusBar,TextInput ,TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'
import { Colors ,Images,Fonts} from "../contants"
import { Separator } from '../components'
import Feather from 'react-native-vector-icons/Feather'

const SignInScreeen = ({navigation}) => {
  const [isPasswordShow,setPwShow] = useState(false);
  return (
      <View style = {styles.container}>
        <StatusBar barStyle='light-content' 
            backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
        
        <Separator height={20} />
        <View style = {styles.headercontainer}>
          <View style = {styles.header}>
            <Image source={Images.LogInImage} style= {styles.image}/>
          </View>
        </View>
        <View style= {styles.Content}>
          <View style= {styles.titleContain}>
            <Text style= {styles.title}>Welcome</Text>
            <Text style={styles.text}>Login to your account  </Text>
          </View>
          <Separator height={20}/>
          <View style = {styles.inputUser}>
            <View style = {styles.user}>
              <Feather name='user' size={25} color= {Colors.THIRD_GREEN}/>
              <TextInput 
                placeholder='Username ' 
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
        </View>
        
        <View flex = {1}>
          <TouchableOpacity style= {styles.btLogIn}
          onPress= {()=> navigation.navigate('HomeTab')}>
            <Text style= {styles.textLogIn}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </View>
        </View>
        
      </View>
  );
}

export default SignInScreeen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  Text: {
    fontSize: 32,
    color: Colors.THIRD_GREEN,
    fontFamily: Fonts.FREDOKA_BOLD,
  },
  headercontainer:{
    flex: 1,
  },
  header:{
    flexDirection:'column',
    height: 250
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode:'cover',
    // borderBottomRightRadius: 200,
    // borderBottomLeftRadius: 0,
    position:'relative',
    flex: 1
  },
  icon:{
    marginTop: 30,
    marginLeft: 20,
    color: Colors.THIRD_WHITE,
    position:'absolute'
  },
  Content:{
    flex :2,
    justifyContent:'center',
    paddingBottom:50
  },
  titleContain:{
    alignItems:'center',
    justifyContent: 'center'
  },
  title: {
    fontSize:44,
    color: Colors.THIRD_GREEN,
    fontFamily: Fonts.FREDOKA_BOLD,
    marginTop:50,
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