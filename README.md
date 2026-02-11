# 🌲 Cypress, do Zero à Nuvem ☁️

## Descrição do Projeto

Este projeto é o repositório do curso "Cypress, do Zero à Nuvem" da Escola Talking About Testing. Ele serve como um ambiente prático para aprender a configurar e executar testes automatizados com Cypress.io, desde a configuração inicial até a integração contínua com o Cypress Cloud e GitHub Actions.

## O que você vai aprender (Conteúdo do Curso)

O curso aborda os seguintes tópicos:

- Configuração de um projeto Cypress do zero.
- Visita a páginas locais e remotas.
- Interação com elementos comuns de aplicações web.
- Teste de upload de arquivos.
- Realização de diversas verificações de resultados esperados.
- Criação de comandos customizados no Cypress.
- Lidar com links que abrem em novas abas do navegador.
- Execução de testes simulando diferentes dimensões de dispositivos móveis.
- Resolução de problemas utilizando a [API do Cypress](https://docs.cypress.io/api/table-of-contents).
- Criação de documentação mínima para projetos de testes automatizados.
- Execução de testes em _workflows_ de integração contínua (CI) com GitHub Actions.
- Integração do _workflow_ de CI com o Cypress Cloud para gestão de testes na nuvem.

## Tecnologias Utilizadas

- [Cypress.io](https://www.cypress.io/): Framework de testes de ponta a ponta.
- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript (necessário para o Cypress).
- [npm](https://www.npmjs.com/): Gerenciador de pacotes do Node.js.
- [GitHub Actions](https://docs.github.com/actions): Ferramenta de CI/CD para automação de _workflows_.
- [Cypress Cloud](https://cloud.cypress.io/): Serviço de gestão de testes do Cypress.

## Estrutura do Projeto

A estrutura principal do projeto é organizada da seguinte forma:

```
.
├── cypress/                  # Contém todos os arquivos relacionados aos testes Cypress
│   ├── e2e/                  # Testes end-to-end
│   │   ├── CAC-TAT.cy.js     # Exemplo de teste da aplicação CAC-TAT
│   │   └── privacyPolicy.cy.js # Teste da política de privacidade
│   ├── fixtures/             # Dados de teste (mocks, stubs)
│   │   └── example.json      # Exemplo de fixture
│   ├── support/              # Comandos customizados e configurações de suporte
│   │   ├── commands.js       # Comandos Cypress customizados
│   │   └── e2e.js            # Arquivo de suporte para execução dos testes
│   └── videos/               # Vídeos das execuções dos testes (gerados automaticamente)
├── lessons/                  # Materiais do curso e lições
├── src/                      # Código fonte da aplicação sendo testada
│   ├── index.html            # Página principal da aplicação
│   ├── privacy.html          # Página de política de privacidade
│   ├── script.js             # Lógica JavaScript da aplicação
│   └── style.css             # Estilos CSS da aplicação
├── .gitignore                # Arquivos e pastas a serem ignorados pelo Git
├── cypress.config.js         # Configurações do Cypress
├── LICENSE                   # Licença do projeto
├── package.json              # Metadados do projeto e dependências
├── package-lock.json         # Bloqueio de dependências
└── README.md                 # Documentação principal do projeto
```

## Instalação

Para configurar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/wlsf82/cypress-do-zero-a-nuvem.git
    cd cypress-do-zero-a-nuvem
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

## Como Executar os Testes

Após a instalação, você pode executar os testes de diferentes maneiras:

### Modo Interativo (Cypress Test Runner)

Para abrir o Cypress Test Runner e executar os testes interativamente:

```bash
npm run cy:open
```

Para abrir o Cypress Test Runner em modo mobile (viewport de 410x860):

```bash
npm run cy:open:mobile
```

### Modo Headless (Linha de Comando)

Para executar todos os testes em modo headless (sem interface gráfica):

```bash
npm test
```

Para executar os testes em modo headless com viewport mobile:

```bash
npm run test:mobile
```

## Links Úteis

-   [Documentação Oficial do Cypress](https://docs.cypress.io/)
-   [Cypress Cloud](https://cloud.cypress.io/)
-   [Escola Talking About Testing](https://www.talkingabouttesting.com/)
-   [Repositório do Projeto no GitHub](https://github.com/wlsf82/cypress-do-zero-a-nuvem)

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.

## Autor

**Walmyr Filho**
-   [GitHub](https://github.com/wlsf82)
-   [Website](https://walmyr.dev/)

___

Este é um curso da **Escola Talking About Testing**.
