const readline = require('readline'); // Faz a importação do módulo 'readline' para permitir a interação com o terminal via entrada e saída.

const question = question => { // Define uma função 'question' para fazer perguntas ao usuário.
  const rl = readline.createInterface({ // Cria a interface de leitura e escrita, permitindo a interação com o terminal.
    input: process.stdin, // Define a entrada padrão do terminal (teclado).
    output: process.stdout // Define a saída padrão do terminal (tela).
  });

  return new Promise(resolve => { // Retorna uma Promise que resolve quando o usuário responde à pergunta.
    rl.question(question, answer => { // Faz a pergunta e aguarda a resposta do usuário.
      rl.close(); // Fecha a interface de leitura após receber a resposta.
      return resolve(answer); // Resolve a Promise com a resposta obtida.
    });
  });
};

// Lista de Tarefas e Próximo ID
let listaTarefas = []; // Declara um array vazio para armazenar as tarefas.
let proximoId = 0; // Variável para armazenar o próximo ID disponível para as tarefas.
const LIMITE_DESCRICAO = 100; // Define o limite máximo de caracteres para a descrição das tarefas.

