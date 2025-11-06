## Tecnologias Utilizadas

Este projeto utiliza um stack de tecnologias modernas focado em performance e experiência de desenvolvimento:

* **Framework:** Next.js 16 (com App Router)
* **Linguagem:** TypeScript
* **Biblioteca UI:** React 19
* **Estilização:** Tailwind CSS 4
* **Ícones:** `lucide-react`
* **Otimização:** React Compiler (ativado no `next.config.ts`)
* **Linting:** ESLint (configurado com `eslint-config-next`)

## Como Começar

Para executar este projeto localmente, siga os passos abaixo.

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/davifelipe00/clearfy.git](https://github.com/davifelipe00/clearfy.git)
    cd clearfy
    ```

2.  **Instale as dependências**
    O projeto utiliza `npm` como gerenciador de pacotes.
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento**
    ```bash
    npm run dev
    ```

4.  Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver a aplicação em funcionamento.

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

* `npm run dev`: Inicia o servidor em modo de desenvolvimento.
* `npm run build`: Compila a aplicação para produção.
* `npm run start`: Inicia um servidor de produção (requer `npm run build` primeiro).
* `npm run lint`: Executa o ESLint para analisar o código.

## Deploy

A forma mais fácil de fazer o deploy desta aplicação Next.js é utilizando a [Plataforma Vercel](https://vercel.com/new), desenvolvida pelos criadores do Next.js.
