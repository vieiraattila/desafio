// Importar os pacotes
import { consultarCep } from 'correios-brasil';
import fs from 'fs';

// Declaração da variável de pesquisa
const cep = '22230000';

// Função CEP Correios
consultarCep(cep).then(response => {
    var json = JSON.stringify(response);

    // Função criar arquivos
    fs.writeFile('arquivo.json', json, (err) => {
        if (err){
            console.log(err);
        }
        else {
            console.log("O arquivo foi salvo.");
        }
    }); 
  });