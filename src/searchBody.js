import React from 'react';
import {ScrollView,Text,StyleSheet,View,Image,Dimensions, ImageBackground} from 'react-native';
import {ListItem,List} from 'native-base';
const {width, height} = Dimensions.get("window")
var searchBackground = require('../assets/back.png')
class SearchBody extends React.Component{
    render(){
        var pokemon = this.props.data1;
        if(!pokemon){
            return <View/>
        }

        return(
            <ImageBackground style={styles.backgroundImage} 
            source={searchBackground}>
                <ScrollView style={{flex:1}}>
                    <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image 
                            source={{uri: pokemon.sprites.front_default}}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.info}>
                        <ListItem itemDivider>
                            <Text style={{fontWeight:'bold'}}>Size</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{color:'#fff'}}>Weight - {pokemon.weight/10}kg</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{color:'#fff'}}>Height - {pokemon.height/10}m</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{fontWeight:'bold'}}>Abilities</Text>
                        </ListItem>
                        <List
                            dataArray={pokemon.abilities}
                            renderRow={(item)=>
                                <ListItem>
                                    <Text style={{color:'#fff'}}>{item.ability.name}</Text>
                                </ListItem>
                            }
                        >
                        </List>

                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
        height:height,
        width:width,    
    },
    header:{
        fontSize:30,
        color:'white',
        textAlign:'center',
        fontWeight:'bold',

    },
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
     img:{
        height:200,
        width:200,
        justifyContent:'center',
        alignItems:'center',
    },
    info:{
        flex:1,
        backgroundColor:'#363739',
        opacity:0.8,
    }
})


export default SearchBody