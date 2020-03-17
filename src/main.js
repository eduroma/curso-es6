import api from "./api";

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");
    this.inputEl = document.querySelector("input[name=repo-name]");

    this.registerHandlers();
  }

  registerHandlers(event) {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.lenght === 0) {
      return;
    }

    const loadEl = document.createElement("span");
    loadEl.appendChild(document.createTextNode("Carregando..."));
    loadEl.setAttribute("id", "carregando");

    this.formEl.appendChild(loadEl);

    try {
      const response = await api.get(`/repos/${repoInput}`);

      console.log(response);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      console.log(name);
      console.log(avatar_url);

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      console.log(this.repositories);

      this.render();
    } catch (err) {
      alert("Repositório não existe");
      console.log(err);
    }

    this.inputEl.value = "";

    document.getElementById("carregando").remove();
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let itemEl = document.createElement("li");

      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);
      imgEl.setAttribute("alt", repo.name);

      let nameEl = document.createElement("strong");
      nameEl.appendChild(document.createTextNode(repo.name));

      let descEl = document.createElement("p");
      descEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.setAttribute("target", "_blank");
      linkEl.appendChild(document.createTextNode("Acessar"));

      itemEl.appendChild(imgEl);
      itemEl.appendChild(nameEl);
      itemEl.appendChild(descEl);
      itemEl.appendChild(linkEl);

      this.listEl.appendChild(itemEl);
    });
  }
}

new App();
