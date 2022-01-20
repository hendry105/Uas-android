import React from 'react'
import { View, Text,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const As = () => {
    return (
        <ScrollView>
            <View style={{
                    alignItems:'center',backgroundColor:'#18ffff',height:900}}>
                    <View>
                        <Image 
                        source={require('../gambar/bsm.png')}
                        style={{height:100,width:200}}
                        />
                    </View>

                    <View>
                    <Image 
                        source={require('../gambar/asmaul.png')}
                        style={{height:330,width:300}}
                        />
                    </View>
            </View>
        </ScrollView>
    )
}

export default As
