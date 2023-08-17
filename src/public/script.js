import { Cardapio } from '../cardapio-da-lanchonete.js'; 

document.addEventListener('DOMContentLoaded', () => {
  const cardapio = new Cardapio(); 
  const cardapioItems = cardapio.gerarCardapio; 

  const itemsList = document.querySelector('.items__list');

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
    title.style = "text-transform: uppercase";
    card.appendChild(title);

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
