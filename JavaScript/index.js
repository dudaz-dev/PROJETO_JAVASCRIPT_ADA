const prompt = require('prompt-sync')({ sigint: true });

function menu() {
  let opcao = '';

  do {

    console.log(`
    ╔═══════════════════════════════════════╗  
    ║   ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗  ╔═══╗   ║
    ║   ║ L ║  ║ I ║  ║ S ║  ║ T ║  ║ A ║   ║
    ║   ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝  ╚═══╝   ║    
    ╚═══════════════════════════════════════╝ 
    ╔═══════════════════════════════════════╗
    ║---------------------------------------║
    ║--------------TO-DO-LIST---------------║
    ║---------------------------------------║
    ║       1. Adicionar Tarefa.            ║
    ║       2. Editar Tarefa.               ║
    ║       3. Remover Tarefa.              ║
    ║       4. Listar Tarefas.              ║
    ║       5. Obter Tarefa por ID.         ║
    ║       6. Sair.                        ║
    ║---------------------------------------║
    ╚═══════════════════════════════════════╝`);
    opcao = prompt(`    ╔═══════════════════════════════════════╗
    ║-----Digite o número da sua opção:-----║
    ╚═══════════════════════════════════════╝
    `);

    switch (opcao) {
      case '1':
        const adicionar = prompt('1. Digite a descrição da tarefa: ');
        console.log(`1. Sua tarefa foi adicionada: ${adicionar} \n`);
        break;

      case '2':
        const editar = parseInt(prompt('2. Digite o ID da tarefa a ser editada: '));
        const novaDescricao = prompt('2. Digite a nova descrição da tarefa: ');
        console.log(`2. Tarefa com ID ${editar} editada para: ${novaDescricao} \n`);
        break;

      case '3':
        const remover = parseInt(prompt('3. Digite o ID da tarefa a ser removida:'));
        console.log(`3. Tarefa com ID ${remover} removida.\n`);
        break;

      case '4':
        console.log('4. Segue lista de tarefas cadastradas: \n');
        break;

      case '5':
        const buscar = parseInt(prompt('5. Digite o ID da tarefa a ser obtida: '));
        console.log(`5. Buscando tarefa com ID: ${buscar}\n`);
        break;

      case '6':
        console.log('6. Saindo...\n');
        break;

      default:
        console.log('Resposta errada, por favor insira um valor válido.\n');
        break;
    }
  } while (opcao !== '6')
}

menu();