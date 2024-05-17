import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';


/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * Fa servir routing
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100

  },
  ContBotones: {
    marginVertical: 10,
    width: '80%',

  },
  textoPantallaHome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', 
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 1,
  },
  button: {
    backgroundColor: '#ff6666',
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5,
  },
  botones: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
    
  },
  imagen: {
    width: 100,
    height: 100,
  }
});

export class M06_Home extends React.Component {
  render() {
    return (
      <View style={estils.contenidor}>
          <Image source={require('../../assets/img.png')}style={estils.imagen}/>
        <Text style={estils.textoPantallaHome}>React Native GP2</Text>
        <View style={estils.ContBotones}>
          <View style={estils.button}>
            <Text 
              style={estils.botones}
              onPress={() => this.props.navigation.navigate('Detall', {
                nom: 'DAW2',
                curs: '2024'
              })}
            >Anar a Detalls</Text>
          </View>
        </View>
        <View style={estils.ContBotones}>
          <View style={estils.button}>
            <Text 
              style={estils.botones}
              onPress={() => this.props.navigation.navigate('Camera')}
            >
              Anar a Camera
            </Text>
          </View>
        </View>
        <View style={estils.ContBotones}>
          <View style={estils.button}>
            <Text 
              style={estils.botones}
              onPress={() => this.props.navigation.navigate('SQLite')}
            >
              Anar a SQLite
            </Text>
          </View>
        </View>
      </View>
    );
  }
}