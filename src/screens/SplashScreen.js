import { View, Text, StatusBar, Image,StyleSheet } from 'react-native'
import React,{useEffect} from 'react';
import { Colors ,Images,Fonts} from "../contants"
const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('SignIn');
    },5000);
  },[]);
  return (
    <View style = {styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
      <Image source={Images.Logo} resizeMode = 'contain' style = {styles.Image} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.DEFAULT_WHITE,
      paddingBottom: 70,
      paddingTop: 70
    },
    Image: {
      height: 500,
      width: 500,
    },
})
export default SplashScreen