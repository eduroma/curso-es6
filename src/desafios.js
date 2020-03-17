//Fonte:
//https://skylab.rocketseat.com.br/api/files/1566499229316.pdf

//Exercício 1
/*
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin() {
    if (this.admin) {
      return true;
    }
    return false;
  }
}

class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
*/

//Exercício 2
/*
const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

//2.1 -> Map
const idades = usuarios.map(usuario => {
  return usuario.idade;
});
console.log(idades);

//2.2 -> Filter
const filter = usuarios.filter(
  usuario => usuario.idade > 18 && usuario.empresa === "Rocketseat"
);
console.log(filter);

//2.3 -> Find
const find = usuarios.find(usuario => usuario.empresa === "Google");
console.log(find);

//2.4
const result = usuarios
  .map(usuario => {
    usuario.idade *= 2;
    return usuario;
  })
  .filter(usuario => usuario.idade <= 50);

console.log(result);
*/

//Exercício 3

/*
//3.1
const arr = [1, 2, 3, 4, 5];

// arr.map(function(item) {
//   return item + 10;
// });
arr.map(item => item + 10);

console.log(arr);
*/

// 3.2
/*
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };
// function mostraIdade(usuario) {
//   return usuario.idade;
// }
const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));
*/

/*
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
// function mostraUsuario(nome = "Diego", idade = 18) {
//   return { nome, idade };
// }

const mostraUsuario = (nome = "Diego", idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
*/

/*
// 3.4
const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  });
};

const promise = () => new Promise((resolve, reject) => resolve());
*/

// Exercício 4

// 4.1
/*
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
*/

// 4.2

/*
function mostraInfo({ nome, idade }) {
  //return `${usuario.nome} tem ${usuario.idade} anos.`;
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: "Diego", idade: 18 }));
*/

// Exercício 5

// 5.1
/*
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
const soma = (...params) => {
  return params.reduce((total, next) => (total += next));
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
*/

/*
// 5.2
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "Lontras" }
};

console.log(usuario2);
console.log(usuario3);
*/

/*
// Exercício 6
const usuario = 'Diego';
const idade = 23;
//console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${usuario} possui ${idade} anos`);
*/
/*
//Exercício 7
const nome = "Diego";
const idade = 23;

const usuario = {
  nome,
  idade,
  cidade: "Rio do Sul"
};

console.log(usuario);
*/

//Fonte: https://skylab.rocketseat.com.br/api/files/1566499323808.pdf

//Exercício 1

/*
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//   delay().then(() => {
//     console.log("1s");
//     delay().then(() => {
//       console.log("2s");
//       delay().then(() => {
//         console.log("3s");
//       });
//     });
//   });
// }

const umPorSegundo = async () => {
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
};

umPorSegundo();
*/

import axios from "axios";

// function getUserFromGithub(user) {
//   axios
//     .get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log("Usuário não existe");
//     });
// }

/*
const getUserFromGithub = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (e) {
    console.log("Usuário não existe");
  }
};

getUserFromGithub("diego3g");
getUserFromGithub("diego3g124123");
*/

/*
// class Github {
//   static getRepositories(repo) {
//     axios
//       .get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(err => {
//         console.log("Repositório não existe");
//       });
//   }
// }
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (e) {
      console.log("Repositório não existe");
    }
  }
}

Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv");
*/

// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(response => {
//   console.log(response.data);
//   })
//   .catch(err => {
//   console.log('Usuário não existe');
//   });
//  }

const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (e) {
    console.log("Usuário não existe");
  }
};

buscaUsuario("diego3g");
