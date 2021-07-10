import React , {Component} from 'react'
import {View , Text , StyleSheet , StatusBar , TextInput, TouchableOpacity,KeyboardAvoidingView, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';


class HomeScreen extends React.Component{

  render(){
    return(
      <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled">
      <View style={styles.MAIN_CONTAINER}>
        <StatusBar
          backgroundColor='#000000' />
        <Text style={{fontWeight:'bold' , fontSize: 25 , color :'green'}}>
            Welcome
        </Text>
        <Text>{this.props.userName}</Text>
        <Text>{this.props.passWord}</Text>

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
const mapStateToProps=({ userNameStore , passWordStore })=>{
    return{
        userName : userNameStore.name ,
        passWord : passWordStore.passWord
    }
}

export default connect(mapStateToProps,null)(HomeScreen);