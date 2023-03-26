# Padrões de projeto: Front end

## Padrão de variaveis

Os arquivos deverão ser nomeados em caixa alternada (camel-case), por exemplo: `cargoRepository`, `Cargo`, `cargoDTO`.

## Padrão de pastas

As pastas deverão ser nomeadas em caixa baixa, por exemplo `src\main\java\br\com\biopark\cpa\models`

## Padrão de arquivos

Os arquivos deverão ser nomeados em caixa alternada (camel-case), por exemplo: `cargoRepository`, `Cargo`, `cargoDTO`.

## Padrão de campo de banco

As colunas do banco deverão ser nomeadas em caixa baixa e em portugues, palavras separadas por underline (snake-case).

- `data_criacao`
- `data_alteracao`
- `autor_criacao`
- `autor_alteracao`

## Padrão nomes das tabelas

As tabelas do banco deverão ser nomeadas em caixa baixa, palavras separadas por underline (snake-case), por exemplo `eixo`, `usuario`,`cargo`, `pergunta_resposta`

## Estrutura de pasta

### `components`

A pasta `components` contêm todos os arquivos Vue.js que fazem parte de alguma tela. Ela está alocada fora da pasta das  telas por motivos de organizaçao de código.

Para mais informações veja a [documentação orignal](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `components/view`

A pasta é responsável pela tela em si, que é importada pela rota que se encontra na pasta `pages`.

**No futuro essa pasta será realocada na raiz do projeto, se tornando assim `views`**
*No entanto, não se sinta desencorajado em mandar commits nessa pasta!*

### `pages`

A pasta pages está destinada a arquivos Vue.js que representem uma rota real. Todos os arquivos dentro são convertidos em rotas, e é de suma importância a declaração de um `name` para a rota no padrão snake-case (exemplo: `listagem-cargos`). É possível adicionar uma rota dinâmica com o uso de um arquivo Vue.js nomeado `_slug.vue`, para mais detalhes veja a documentação oficial.

Para mais informações veja a [documentação orignal](https://nuxtjs.org/docs/2.x/get-started/routing).

### `static`

A pasta `static` contêm  os arquivos estáticos como imagens, estilos, fontes e outros arquivos.

Para mais informações veja a [documentação orignal](https://nuxtjs.org/docs/2.x/directory-structure/static).
