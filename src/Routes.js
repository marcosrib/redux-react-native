
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContatos from './components/AdicionarContatos';
export default  props => (   
  <Router  navigationBarStyle={{ backgroundColor: '#115E54' }} >
      <Scene key = "center" >
          <Scene title="Login" titleStyle = {{ alignSelf: 'center', color: '#fff'}} key = "FormLogin" component = {FormLogin} hideNavBar={true}   />
          <Scene titleStyle = {{ alignSelf: 'center', color: '#fff'}} key = "FormCadastro" component = {FormCadastro} title="Cadastro"  hideNavBar={false}/> 
          <Scene titleStyle = {{ alignSelf: 'center'}} key = "BoasVindas" component = {BoasVindas} title="BoasVindas"  hideNavBar={true} />
          <Scene titleStyle = {{ alignSelf: 'center'}} key = "Principal" component = {Principal} title="Principal" hideNavBar={true} initial  />
          <Scene titleStyle = {{ alignSelf: 'center'}} key = "adicionarContatos" component = {AdicionarContatos} title="AdicionarContatos" hideNavBar={false}  />  
      </Scene>    
  </Router>    
  );
 