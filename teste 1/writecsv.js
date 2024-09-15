// Importar os pacotes
import { convertArrayToCSV } from 'convert-array-to-csv'
import fs from 'fs'
 
// Criação do array
const header = ['number', 'first', 'last', 'telephone number'];

// Adição de dados no array
const dataArrays = [
  [1, 'Attila', 'Vieira', '21980539850'],
  [2, 'Ana Luiza', 'Mastbaum', '21999999999'],
  [3, 'Enzo', 'Vieira', '21988888888'],
];

// Função Array to CSV
const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, {
    header,
    separator: ','
  });

// Função criar arquivo
  fs.writeFile('arquivo.csv', csvFromArrayOfArrays, err => {
    if (err) {
        console.log(18, err);
    }
    console.log('Arquivo CSV salvo com sucesso!')
  })