# Documentação do Projeto - Aplicação ToDo List

## Visão Geral
Esta é a documentação detalhada do projeto final de lógica de programação, uma aplicação **ToDo List** desenvolvida em **JavaScript**. A aplicação permite adicionar, editar, remover, listar, e obter tarefas, todas armazenadas em um array. Cada tarefa possui um ID único, gerado automaticamente. A seguir, é detalhado o que cada membro da equipe contribuiu, e como suas funcionalidades foram implementadas.

### Funcionalidades Requeridas
1. **Adicionar Tarefas + Gerar ID Único** - *Responsável: Lidor Brosh*
2. **Editar uma Tarefa Salva** - *Responsável: Maria Eduarda Castro*
3. **Remover uma Tarefa Salva** - *Responsável: Yashina Gomes*
4. **Listar Todas as Tarefas Salvas** - *Responsável: Vanessa Misiti*
5. **Obter uma Tarefa por ID** - *Responsável: Maria Eduarda Castro*

### Ferramentas e Conceitos Utilizados
- **JavaScript**: Linguagem principal usada para implementar a aplicação.
- **Arrays**: Estrutura de dados utilizada para armazenar as tarefas.
- **Objetos**: Cada tarefa é representada como um objeto, contendo `id` e `descrição`.
- **Funções**: Usadas para executar as operações principais (CRUD).

## Análise Detalhada do Código e Responsáveis

### 1. **Adicionar Tarefas e Gerar ID Único** - *Lidor Brosh*
Lidor foi responsável por implementar a função de adicionar novas tarefas. Ele criou a função `adicionarTarefa` que recebe a descrição de uma tarefa, valida seu tamanho (máximo 100 caracteres) e verifica se a descrição já existe. Caso a tarefa seja válida e única, a função gera um **ID exclusivo** utilizando a função `gerarProximoId`, adiciona a tarefa ao array `listaTarefas`, e imprime uma mensagem confirmando a criação. O **controle de duplicidade** foi um ponto importante abordado, evitando que tarefas com descrições iguais fossem inseridas.

### 2. **Editar uma Tarefa Salva** - *Maria Eduarda Castro*
Maria Eduarda foi responsável por implementar a função de edição de tarefas. A função `editarTarefa` permite modificar a descrição de uma tarefa existente no array, desde que o ID da tarefa seja fornecido corretamente. Ela também implementou uma verificação de duplicidade na nova descrição para evitar que duas tarefas tenham descrições idênticas. Caso a tarefa seja encontrada e validada, a nova descrição é atualizada no objeto correspondente.

### 3. **Remover uma Tarefa Salva** - *Yashina Gomes*
Yashina implementou a funcionalidade de remoção de tarefas. A função que ela criou, associada ao caso `'3'` no menu, remove uma tarefa do array `listaTarefas` com base no **ID** fornecido pelo usuário. A tarefa é encontrada no array usando o método `findIndex`, e removida com o método `splice`, garantindo que apenas a tarefa correta seja deletada. Caso o ID não seja encontrado, o sistema exibe uma mensagem de erro apropriada.

### 4. **Listar Todas as Tarefas Salvas** - *Vanessa Misiti*
Vanessa foi responsável pela função que lista todas as tarefas salvas. Ela implementou uma função que percorre o array `listaTarefas` e exibe todas as tarefas, juntamente com seus IDs e descrições. Essa funcionalidade foi importante para facilitar a visualização das tarefas inseridas, permitindo que os usuários revisem suas pendências rapidamente.

### 5. **Obter uma Tarefa por ID** - *Maria Eduarda Castro*
Maria Eduarda também foi responsável pela função de busca de tarefas por ID. A função que ela desenvolveu permite que, ao fornecer um ID válido, o sistema localize e exiba a tarefa correspondente. Caso o ID fornecido não exista, a função retorna uma mensagem informando que a tarefa não foi encontrada. Essa funcionalidade complementa a parte de edição e remoção, já que o ID de uma tarefa pode ser identificado antes de outras operações.

## Estrutura do Código

### Funções Principais
- **`adicionarTarefa(descricaoTarefa)`**: Adiciona uma nova tarefa ao array, gerando um ID único.
- **`editarTarefa(numeroId, novaDescricao)`**: Edita a descrição de uma tarefa com base no ID.
- **`removerTarefa(idTarefaRemover)`**: Remove uma tarefa pelo ID.
- **`listarTarefas()`**: Lista todas as tarefas armazenadas.
- **`obterTarefaPorId(idTarefaBuscar)`**: Retorna uma tarefa específica pelo ID.

### Tratamento de Erros - Try catch
O código também conta com funções específicas para tratar erros em cada funcionalidade, como:
- **`tratarErroAdicionarTarefa(error)`**
- **`tratarErroEditarTarefa(error)`**
- **`tratarErroRemoverTarefa(error)`**
- **`tratarErroListarTarefas(error)`**
- **`tratarErroBuscarTarefa(error)`**

Essas funções garantem que, caso algum erro ocorra, o usuário receba uma mensagem adequada, mantendo a robustez do sistema.

## Conclusão
O desenvolvimento da aplicação **ToDo List** foi realizado de maneira colaborativa, com cada membro responsável por implementar funcionalidades-chave. A aplicação cumpre todos os requisitos e permite a manipulação eficaz das tarefas, utilizando conceitos fundamentais de **JavaScript** como arrays, objetos, e funções. Cada participante contribuiu de forma significativa para o sucesso do projeto, trazendo soluções para os desafios enfrentados ao longo do desenvolvimento.
