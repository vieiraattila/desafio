// Importar o pacote
import csvToJson from 'convert-csv-to-json'

// Nome do arquivo de entrada e saída
let fileInputName = './arquivo.csv'; 
let fileOutputName = './arquivo.json';

// Função CSV to JSon
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);