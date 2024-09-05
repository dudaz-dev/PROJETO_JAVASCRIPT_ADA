

## 📚 (MANUAL INSTALL) - TODO LIST 



## 📚 DESCRIÇÃO 

Este projeto é uma aplicação de **ToDo List (Lista de Tarefas)** desenvolvida como parte do módulo de Lógica de Programação. O objetivo é criar um sistema de gerenciamento de tarefas que permite ao usuário adicionar, editar, remover, listar e buscar tarefas através de uma interface simples no console.



## 📚 INSTALAÇÃO

### 📚 PRÉ-REQUISITOS

- **Node.js (Versão 16.17.0 ou superior)**

Para verificar se o Node.js está instalado no seu sistema, utilize o seguinte comando:

```bash
node -v
```

Caso o Node.js não esteja instalado, siga os passos abaixo:

### 📚 INSTALAÇÃO DO NODE.JS

#### WINDOWS:

1. Acesse o site oficial do Node.js: [https://nodejs.org](https://nodejs.org)
2. Baixe o instalador para Windows e siga as instruções do assistente de instalação.

#### macOS:

Instale o Node.js utilizando Homebrew:

```bash
brew install node
```

#### LINUX:

Use o gerenciador de pacotes da sua distribuição para instalar o Node.js. Exemplo para Debian/Ubuntu:

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```


## 📚 INICIALIZANDO O PROJETO

### 📚 CLONANDO O REPOSITÓRIO

Clone o repositório do projeto utilizando o comando:

```bash
git clone https://github.com/dudaz-dev/PROJETO_JS_ADA.git
```

### 📚 INSTALANDO AS DEPENDÊNCIAS

Este projeto utiliza a biblioteca **readline-sync** para interagir com o usuário no terminal.

Após clonar o repositório, instale as dependências executando o comando:

```bash
npm install
```

Esse comando criará uma pasta `node_modules` com todas as bibliotecas necessárias para o funcionamento do projeto.

### 📚 DEPENDÊNCIAS UTILIZADAS:

- **readline-sync**: Biblioteca que permite a captura de entrada do usuário via console.

Instalação:

```bash
npm install readline-sync
```



## 📚 EXECUÇÃO DO PROJETO

Para iniciar o projeto, abra o terminal e execute o seguinte comando:

```bash
node index.js
```

O menu será exibido no console, permitindo ao usuário escolher entre adicionar, editar, remover, listar ou buscar tarefas.



## 📚 FUNCIONALIDADES

- **Adicionar Tarefa**: Permite ao usuário adicionar uma nova tarefa com um ID único gerado automaticamente.
- **Editar Tarefa**: O usuário pode editar a descrição de uma tarefa existente através de seu ID.
- **Remover Tarefa**: Remove uma tarefa do sistema a partir do ID fornecido.
- **Listar Tarefas**: Lista todas as tarefas adicionadas no sistema.
- **Buscar Tarefa por ID**: Localiza uma tarefa específica com base no ID fornecido.



## 📚 AUTORES

- **Lidor Brosh**: Gerar IDs únicos, Adicionar Tarefas, Menu de navegação
- **Maria Eduarda**: Editar Tarefas, Buscar Tarefas por ID
- **Yashina Gomes**: Remover Tarefas
- **Vanessa Misiti**: Listar Tarefas

---

Esse manual explica como preparar o ambiente para rodar o projeto ToDo List e descreve as principais funcionalidades.
