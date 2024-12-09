import React from 'react';
import {View,Text,Dimensions,Keyboard} from 'react-native';//,Image,Dimensions,StyleSheet,ImageBackground
import {Button,Searchbar} from 'react-native-paper';//Appbar,TextInput,
import PokeLoader from './pokeLoader';
import SearchBody from './searchBody';

const {width, height} = Dimensions.get("window")
class Search extends React.Component{
    state={
        pokeSearch:'',
        onCall: true,
        data:{},
    }
    searchPoke=()=>{
        
        Keyboard.dismiss()
        this.setState({onCall:true})
        var self = this;
        if(this.state.pokeSearch){
        fetch('https://pokeapi.co/api/v2/pokemon/'+this.state.pokeSearch.toLowerCase()).then(data=>data.json()).then(data2=>{
         console.log(data2)
         self.setState({data:data2})//we are using self instead of 'this' becasue indside fetch 'this'
         //does not have access so we set self to 'this' outside fetch and use self here
         self.setState({onCall:false})
        })
        .catch(function(error){
            alert('Invalid name or ID entered, please try again.')
        })}
        else{
            alert('Please enter the name or ID of a Pokémon.')
        }

    }
    renderBody=()=>{
        if(this.state.onCall){
            return(
                <PokeLoader/>
            )
        }
        else{
            return(
                <SearchBody data1={this.state.data}/>
            )
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Searchbar style={{backgroundColor:'#ea0037',marginTop:26}} iconColor='#fff'
                inputStyle={{color:'#fff'}}
                placeholder='Enter Pokémon name or ID'
                placeholderTextColor='#fff'
                value={this.state.pokeSearch}
                onChangeText={pokeSearch=> this.setState({pokeSearch})}
                onIconPress={this.searchPoke}
                onSubmitEditing={this.searchPoke}
                />
                {this.renderBody()}
            </View>
      
        )
    }
}

export default Search; 