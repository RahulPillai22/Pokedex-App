import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Landing from './src/landing';  
import Search from './src/search';

class App extends React.Component{

  state={
    currentScreen:'Landing'
  }
  switchScreen=(currentScreen)=>{
    this.setState({currentScreen})
  }
  renderScreen=()=>{
    if(this.state.currentScreen === 'Landing'){
      return (<Landing switchScreen={this.switchScreen}/>)
    }
    else if(this.state.currentScreen === 'Search'){
      return (<Search/>)
    }
  }
  render(){

    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>

    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Platform.OS === 'android' ? 24 : 0,
    //marginBottom:10,
    backgroundColor: '#363739',
  },
});
