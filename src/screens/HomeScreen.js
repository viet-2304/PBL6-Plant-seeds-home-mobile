import { StyleSheet, Text, View,ScrollView, FlatList,StatusBar ,TouchableOpacity,Image,TextInput} from 'react-native'
import React,{useState} from 'react'
import { Colors,Images,Fonts ,plants} from '../contants'
import { Separator,Card } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


const HomeScreen = ({navigation}) => {
    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  return (
    <View style = {styles.container}>
        <StatusBar barStyle='light-content' 
            backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
        <Separator height={40}/>
        <View style= {styles.header}>
            <View style= {styles.titleContain}>
                <Image source={Images.Logo_home} style= {styles.Image}/>
                <Ionicons name='notifications-outline' size={32} style = {{position:'absolute', right:10, color: Colors.THIRD_GREEN}}/>
                
            </View>
            <View style={styles.search}>
                <View style = {styles.SearchContain}>
                    <Ionicons name='search' size={30} color= {Colors.THIRD_GREEN}/>
                    <TextInput 
                        placeholder='Search' 
                        placeholderTextColor={Colors.THIRD_GREEN}
                        alignItems = 'center'
                        style= {styles.SearchTextInput}/>
                </View>
            </View>
            <View style={styles.categoryContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setCategoryIndex(index)}>
                        <Text
                        style={[
                            styles.categoryText,
                            catergoryIndex === index && styles.categoryTextSelected,
                        ]}>
                        {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        
            <FlatList
                marginHorizontal = {15}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={true}
                numColumns={2}
                data={plants}
                renderItem={({item}) => {
                  return <Card plant={item} navigation = {navigation} />;
                }}
                >
            </FlatList>
            
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    header:{
        justifyContent:'space-evenly',
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
    alert:{
        backgroundColor: Colors.DEFAULT_YELLOW,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 25,
        position: 'absolute',
        right: -5,
        top: -2,
    },
    cart:{
        backgroundColor: Colors.DEFAULT_YELLOW,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 25,
        position: 'absolute',
        right: 45,
        top: -2,
    },
    search:{
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 15,
    },
    SearchContain:{
        backgroundColor: Colors.DEFAULT_WHITE,
        height: 45,
        width: 370,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: Colors.THIRD_GREEN,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SearchTextInput:{
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: Fonts.POPPINS_LIGHT,
        color: Colors.THIRD_GREEN,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 18, 
        color: Colors.THIRD_GREY,
        fontWeight: 'bold',
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    categoryTextSelected: {
        color: Colors.THIRD_GREEN,
        paddingBottom: 5,
        borderBottomWidth: 2,
    },
    
})