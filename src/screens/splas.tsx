import { StackActions } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { View, Text,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



interface SplashProps {
    navigation: any;
  }

const Splash = (props:SplashProps) => {
    useEffect(()=> {
        setTimeout(() => {
             props.navigation.dispatch(StackActions.replace('Awal'))
        }, 3000)
    })
    return (
        <ScrollView>
        <View style={{justifyContent:'center',alignItems:'center',height:680,backgroundColor:'#43E353'}}>
            <View style={{justifyContent:'center',alignItems:'center',
                height:250,
                width: 250,
                borderWidth:5,
                backgroundColor:'#FFFFFF',
                borderColor:'black',
                borderRadius:120}}>           
            <Image source={require('../gambar/qr.png')}
            style={{
                width:200,
                height:200,
                }}></Image>
            </View>
        </View>
        </ScrollView>
    );
};

export default Splash;