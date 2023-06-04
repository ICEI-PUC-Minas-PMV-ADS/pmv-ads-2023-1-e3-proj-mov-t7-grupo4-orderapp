import * as SQLite from 'expo-sqlite';

export const Database = {
  getConnection: () => {
    const db = SQLite.openDatabase('ohchefia.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists mesas (id integer primary key not null, nummesa int not null);'
      );
    });

    db.transaction((tx) => {
      tx.executeSql('create table if not exists pedidos (id integer primary key not null, nummesa int not null, itemMesa text not null, preco real not null, quantidade int not null, status text);'
      );
    });

    db.transaction((tx) => {
      tx.executeSql('create table if not exists itens (id integer primary key not null, nomeItem text not null, categoria text not null, preco real not null);'
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists garcom (id integer primary key not null, nome varchar(10) not null, email varchar(30) not null, senha varchar(20) not null);'
        );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;