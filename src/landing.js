import React from 'react';
import {View,Text,Image,Dimensions,StyleSheet,ImageBackground} from 'react-native';
import {Button } from 'react-native-paper';
var myBackground = require('../assets/landing.png')
const {width, height} = Dimensions.get("window")

class Landing extends React.Component{
    render(){ 
        return(
            <View style={styles.container}>
                <ImageBackground style={{ height:height,width:width}} source={myBackground}>
                    <View style={styles.viewStyle}>
                        <Button style={styles.buttonStyle} color='#000' mode="contained" onPress={()=>this.props.switchScreen('Search')}>Begin
                        </Button>
                    </View>
                    </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      flexDirection:'column',
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 26 : 0,
        backgroundColor: '#ea0037',
        resizeMode:'stretch'
      },
    buttonStyle:{
      marginBottom:-50,
      padding:4,
      borderRadius:10,
      width:100,
    }
  });
  
  export default Landing;