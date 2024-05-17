import React from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';

/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * Fa servir routing
 * @version 1.0 23.03.2020
 */
const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%'
  },
  pantallaDetall: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
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
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  },
  noms: {
    color: '#ffffff',
    textShadowColor: '#000000',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
    fontSize: 16,
    fontWeight: 'bold',
    width: 110,
    textAlign: 'center',
    justifyContent: 'center'

  }
});

export class M06_Detalls extends React.Component {
    render() {
      return (
        <View style={estils.contenidor}>
          <Text style={estils.pantallaDetall}>
            Pantalla Detall {JSON.stringify(this.props.route.params.nom)}
          </Text>
          <Text style={estils.pantallaDetall}>
            El curs és: {JSON.stringify(this.props.route.params.curs)}
          </Text>
          <View style={estils.buttonContainer}>
            <Button 
              title="Tornar a Home" 
              onPress={() => this.props.navigation.navigate('Home')} 
              color="#ff6666"/>
          </View>
          <Text style={estils.noms}>
          Alex Maench Arnau Vicente  Adrià Milian
          </Text>
        </View>
      );
    }
}
