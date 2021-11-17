//task1
//Dado o comando (uma *string*):
//create table author (id number, name string, age number, city string, state string, country string)
//1. Extraia o nome da tabela e armazene em uma variável chamada **tableName.**
//2. Extraia as colunas da tabela e armazene em uma variável chamada **columns.**
//3. Manipule a variável **columns**, separando cada coluna com seu respectivo tipo, em uma string separada.

let text = 'create table author (id number, name string, age number, city string, state string, country string)';

const regex = /(author) \((.+)\)/;
const result = regex.exec(text);

const tableName = result[1];
console.log(tableName)

const columns = result[2].split(',')
console.log(columns)

//task2
// 1. Crie um objeto chamado **database**.
// 2. Dentro do objeto **database**, crie um objeto chamado **tables**.
// 3. Dentro do objeto **tables**, crie um objeto com o nome da tabela.
// 4. Dentro do objeto criado com o nome da tabela, crie um objeto chamado **columns**.
// 5. Dentro do objeto criado com nome da tabela, crie um array chamado **data**.
// 6. Exiba o conteúdo do objeto **database** utilizando *JSON.stringify*

let database = {
  tables: {
    tables:tableName
    
  }
}

console.log(database)
