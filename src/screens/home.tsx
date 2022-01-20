import React from 'react'
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'

interface HomeProps {
    navigation: any;
  }
const Home = (props:HomeProps) => {
    return (
        <ScrollView>
        <View>
                <View style={{backgroundColor:'#18ffff',height:500,justifyContent:'center',alignItems:'center' }}>
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center', 
                        height:60,
                        width:350,
                        borderWidth:2,
                        borderColor:'#FFFFFF',
                        borderRadius:30,
                        marginTop:2}}>

                        <Text style={{fontSize:20,fontWeight:'bold' }}>
                        AL QURAN DIGITAL</Text>
                    </View>
                    <View style={{justifyContent:'center',
                        alignItems:'center'}}>
                        <Image 
                        source={require('../gambar/bsm.png')}
                        style={{height:100,width:200}}
                        />
                    </View>
                    <View style={{justifyContent:'center',
                        alignItems:'center', 
                        height:270,
                        width:270, 
                        borderColor:'#FFFFFF',
                        borderRadius:150,
                        marginTop:30}}>
                        <Image 
                        source={require('../gambar/logo.png')}
                        style={{width:250,height:250}}
                        />
                    </View>            
                </View>
                <View style={{flexDirection:'row',backgroundColor:'#18ffff',height:398,flexWrap:'wrap',justifyContent:'center',alignItems:'center',}}>
                <View >
                        <TouchableOpacity
                                  onPress = {() => 
                                    props.navigation.navigate('Home')
                                }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:100,
                            borderWidth:2,
                            borderColor:'#FFFFFF',
                            borderRadius:30,
                            marginTop:150,                           
                            marginLeft:18}}>

                        <Image 
                        source={require('../gambar/an.png')}
                        style={{width:60,height:60}}
                        />
                        <Text>AL QURAN</Text>
                    </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                       onPress = {() => 
                        props.navigation.navigate('As')
                    }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:100,
                            borderWidth:2,
                            borderColor:'#FFFFFF',
                            borderRadius:30,
                            marginTop:150,
                            marginLeft:10}}>

                    <Image 
                        source={require('../gambar/hus.png')}
                        style={{width:60,height:60}}
                        />
                        <Text style={{fontSize:10}}>ASMAUL HUSNA</Text>
                    </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                        onPress = {() => 
                            props.navigation.navigate('Tahlil')
                        }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:100,
                            borderWidth:2,
                            borderColor:'#FFFFFF',
                            borderRadius:30,
                            marginTop:150,
                            marginLeft:10}}>

                    <Image 
                        source={require('../gambar/dzi.png')}
                        style={{width:60,height:60}}
                        />
                        <Text>DZIKIR</Text>
                    </View>
                        </TouchableOpacity>
                    </View>

                    
                    
                    </View>

                    
                   
        </View>
        </ScrollView>
    )
}

export default Home




