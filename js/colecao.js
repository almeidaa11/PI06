var mario = [];
var dc = [];
var marvel = [
  {
    imgFile: "../img/Capitão-America.jpg",
    nome: "Homem de Ferro (Tonny Stark)",
    altura: "186, na armadura 198 (quadrinhos)",
    peso: "102,05 kg, na armadura 192,77  (quadrinhos)",
    descricao:
      "Tony Stark, mais conhecido como Homem de Ferro é um herói fictício dos quadrinhos nascido em Long Island, NY.  Publicado pela Marvel Comics, possui uma grande aptidão para a área de ciência e tecnologia. Considerado um gênio, após um acidente planejado, o herói se encontrou à beira da morte. Quando se viu sequestrado por terroristas, descobrindo que seu coração está envolto de estilhaços, que se chegarem a corrente sanguínea seriam fatais, criando junto a outro cientista a sua primeira armadura e sua primeira composição do reator arc. ",
    genero: "Masculino",
    poderes:
      "Durabilidade, super força, velocidade, inteligência artificial, repositórios e arsenais, absorver energia",
  },
  {
    imgFile: "",
    nome: "Bruce Banner (Hulk)",
    altura: "175, bruce banner, 228.6 , Hulk(quadrinhos)",
    peso: "58 kg, bruce banner, 521,63, Hulk (quadrinhos)",
    descricao:
      "O Dr.Robert Bruce Banner era um cientista do governo, cujo trabalho era desenvolver uma poderosa bomba gama. Após um acidente envolvendo a bomba, embora tivesse sobrevivido, ele descobre que momentos de raiva fazem com que ele se transforme em um poderoso monstro de pele esverdeada e incrivelmente forte, que recebe o apelido de Hulk. O ser é caçado pelo exército e, mesmo quando enfrenta ameaças inimigas, tem suas ações mal compreendidas e é considerado perigoso pelo governo. Entre as inúmeras aventuras que viveu, foi um dos fundadores dos Vingadores.",
    genero: "Masculino",
    poderes:
      "Super Força que varia de acordo com a sua raiva podendo ser até ilimitada, Super Resistência fator de Cura, Super Saltos,Palmadas Sônicas, Incrível Inteligência, sendo considerado um Gênio (Como Bruce Banner), Grande conhecimento em Mitologia, Física, Matemática e Química (Como Bruce Banner)",
  },
];

var tabela = document.querySelector(".table");

function renderHeros(franquia) {
  var list = document.createElement("ul");
  list.classList.add("lista");
  tabela.appendChild(list);
  for (var i = 0; franquia.length; i++) {
    var item = document.createElement("li");
    item.classList.add("item");
    list.appendChild(item);
    var area = document.createElement("div");
    var img = document.createElement("img");
    var nome = document.createElement("h2");
    var altura = document.createElement("p");
    var peso = document.createElement("p");
    var descricao = document.createElement("p");
    var genero = document.createElement("p");
    var poderes = document.createElement("p");

    nome.textContent = franquia[i].nome;
    altura.textContent = franquia[i].altura;
    peso.textContent = franquia[i].peso;
    descricao.textContent = franquia[i].descricao;
    genero.textContent = franquia[i].genero;
    poderes.textContent = franquia[i].poderes;

    area.appendChild(img);
    area.appendChild(nome);
    area.appendChild(altura);
    area.appendChild(peso);
    area.appendChild(descricao);
    area.appendChild(genero);
    area.appendChild(poderes);

    item.appendChild(area);
  }
}

renderHeros(marvel);
