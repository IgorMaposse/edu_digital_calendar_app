
const fs=require('fs')
const { dirname } = require('path')

const nome_arquivo='/arquivo.txt'
const path = __dirname + `${nome_arquivo}`

 const textoPuro='Testando escrita no ficheiro'
 
  function meuLeitorDeArquivo(caminho){
    fs.readFile(caminho,'utf-8', function(error, data){
        if(error){
            console.log('erro de leitura:'+error.message)
        }else{
            console.log(data)
        }
    })
  }

   function meuEscritorDeFicheiro(caminho, texto){
        fs.writeFile(caminho, texto, function(error){
            if(error){
                console.log('erro de escrita:', error)

            }else{
                console.log('escreve com sucesso',caminho)
            }
        })
   }
   
   meuEscritorDeFicheiro(path, textoPuro)

   