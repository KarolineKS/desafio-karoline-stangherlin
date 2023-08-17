import { Cardapio } from '../cardapio-da-lanchonete.js';

document.addEventListener('DOMContentLoaded', () => {
  const cardapio = new Cardapio();
  const cardapioItems = cardapio.gerarCardapio;

  const itemsList = document.querySelector('.items__list');

  const urlImages = {
    cafe: 'https://static.vecteezy.com/system/resources/previews/009/887/134/original/cup-of-coffee-free-png.png',

    chantily:
      'https://img.freepik.com/fotos-premium/cafe-cappuccino_637104-12.jpg?w=2000',

    suco: 'https://img.freepik.com/fotos-premium/copo-de-suco-de-laranja-e-laranjas_159938-2735.jpg',

    sanduiche: "https://img.freepik.com/fotos-gratis/sanduiche_1339-1108.jpg?w=360",

    queijo: "https://www.pngmart.com/files/8/Cheese-PNG-Transparent-Images.png",

    salgado: "https://salgadosneves.com.br/img/salgado_fumaca.png",

    combo1: "https://portofit.files.wordpress.com/2012/07/sanduiche.jpg",

    combo2: "https://img.freepik.com/fotos-premium/sanduiche-de-caranguejo-presunto-e-cafe-em-fundo-branco_44045-70.jpg",
  };

  cardapioItems.forEach((item) => {
    const itemCard = createItemCard(item);
    itemsList.appendChild(itemCard);
  });

  function createItemCard(item) {
    const card = document.createElement('div');
    card.classList.add('item');

    const title = document.createElement('div');
    title.classList.add('item__title');
    title.textContent = item.codigo;
    title.style = 'text-transform: uppercase';
    card.appendChild(title);

    const image = document.createElement('img');
    image.classList.add('item__image');
    image.src = urlImages[item.codigo];
    card.appendChild(image);

    const description = document.createElement('div');
    description.classList.add('item__description');
    description.textContent = item.descricao;
    card.appendChild(description);

    const price = document.createElement('div');
    price.classList.add('item__price');
    price.textContent = `Preço: R$ ${item.valor.toFixed(2)}`;
    card.appendChild(price);

    const addButton = document.createElement('button');
    addButton.classList.add('btn__add');
    addButton.textContent = 'Adicionar';
    card.appendChild(addButton);

    return card;
  }
});
