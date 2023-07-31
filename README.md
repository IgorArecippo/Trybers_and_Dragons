# Trybers and Dragons!

Neste projeto, foram aplicados os princípios da arquitetura `SOLID` e os conceitos de `POO` (Programação Orientada a Objetos) em uma estrutura de jogos de interpretação de papéis, conhecidos como jogos `RPG` (_Role Playing Game_).

## Orientações

## Rodando no Docker vs Localmente

### Com Docker

> Execute o serviço `node` com o comando `docker-compose up -d`.
- Esse serviço inicializará um container chamado `trybers_and_dragons`.
- A partir deste ponto, você pode rodar o container `trybers_and_dragons` via linha de comando ou abri-lo no Visual Studio Code.

> Use o comando `docker exec -it trybers_and_dragons bash`.
- Ele dará acesso ao terminal interativo do container criado pelo `compose`, que está rodando em segundo plano.

> Instale as dependências [**caso existam**] com `npm install`.

⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec`, mencionado acima.

⚠ Atenção ⚠ O **git** dentro do container não está configurado com suas credenciais. Faça os commits fora do container ou configure suas credenciais do git dentro do container.

⚠ Atenção ⚠ Não execute o comando npm audit fix! Ele atualiza várias dependências do projeto.

✨ **Dica:** Recomendo a extensão `Remote - Containers` (que estará na seção de extensões recomendadas do Visual Studio Code) para que você possa desenvolver sua aplicação no container Docker direto no Visual Studio Code, da mesma forma que faz com seus arquivos locais.

---

### Sem Docker

> Instale as dependências [**caso existam**] com `npm install`.

⚠ Atenção ⚠ Não execute o comando npm audit fix! Ele atualiza várias dependências do projeto.

✨ **Dica:** Para rodar o projeto desta forma, o `node` deve estar instalado em seu computador.

✨ **Dica:** Utilize a versão 16 do `node`.

# Antes de começar a desenvolver

1. Clone o repositório usando `Usar link SSH`

- Navegue para a pasta do repositório que acabou de clonar:
  * `cd pasta-do-repositório`

2. Instale as dependências [**caso existam**]
  * `npm install`
  
3. Inicie a aplicação:
  * `npm run dev`

# Contextualizando o projeto

No universo de Trybers and Dragons - T&D, quase todos os seres que percorrem essas terras pertencem a uma **raça** definida.

As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

Alguns seres também possuem uma **energia**, e ao treinarem o uso dessa energia, passam a possuir um **arquétipo**. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

Boa parte dos seres pode ser considerada lutadora, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões, podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.
