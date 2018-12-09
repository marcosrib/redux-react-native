import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';


export default props => (
    <View style={{ backgroundColor: "#115E54" , elevation: 4, marginBottom: 6 }}>
         
        <StatusBar backgroundColor = "#114D44"/>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style= {{ height: 50, justifyContent: "center" }}>
              <Text style={{color:"#fff", fontSize: 20, margin: 20}}>WhatsApp Clone</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <View style={{ justifyContent: 'center', width: 50, alignItems: 'center'}}>
                   <TouchableHighlight
                   underlayColor="#114D44"
                   onPress={ () => Actions.adicionarContatos()}>
                         <Image source={require('../imgs/adicionar-contato.png')}/>
                    </TouchableHighlight>
                </View >
                <View style={{ justifyContent: 'center' }} >
                     <Text style={{ fontSize: 20, color: '#fff'}}>Sair</Text>   
                </View>    
        </View>
        <TabBar {...props} style={{backgroundColor: "#115E54", elevation: 0}}/>    
    </View> 
    </View> 
);