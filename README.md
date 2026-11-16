# Automação de Testes UI e E2E — SauceDemo

## 1. Sobre o projeto

Este projeto foi desenvolvido como atividade individual de Quality Assurance (QA), com o objetivo de implementar uma suíte inicial de testes automatizados utilizando Cypress.

A aplicação utilizada foi o [SauceDemo](https://www.saucedemo.com/), ambiente de demonstração que permite validar funcionalidades de autenticação, catálogo de produtos, carrinho de compras e checkout.

## 2. Tecnologias utilizadas

- Node.js
- npm
- Cypress 16.3.0
- JavaScript
- Google Chrome

## 3. Estrutura do projeto

```text
saucedemo-cypress/
│
├── cypress/
│   ├── e2e/
│   │   ├── autenticacao.cy.js
│   │   ├── produtos.cy.js
│   │   ├── carrinho.cy.js
│   │   └── checkout.cy.js
│   │
│   ├── fixtures/
│   └── support/
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
└── evidencias/
```

## 4. Cenários automatizados

A suíte contempla oito testes automatizados, organizados por funcionalidade.

| ID | Cenário | Requisito |
|---|---|---|
| CT-01 | Login com credenciais válidas | RF-01 |
| CT-02 | Login com credenciais inválidas | RF-02 |
| CT-03 | Apresentação da listagem de produtos | RF-03 |
| CT-04 | Inclusão de produto e atualização do contador | RF-04 |
| CT-05 | Remoção de produto do carrinho | RF-05 |
| CT-06 | Consistência das informações do produto | RF-06 |
| CT-07 | Validação dos dados obrigatórios do checkout | RF-07 |
| CT-08 | Conclusão da jornada completa de compra (E2E) | RF-07 e RF-08 |

## 5. Fluxo E2E

O teste CT-08 automatiza a jornada completa de compra:

1. Autenticação do usuário.
2. Acesso à listagem de produtos.
3. Seleção do produto Sauce Labs Backpack.
4. Inclusão do produto no carrinho.
5. Acesso ao checkout.
6. Preenchimento dos dados do comprador.
7. Conferência do resumo da compra.
8. Finalização do pedido.
9. Validação da mensagem de confirmação.

## 6. Instalação do projeto

É necessário possuir Node.js e npm instalados.

Após clonar o repositório, acesse a pasta do projeto e execute:

```bash
npm install
```

O comando instala as dependências necessárias, incluindo o Cypress.

## 7. Execução dos testes

Para abrir a interface gráfica do Cypress:

```bash
npm run cy:open
```

Para executar toda a suíte automaticamente pelo terminal:

```bash
npm run cy:run
```

## 8. Evidências dos testes

As evidências das execuções estão organizadas na pasta `evidencias/`.

- Evidencia_01_autenticacao.png
- Evidencia_02_carrinho.png
- Evidencia_03_checkout.png
- Evidencia_04_Execucao_Completa.png

## 9. Resultado da execução

A execução integrada da suíte apresentou os seguintes resultados:

| Indicador | Resultado |
|---|---:|
| Arquivos de especificação | 4 |
| Testes executados | 8 |
| Testes aprovados | 8 |
| Testes com falha | 0 |
| Tempo de execução | 24 segundos |

**Resultado: All specs passed!**

Todos os oito cenários foram aprovados na execução integrada pelo terminal.

## 10. Considerações finais

A implementação permitiu automatizar os principais fluxos funcionais da aplicação SauceDemo, contemplando autenticação, navegação, gerenciamento do carrinho e finalização de compras.

A suíte desenvolvida permite executar os testes de forma automatizada e verificar o comportamento esperado das funcionalidades, contribuindo para a identificação de possíveis regressões em futuras atualizações do sistema.
