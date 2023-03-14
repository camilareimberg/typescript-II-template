// EXERCÍCIO DE FIXAÇÃO
// 1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
//   a. nome, que é uma string;
//   b. idade, que é um número;
//   c. corFavorita, que é uma string.

// 2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
// que todos os objetos tenham as mesmas propriedades.

// 3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.

type Person = {
    nome: String,
    idade: number,
    corFavorita: COR,

  }
//ENUM permite a declaração de tipos de variáveis quando elas assumem valores pré-definidos (dados que não mudam).
  enum COR {
    VERMELHO= 'vermelho',
    LARANJA= 'laranja',
    AMARELO = 'amarelo',
    AZUL = 'azul',
    VERDE= 'verde',
    ANIL= 'anil',
    VIOLETA= 'violeta'
  }

  //person é o tipo que definimos acima
  const Camila: Person = {
    nome:'Camila',
    idade: 28,
    corFavorita: COR.AZUL
  }

  const Tiago: Person = {
    nome:'Tiago',
    idade: 28,
    corFavorita: COR.VIOLETA
  }

  const Amora: Person = {
    nome:'Amora',
    idade: 6,
    corFavorita: COR.AMARELO
  }

console.log(Amora.corFavorita)

//outra forma de fazer seria juntar todas as pessoas em uma lista ao invés de separar igual acima
const listaDePessoas : Person [] = [
  {
    nome:'Amora',
    idade: 6,
    corFavorita: COR.AMARELO
  },
{
  nome:'Tiago',
    idade: 28,
    corFavorita: COR.VIOLETA
},
{
  nome:'Camila',
    idade: 28,
    corFavorita: COR.AZUL
}
]

console.log(listaDePessoas)