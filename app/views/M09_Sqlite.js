import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

const estils = StyleSheet.create({
  textPeu: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#FA0'
  },
  guerra:{
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#FA0',
    marginBottom: 15,
  },
  guerras:{
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,

  },
  peu: {
    paddingTop: 10,
    paddingBottom: 10,

  },
});

export class M09_Sqlite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
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
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Hola,1234']);
      tx.executeSql("insert into items (done, value) values (1, ?)", ['Hola,1235']);


    });

    console.log('creada taula');

    db.transaction(
      tx => {
        tx.executeSql("select * from items where value in (?, ?, ?, ?)", ['Day d, 1945', 'Stalingrado, 1400', 'Hola,1234','Hola,1235'], (_, { rows }) => {
          const items = rows._array;
          this.setState({ items });
        });
      }
    );
  }

  render() {
    return (
      <View style={estils.peu}>
        <Text style={estils.guerra}> Guerras </Text>
        {this.state.items.map((item, index) => (
          <Text style={estils.guerras} key={index}>{item.value}</Text>
        ))}
      </View>
    );
  }
}
