import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from "./database";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "word" : '',
      "definition": '',
      "lexicalCategory" : '',

    }
  }
  getWord=(text)=>{ 
    var text = text.toLowerCase() 
    try{
    var word = dictionary[text] ["word"] 
    var lexicalCategory = dictionary[text] ["lexicalCategory"] 
    var definition = dictionary[text] ["definition"] 
    this.setState ({ 
    "word" : word, "lexicalCategory" : lexicalCategory, 
    "definition" : definition 
    })
    }
    catch (err) { 
    alert ("Sorry, this word is not available for now") 
    this.setState ({ 
    'text':'', 
    'isSearchPressed':false
    })
    }
    }
  render() {
    return (
      <View style = {styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          word : {" "}
          </Text>
      <TextInput
        style = {styles.inputBox}
      onChangeText = {text=> {
        this.setState({
          text: text,
          isSearchedPressed: false,
          word: "Loading...",
          lexicalCategory:'',
          examples: [],
          definition: ""
        });
      }}
      value = {this.state.text}
    />

<Text style={{fontSize:18}}>
             Type: {this.state.lexicalCategory}
        </Text>

        <Text style={{fontSize:18}}>
             Definition: {this.state.definition}
        </Text>

<TouchableOpacity 
  style={styles.searchButton}
  onPress = {()=> {
    this.setState({isSearchedPressed: true});
    this.getWord(this.state.text)
  }}>
    <Text>   Search </Text>
</TouchableOpacity>

</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  searchButton: {
    backgroundColor: 'red',
    width: 70,
    height: 40,
    alignSelf: 'center',
  }
});