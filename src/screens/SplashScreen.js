import { View, Text, StatusBar, Image,StyleSheet } from 'react-native'
import React,{useEffect} from 'react';
import { Colors ,Images,Fonts} from "../contants"
const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('SignIn');
    },3000);
  },[]);
  return (
    <View style = {styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
      <Image source={Images.Logo} resizeMode = 'contain' style = {styles.Image} />
      <Text style = {styles.Text}>PLANT SEEDS APP</Text>
      <Text style= {styles.text}>Make your world greener</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.DEFAULT_WHITE,
      paddingBottom: 70
    },
    Image: {
      height: 200,
      width: 200,
    },
    Text: {
      fontSize: 40,
      color: Colors.THIRD_GREEN,
      // fontWeight: '700',
      fontFamily: Fonts.FREDOKA_BOLD,
    },
    text:{
      fontSize: 22,
      fontFamily: Fonts.FREDOKA_REGULAR,
    }
})
export default SplashScreen