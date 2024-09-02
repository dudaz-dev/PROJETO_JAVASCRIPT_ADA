const prompt = require('prompt-sync')({ sigint: true });

function menu() {
  let opcao = '';

  while (opcao !== '6') {

    console.log(

      `(ToDoList) - Escolha uma opção:
    ------------------------
    1. Adicionar Tarefa.
    2. Editar Tarefa.
    3. Remover Tarefa.
    4. Listar Tarefas.
    5. Obter Tarefa por ID.
    6. Sair.
    ------------------------ \n   
    `);

    opcao = prompt('Digite o número da sua opção: ');


    if (!['1', '2', '3', '4', '5', '6'].includes(opcao)) {
      console.log('Resposta errada, por favor insira um valor válido.\n');
      continue;
    }


    switch (opcao) {
      case '1':
        const adicionar = prompt('Digite a descrição da tarefa:');
        console.log(`Tarefa adicionada: ${adicionar}`);
        break;

      case '2':
        const editar = parseInt(prompt('Digite o ID da tarefa a ser editada:'));
        const novaDescricao = prompt('Digite a nova descrição da tarefa:');
        console.log(`Tarefa com ID ${editar} editada para: ${novaDescricao}`);
        break;

      case '3':
        const remover = parseInt(prompt('Digite o ID da tarefa a ser removida:'));
        console.log(`Tarefa com ID ${remover} removida.`);
        break;

      case '4':
        console.log('Segue lista de tarefas cadastradas:');
        break;

      case '5':
        const buscar = parseInt(prompt('Digite o ID da tarefa a ser obtida:'));
        console.log(`Buscando tarefa com ID: ${buscar}`);
        break;

      case '6':
        console.log('Saindo...');
        break;
    }
  }
}

menu();
