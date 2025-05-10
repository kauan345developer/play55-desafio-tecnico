
# DevFinder

Uma aplicação web construída com Nuxt.js que permite aos usuários pesquisar perfis do GitHub e visualizar suas informações.

## Funcionalidades

* Pesquisa de usuários do GitHub com informações detalhadas do perfil
* Alternância entre tema claro/escuro
* Histórico de pesquisas
* Autenticação com Google
* Integração com redes sociais
* Design responsivo

## Stack Tecnológico

* Nuxt.js 3
* TypeScript
* Autenticação com Firebase
* API do GitHub
* TailwindCSS
* Date-fns

## Variáveis de Ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```properties
NUXT_PUBLIC_GITHUB_TOKEN=seu_token_do_github
NUXT_PUBLIC_FIREBASE_API_KEY=sua_chave_api_do_firebase
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_dominio_de_autenticacao_do_firebase
NUXT_PUBLIC_FIREBASE_PROJECT_ID=seu_id_do_projeto_no_firebase
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_bucket_de_storage_no_firebase
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id_do_firebase
NUXT_PUBLIC_FIREBASE_APP_ID=seu_app_id_do_firebase
```

## Configuração

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Construa para produção:

```bash
npm run build
```

## Estrutura do Projeto

* `/pages` - Páginas de rota (index.vue, history.vue)
* `/components` - Componentes reutilizáveis (CardHistory, CardUserGit)
* `/composables` - Composables personalizados (useFirebaseAuth)
* `/types` - Definições de tipos em TypeScript

## Descrição das Funcionalidades

### Pesquisa de Usuários do GitHub

* Pesquise usuários do GitHub pelo nome de usuário
* Exiba informações do perfil do usuário, incluindo:

  * Avatar
  * Nome
  * Biografia
  * Localização
  * Empresa
  * Links sociais
  * Quantidade de repositórios
  * Contagem de seguidores/seguindo

### Autenticação

* Integração com login do Google
* Autenticação com Firebase

### Suporte a Temas

* Alternância entre modo claro e escuro
* Persistência do tema usando localStorage

### Histórico de Pesquisa

* Rastreia e exibe pesquisas anteriores
* Armazena o histórico de pesquisas no localStorage
* Exibe carimbo de data/hora para cada pesquisa

