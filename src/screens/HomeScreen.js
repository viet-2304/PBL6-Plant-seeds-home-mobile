import { StyleSheet, Text, View,ScrollView, FlatList,StatusBar ,TouchableOpacity,Image,TextInput} from 'react-native'
import React,{useState, useEffect} from 'react'
import { Colors,Images,Fonts ,plants} from '../contants'
import { Separator,Card } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { category, getCurrentUser, getplants } from '../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = ({navigation}) => {
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const [data,setData] = useState([]);
    const [plant,setPlants] = useState([]);
    const [token,setToken] = useState('');

    useEffect(()=> {
        category()
        .then(res =>{
            //lay category
            setData(res.data);
        })
        .catch(err=>{
            console.error(err);
        });

        getplants()
        .then(res=> {
            //lay danh sach product
            setPlants(res.data);
        })
        .catch(err=>{
            console.error(err);
        });

    },[]);

    useEffect(()=>{
        if(token == ''){
            getToken();
        }
        else{
            getCurrentUser(token)
            .then(async (res) =>{
                //luu userId
                await AsyncStorage.setItem('userID',res.data.id)
            })
            .catch(err =>{
                console.error(err);
            })
        }
    },[token]);

    //lay token
    const getToken = async () =>{
        const value = await AsyncStorage.getItem('AccessToken');
        if (value !== null) {
            // We have data!!
            setToken(value);
        }
    };
  return (
    <View style = {styles.container}>
        <StatusBar barStyle='light-content' 
            backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
        <Separator height={20}/>
        <View style= {styles.header}>
            <View style= {styles.titleContain}>
                <Image source={Images.Logo_home} style= {styles.Image}/>
                <Ionicons name='notifications-outline' size={32} style = {{position:'absolute', right:10, color: Colors.THIRD_GREEN}}/>
                
            </View>
            <View style={styles.search}>
                <View style = {styles.SearchContain}>
                    <Ionicons name='search' size={30} color= {Colors.THIRD_GREEN}/>
                    <TextInput 
                        placeholder='Tìm kiếm ' 
                        placeholderTextColor={Colors.THIRD_GREEN}
                        style= {styles.SearchTextInput}/>
                </View>
            </View>
            <View style={styles.categoryContainer}>
                {data?.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setCategoryIndex(index)}>
                        <Text
                        style={[
                            styles.categoryText,
                            catergoryIndex === index && styles.categoryTextSelected,
                        ]}>
                        {item.name.toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        
            <FlatList
                marginHorizontal = {15}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={true}
                numColumns={2}
                data={plant}
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
        alignItems: 'center'
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 5
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