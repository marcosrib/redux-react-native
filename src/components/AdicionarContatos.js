import React from 'react';
import { View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
const AdicionarContato = props => (
    <View style={{ flex: 1, justifyContent: 'center', margin: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>     
            <TextInput 
            placeholder = 'E-mail'
            style={{ fontSize: 20}}
            onChange={() => false}
            value={props.adiciona_contato_email}       
       />
       </View>
       <View style={{ flex: 1 }}>
            <Button title="Adicionar" color= "#115E54" onPress={() => false}/>
       </View>    
    </View>

);
const mapStateToProps = state => (
   {
    adiciona_contato_email: state.AppReducer.adiciona_contato_email
   }
)

export default connect(mapStateToProps, null)(AdicionarContato);