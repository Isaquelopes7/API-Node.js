# 🚀 Servidor Básico com Express

Um projeto introdutório utilizando **Node.js** e o framework **Express**. O objetivo é demonstrar a criação de rotas simples e o uso da biblioteca **Nodemon** para agilizar o desenvolvimento.

## 🛠️ Tecnologias

*   **Node.js**
*   **Express** (Framework para gerenciar requisições)
*   **Nodemon** (Ferramenta que reinicia o servidor automaticamente ao salvar arquivos)

## 📦 Instalação e Uso

1.  **Instale o Express:**
    ```bash
    npm install express
    ```

2.  **Instale o Nodemon (opcional, mas recomendado):**
    ```bash
    npm install -g nodemon
    ```

3.  **Rodando o projeto:**
    Para iniciar o servidor e testar o recarregamento automático:
    ```bash
    nodemon index.js
    ```
    *(Caso não tenha o nodemon, use `node index.js`)*

## 🔌 Rotas Disponíveis

O servidor está configurado na porta **8075**.

| Método | URL | Descrição / Retorno |
| :--- | :--- | :--- |
| `GET` | `http://localhost:8075/` | Rota principal. Retorna: *"Seja bem vindo!"* |
| `GET` | `http://localhost:8075/artigos` | Rota de teste. Retorna: *"Testando o Nodemon"* |
| `GET` | `http://localhost:8075/contato` | Rota de contato. Retorna: *"Deixe um comentário"* |

---
Estudos de Node.js e Express.
