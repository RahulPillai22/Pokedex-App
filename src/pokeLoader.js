import React from 'react';
import {View,Image,StyleSheet,Dimensions} from 'react-native';
const {width, height} = Dimensions.get("window")
class PokeLoader extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Image
                    source={{uri: 'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif'}}
                    style={styles.img}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img:{
        alignSelf:'center',
        height:250,
        width:250,
        marginTop:height/3,
    }
})

export default PokeLoader
