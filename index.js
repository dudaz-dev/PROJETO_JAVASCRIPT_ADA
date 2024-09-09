// Importação de Módulo e Configuração de Interface de Leitura
const readline = require('readline'); 

const question = question => { 
  const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => { 
    rl.question(question, answer => { 
      rl.close(); 
      return resolve(answer); 
    });
  });
};

// Declaração de Variáveis Globais e Constantes
let listaTarefas = [];
let proximoId = 0;
const LIMITE_DESCRICAO = 100;

// Funções para Gerenciamento de Tarefas
function gerarProximoId() {
  proximoId = (proximoId + 1) % 10000;
  return String(proximoId).padStart(4, '0');
}

function validarDescricao(descricao) {
  if (descricao.length > LIMITE_DESCRICAO) { 
    throw new Error(`A descrição deve ter no máximo ${LIMITE_DESCRICAO} caracteres.`);
  }
}

// Funções Principais
function adicionarTarefa(descricaoTarefa) {
  try {
    validarDescricao(descricaoTarefa);
    const tarefaDuplicada = listaTarefas.find(tarefa => tarefa.descricao === descricaoTarefa);
    if (tarefaDuplicada) {
      console.log(`A tarefa "${descricaoTarefa}" já existe com o ID: ${tarefaDuplicada.id}. Por favor, insira uma nova descrição.`);
      return;
    }
    const novaTarefa = {
      id: gerarProximoId(),
      descricao: descricaoTarefa
    };
    listaTarefas.push(novaTarefa);
    console.log(`Tarefa adicionada com ID: ${novaTarefa.id}`);
  } catch (error) {
    tratarErroAdicionarTarefa(error);
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

// Função de Menu e Interação com o Usuário
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

      opcaoEscolhida = await question('Escolha uma opção: ');

      switch (opcaoEscolhida) { // Executa uma ação com base na opção escolhida.
        case '1': // Adicionar tarefa.
          try {
            const descricaoTarefa = await question(`Digite a descrição para a tarefa (máximo ${LIMITE_DESCRICAO} caracteres): `);
            adicionarTarefa(descricaoTarefa);
          } catch (error) {
            tratarErroAdicionarTarefa(error);
          }
          break;


        case '2': // Editar Tarefa
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
            const idTarefaRemover = await question(`Digite o ID da tarefa a ser removida: `);
            const indiceTarefa = listaTarefas.findIndex(tarefa => tarefa.id === idTarefaRemover);
            if (indiceTarefa !== -1) {
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
            listaTarefas.forEach(tarefa => {
              console.log(`ID: ${tarefa.id} - Descrição: ${tarefa.descricao}`);
            });
          } catch (error) {
            tratarErroListarTarefas(error); 
          }
          break;

        case '5': // Obter tarefa por ID.
          try {
            const idTarefaBuscar = await question(`Digite o ID da tarefa a ser obtida: `);
            const tarefaEncontrada = listaTarefas.find(tarefa => tarefa.id === idTarefaBuscar);
            if (tarefaEncontrada) {
              console.log(`Tarefa encontrada: ID: ${tarefaEncontrada.id} - Descrição: ${tarefaEncontrada.descricao}\n`);
            } else {
              console.log(`Tarefa não encontrada.\n`);
            }
          } catch (error) {
            tratarErroBuscarTarefa(error);
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
      console.error('Erro inesperado:', error);
    } finally {
      console.log('Operação concluída.');
    }
  } while (opcaoEscolhida !== '6');
}

// Funções de tratamento de erro personalizado para diferentes situações
function tratarErroAdicionarTarefa(error) {
  console.error(`Erro ao adicionar tarefa: ${error.message}`);
}

function tratarErroEditarTarefa(error) {
  console.error(`Erro ao editar tarefa: ${error.message}`);
}

function tratarErroRemoverTarefa(error) {
  console.error(`Erro ao remover tarefa: ${error.message}`);
}

function tratarErroListarTarefas(error) {
  console.error(`Erro ao listar tarefas: ${error.message}`);
}

function tratarErroBuscarTarefa(error) {
  console.error(`Erro ao buscar tarefa: ${error.message}`);
}

// Inicia o programa exibindo o menu
exibirMenu();
