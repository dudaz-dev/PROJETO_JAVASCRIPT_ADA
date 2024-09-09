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

function gerarProximoId() { // Função que gera um novo ID para cada tarefa.
  proximoId = (proximoId + 1) % 10000; // Incrementa o ID em 1 e garante que ele nunca ultrapasse 9999.
  return String(proximoId).padStart(4, '0'); // Retorna o ID como uma string de 4 dígitos, preenchendo com zeros à esquerda se necessário.
}

function validarDescricao(descricao) { // Função que valida o comprimento da descrição de uma tarefa.
  if (descricao.length > LIMITE_DESCRICAO) { // Verifica se a descrição excede o limite de caracteres.
    throw new Error(`A descrição deve ter no máximo ${LIMITE_DESCRICAO} caracteres.`); // Lança um erro caso a descrição seja muito longa.
  }
}

function adicionarTarefa(descricaoTarefa) { // Função para adicionar uma nova tarefa.
  try {
    validarDescricao(descricaoTarefa); // Valida a descrição da tarefa antes de adicionar.
    const tarefaDuplicada = listaTarefas.find(tarefa => tarefa.descricao === descricaoTarefa); // Verifica se já existe uma tarefa com a mesma descrição.
    if (tarefaDuplicada) { // Se uma tarefa duplicada for encontrada, exibe uma mensagem de aviso.
      console.log(`A tarefa "${descricaoTarefa}" já existe com o ID: ${tarefaDuplicada.id}. Por favor, insira uma nova descrição.`);
      return; // Sai da função sem adicionar a tarefa duplicada.
    }
    const novaTarefa = { // Cria um objeto representando a nova tarefa.
      id: gerarProximoId(), // Gera um ID único para a nova tarefa.
      descricao: descricaoTarefa // Atribui a descrição fornecida à tarefa.
    };
    listaTarefas.push(novaTarefa); // Adiciona a nova tarefa ao array de tarefas.
    console.log(`Tarefa adicionada com ID: ${novaTarefa.id}`); // Exibe uma mensagem informando que a tarefa foi adicionada com sucesso.
  } catch (error) {
    tratarErroAdicionarTarefa(error); // Trata qualquer erro que ocorra ao adicionar a tarefa.
  }
}


function editarTarefa(numeroId, novaDescricao) {
  try {
    validarDescricao(novaDescricao);
    const tarefaEncontrada = listaTarefas.find(tarefa => tarefa.id === numeroId);
    if (tarefaEncontrada) {
      const descricaoDuplicada = listaTarefas.some(
        tarefa => tarefa.descricao === novaDescricao && tarefa.id !== numeroId
      );
      if (descricaoDuplicada) {
        console.log(`A nova descrição "${novaDescricao}" já está em uso por outra tarefa.`);
        return;
      }
      tarefaEncontrada.descricao = novaDescricao;
      console.log(`Tarefa com ID ${numeroId} foi editada com sucesso.`);
    } else {
      console.log(`Tarefa com ID ${numeroId} não foi encontrada.`);
    }
  } catch (error) {
    tratarErroEditarTarefa(error);
  }
}

async function exibirMenu() {
  let opcaoEscolhida;
  do {
    try {
      console.log(`
     
      ╔═════════════════════════════════════╗
      ║             TO-DO-LIST              ║
      ║-------------------------------------║
      ║      1. Adicionar Tarefa            ║
      ║      2. Editar Tarefa               ║
      ║      3. Remover Tarefa              ║
      ║      4. Listar Tarefas              ║
      ║      5. Obter Tarefa por ID         ║
      ║      6. Sair                        ║
      ║-------------------------------------║
      ║-----Digite o número da sua opção----║
      ╚═════════════════════════════════════╝
      
          `);

      opcaoEscolhida = await question('Escolha uma opção: '); // Aguarda a escolha do usuário.

      switch (opcaoEscolhida) { // Executa uma ação com base na opção escolhida.
        case '1': // Adicionar tarefa.
          try {
            const descricaoTarefa = await question(`Digite a descrição para a tarefa (máximo ${LIMITE_DESCRICAO} caracteres): `);
            adicionarTarefa(descricaoTarefa); // Chama a função para adicionar a tarefa.
          } catch (error) {
            tratarErroAdicionarTarefa(error); // Trata erros ao adicionar a tarefa.
          }
          break;
          
          
        case '2':
          try {
            const idTarefaEditar = await question(`Digite o ID da tarefa a ser editada: `);
            const tarefaEncontrada = listaTarefas.find(tarefa => tarefa.id === idTarefaEditar);

            if (tarefaEncontrada) {
              const novaDescricao = await question(`Digite a nova descrição da tarefa (máximo ${LIMITE_DESCRICAO} caracteres): `);
              editarTarefa(idTarefaEditar, novaDescricao);
            } else {
              console.log(`Tarefa com ID ${idTarefaEditar} não foi encontrada.`);
            }
          } catch (error) {
            tratarErroEditarTarefa(error);
          }
          break;

        case '3': // Remover tarefa.
          try {
            const idTarefaRemover = await question(`Digite o ID da tarefa a ser removida: `); // Obtém o ID da tarefa a ser removida.
            const indiceTarefa = listaTarefas.findIndex(tarefa => tarefa.id === idTarefaRemover); // Encontra o índice da tarefa no array.
            if (indiceTarefa !== -1) { // Se a tarefa for encontrada, remove-a.
              listaTarefas.splice(indiceTarefa, 1);
              console.log(`Tarefa com ID ${idTarefaRemover} removida.`);
            } else {
              console.log(`Tarefa com ID ${idTarefaRemover} não encontrada.`);
            }
          } catch (error) {
            tratarErroRemoverTarefa(error); // Trata erros ao remover a tarefa.
          }
          break;

        case '4': // Listar tarefas.
          try {
            console.log(`4. Segue a lista de tarefas cadastradas: \n`);
            listaTarefas.forEach(tarefa => { // Itera sobre o array de tarefas e exibe cada uma.
              console.log(`ID: ${tarefa.id} - Descrição: ${tarefa.descricao}`);
            });
          } catch (error) {
            tratarErroListarTarefas(error); // Trata erros ao listar tarefas.
          }
          break;

        case '5': // Obter tarefa por ID.
          try {
            const idTarefaBuscar = await question(`Digite o ID da tarefa a ser obtida: `); // Obtém o ID da tarefa a ser buscada.
            const tarefaEncontrada = listaTarefas.find(tarefa => tarefa.id === idTarefaBuscar); // Procura a tarefa no array.
            if (tarefaEncontrada) {
              console.log(`Tarefa encontrada: ID: ${tarefaEncontrada.id} - Descrição: ${tarefaEncontrada.descricao}\n`);
            } else {
              console.log(`Tarefa não encontrada.\n`);
            }
          } catch (error) {
            tratarErroBuscarTarefa(error); // Trata erros ao buscar a tarefa.
          }
          break;

        case '6': // Sair do programa.
          console.log('Saindo...\n');
          break;

        default: // Caso a opção fornecida seja inválida.
          console.log('Resposta incorreta, por favor insira um valor da tabela.\n');
          break;
      }
    } catch (error) {
      console.error('Erro inesperado:', error); // Exibe um erro inesperado.
    } finally {
      console.log('Operação concluída.'); // Exibe uma mensagem após cada operação.
    }
  } while (opcaoEscolhida !== '6'); // Continua exibindo o menu até que o usuário escolha a opção de sair.
}
