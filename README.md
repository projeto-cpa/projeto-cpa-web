# Cpa

Projeto CPA Biopark

## Padrão de código
Visitar a [documetação](./PADRAO.md) de padrão de código 

## Dependencias

- Vue v3.0.0: componentes dinâmicos em HTML [documentação](https://vuejs.org/guide/introduction.html)
- Bootstrap v5.3.0: classes de estilos HTML [documentação](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- FontAwesome v4.7.0: classes de estilos HTML [documentação](https://fontawesome.com/v4/icons/)
- NuxtJS v2.15.8: Servidor [documentação](https://nuxtjs.org/docs/get-started/installation)

## Ferramentas de testes

Ainda não definido.

## Requisitos do sistema

- Node: versão 18+ LTS
- NPM: versão mais atual
- Github Desktop: versão mais atual (opcional)
- Git: versão mais atual
- VsCode: versão mais atual

## Extensões recomendadas

- Volar
- CSS Peak
- Auto Rename Tag

## Executando o projeto

- Clone o projeto utilizando o Github Desktop, ou por meio de comandos no Git
- Instale todas as dependências `npm install`
- Execute o projeto utilizando o comando `npm run dev`

## Lista de comandos

```bash
# Instala as dependencias
$ npm install

# Inicia o servidor localmente (usar esse comando para desenvolver)
$ npm run dev

# compilar e rodar
$ npm run build
$ npm run start

# compila como estatico
$ npm run generate
```

## Enviando meus códigos

Faça seus commits utilizando a "Branch" que indica o seu respectivo nome

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
