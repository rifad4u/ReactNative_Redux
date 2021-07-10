import React , {Component} from 'react'
import {View , Text , StyleSheet , StatusBar , TextInput, TouchableOpacity,KeyboardAvoidingView, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationEvents } from 'react-navigation';
import { storePassword } from '../Redux/Actions/PasswordAction';
import { storeUsername } from '../Redux/Actions/UserNameAction';
import { connect } from 'react-redux';

class LoginScreen extends React.Component{
    state={
        username:'',
        password:''
    }

    handleLogin=()=>{
        const {username,password}=this.state;
        if(username !='' && password !=''){
            this.props.storeUsername(username)
            this.props.storePassword(password)
            this.props.navigation.navigate('Home')
        }
    }
  render(){
    return(
      <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled">
          <NavigationEvents 
          onWillFocus={()=>{this.setState({username :'' , password : ''})}}/>
      <View style={styles.MAIN_CONTAINER}>
        <StatusBar
          backgroundColor='#000000' />
        <TextInput
          placeholder="Enter Your Email"
          onChangeText={(text)=>{this.setState({username : text})}}
          placeholderTextColor="#ffffff"
          value={this.state.username}
          style={styles.INPUT_BOX}
        />
        <View style={{height:20}}/>
        <TextInput
          placeholder="Enter Your Password"
          onChangeText={(text)=>{this.setState({password : text})}}
          placeholderTextColor="#ffffff"
          style={styles.INPUT_BOX}
          value={this.state.password}
        />
        <View style={{height:20}}/>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#b92b27', '#1565C0']} 
        style={styles.BUTTON}>
          <TouchableOpacity activeOpacity={.7} onPress={this.handleLogin}>
            <Text style={styles.BUTTON_TEXT}> Submit </Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
      </ScrollView>
    )
  }
}

const styles=StyleSheet.create({
  MAIN_CONTAINER :{ 
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#184054'
  },
  INPUT_BOX:{
    borderWidth:1,
    borderRadius:10,
    width:'60%',
    textAlign:'center'
  },
  BUTTON:{
    width:'40%',
    height:28,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  BUTTON_TEXT:{
    fontWeight:'bold',
    fontSize:18
  }
})
const mapDispatchToProps = (dispatch) => {
    return{
      storeUsername :(username)=>{ dispatch(storeUsername(username)) },
      storePassword :(password)=>{ dispatch(storePassword(password)) }
    }
}
export default connect(null , mapDispatchToProps)(LoginScreen);