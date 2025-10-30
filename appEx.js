//Estrutura base com o Express -

const express = require('express');// Importação do express
const app = express()


 //O método .get busca todas as informações da rota

app.get("/" , function(req , res){   // O "/" acessa a principal rota
    res.send('Seja bem vindo!')
});

app.get("/artigos/" , function(req,res){  // Selecionando parâmetros
   res.send("Testando o Nodemon")            // Nodemon - É uma biblioteca do Node p/ atualizar automaticamente as alterações do servidor.  
    // Para roda-lo digite nodemon (nome do arqv).js no terminal.
});

app.get("/contato" , function(req,res){    
    res.send("Deixe um comentário")
})

app.listen(8075,function(){   // O listen lê a porta
    console.log('O servidor está rodando')
});

