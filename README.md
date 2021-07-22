# Teste de Conhecimento Específico - FRONTEND

## Objetivo do projeto

- Consumir dados da API RAWG Vídeo Games.
- Criar duas páginas com informações solicitadas pelo teste.

## Considerações sobre a API

- A API possui dados claros e concisos, com rotas bem definidas e tutoriais para uso das mesmas. Explica bem como utilizar a chave para acesso aos dados. Em geral uma API bem construida e completa.
- Se faz necessária a criação de um login para obter a API Key e fazer a conexão com a mesma.
- Contém termos de uso e exigências, como referências em todas as páginas que possuem requests da API.
- Limite de 20.000 requests para o plano de graça.

## Diário

O objetivo dessa sessão é explicitar a minha linha de raciocínio, coisas que eu tentei, conforme o andamento do projeto.

### 20/07/2021 (1º dia - Email recebido às 16:24)

- [x] Leitura da documentação da API.
- [x] Iniciar projeto com "create react app".
- [x] Instalar dependencias (Axios, Bootstrap, ReactRouterDom).
- [x] Organizar componentes iniciais e folders de rotas.
- [x] Criar componente da página inicial (Home) e renderizar página com título e botão com link para a rota de lista de games.
- [x] Atualizar componente App.js com a rota da página inicial.

### 21/07/2021 (2º dia)

- [x] Criar e executar componente NavBar
- [x] Crias folder para baseURL da conexão da API.
- [x] Criar e executar componente GameList (Renderizar lista de games populares).
- [x] Estilização com bootstrap do componente GamesList.
- [x] Transformar as imagens de cada jogo em um link para a rota de detalhes.
- [x] Criar e executar o componente da rota GameDetail.
- [x] Referenciar o ID individual de cada game na rota GameDetail.
- [x] Iniciar estilização com bootstrap do componente GameDetail.

Tive problemas em conseguir conectar com a API referenciando pelo ID de cada jogo na rota de GameDetail, por isso houve atraso no projeto.

### 22/07/2021 (3º dia)

- [x] Finalizar a estilização do componente GameDetail
- [ ] (extra) Incluir um carrossel no inicio da rota GamesList, com vídeos dos jogos da lista.
- [x] (extra) Tornar o link das imagens animado com Hover no componente GameList.
- [x] Inserir referências da API nas páginas onde há requests.
- [x] Ajustes finais do projeto.
- [x] Fazer o deploy da aplicação no Netilify.

Para transformar os links das imagens com Hover, optei por acrescentar um componente style.css. Não tive sucesso tentando fazer por Bootstrap.
Mudei de idéia quanto ao Carrossel, não vou inserir.

##Link para acessar o site

https://teste-carupi.netlify.app/gamedetail/442854
