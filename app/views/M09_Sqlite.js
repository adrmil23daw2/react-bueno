import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  listItem: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  textBotons: {
    textAlign: 'center',
  },
});

export class M09_Sqlite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    db = SQLite.openDatabase("daw2.db");

    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
      tx.executeSql("delete from items");
      tx.executeSql("insert into items (done, value) values (0, ?)", ['Day d, 1945']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Stalingrado, 1400']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Guerras dels Balcans, 1912']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Primera Guerra Mundial, 1914']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Segona Guerra Mundial, 1939']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Guerra de Vietnam, 1955']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Guerra de Corea, 1950']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ["Guerra d'Independència dels Estats Units, 1775"]);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Guerra dels Six Dies, 1967']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Guerra Civil Espanyola, 1936']);
    });

    console.log('Taula creada i dades inserides');

    db.transaction(
      tx => {
        tx.executeSql("select * from items where value like ?", ['%Guerra%'], (_, { rows }) => {
          const items = rows._array;
          this.setState({ items });
        });
      }
    );

    this.detallsGuerra = {
      "Day d, 1945": {
        name: "Day d, 1945",
        description: "Batalla decisiva que va marcar la fi de la Segona Guerra Mundial.",
      },
      "Stalingrado, 1400": {
        name: "Stalingrado, 1400",
        description: "Famosa batalla a la Segona Guerra Mundial que va canviar el curs del conflicte.",
      },
      "Guerras dels Balcans, 1912": {
        name: "Guerras dels Balcans, 1912",
        description: "Conflictes bèl·lics ocorreguts a la regió dels Balcans a principis del segle XX.",
      },
      "Primera Guerra Mundial, 1914": {
        name: "Primera Guerra Mundial, 1914",
        description: "Gran conflicte global que va involucrar les principals potències del món entre 1914 i 1918.",
      },
      "Segona Guerra Mundial, 1939": {
        name: "Segona Guerra Mundial, 1939",
        description: "Conflicte global que va tenir lloc entre 1939 i 1945, involucrant la majoria de les nacions del món.",
      },
      "Guerra de Vietnam, 1955": {
        name: "Guerra de Vietnam, 1955",
        description: "Conflicte bèl·lic que va tenir lloc a Vietnam, Laos i Cambodja entre 1955 i 1975.",
      },
      "Guerra de Corea, 1950": {
        name: "Guerra de Corea, 1950",
        description: "Conflicte bèl·lic que va enfrontar Corea del Nord i Corea del Sud entre 1950 i 1953.",
      },
      "Guerra d'Independència dels Estats Units, 1775": {
        name: "Guerra d'Independència dels Estats Units, 1775",
        description: "Conflicte que va portar a la independència de les Tretze Colònies britàniques a Amèrica del Nord.",
      },
      "Guerra dels Six Dies, 1967": {
        name: "Guerra dels Six Dies, 1967",
        description: "Conflicte bèl·lic entre Israel i una coalició àrab el 1967.",
      },
      "Guerra Civil Espanyola, 1936": {
        name: "Guerra Civil Espanyola, 1936",
        description: "Conflicte bèl·lic ocorregut a Espanya entre 1936 i 1939.",
      },
    };
  }

  handleClick = (item) => {
    const detallsGuerra = this.detallsGuerra[item.value];
    Alert.alert(
      'Informació de la guerra',
      `Nom: ${detallsGuerra.name}\nDescripció: ${detallsGuerra.description}`,
      [{ text: 'D\'acord' }]
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Guerres </Text>
        {this.state.items.map((item, index) => (
          <TouchableHighlight
            key={index}
            underlayColor="#ddd"
            onPress={() => this.handleClick(item)}
            style={styles.listItem}
          >
            <Text style={styles.textBotons}>{item.value}</Text>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}