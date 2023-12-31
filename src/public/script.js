import { Cardapio } from '../cardapio-da-lanchonete.js';
import { CaixaDaLanchonete } from '../caixa-da-lanchonete.js';

document.addEventListener('DOMContentLoaded', () => {
  const cardapio = new Cardapio();
  const cardapioItems = cardapio.gerarCardapio;

  const itemsList = document.querySelector('.items__list');
  const btnmetodoDePagamento = document.querySelector('.metodo-pagamento');
  const valorTotalElement = document.querySelector('.total__price');
  const somarButton = document.querySelector('.btn__somar');
  const cartItemsList = document.querySelector('.cart__items');
  const limparButton = document.querySelector('.btn__limpar');

  let metodoDePagamento = btnmetodoDePagamento.value;

  btnmetodoDePagamento.addEventListener('change', () => {
    metodoDePagamento = btnmetodoDePagamento.value;
  });

  const urlImages = {
    cafe: 'https://static.vecteezy.com/system/resources/previews/009/887/134/original/cup-of-coffee-free-png.png',

    chantily:
      'https://img.freepik.com/fotos-premium/cafe-cappuccino_637104-12.jpg?w=2000',

    suco: 'https://img.freepik.com/fotos-premium/copo-de-suco-de-laranja-e-laranjas_159938-2735.jpg',

    sanduiche:
      'https://img.freepik.com/fotos-gratis/sanduiche_1339-1108.jpg?w=360',

    queijo: 'https://www.pngmart.com/files/8/Cheese-PNG-Transparent-Images.png',

    salgado: 'https://salgadosneves.com.br/img/salgado_fumaca.png',

    combo1: 'https://portofit.files.wordpress.com/2012/07/sanduiche.jpg',

    combo2:
      'https://img.freepik.com/fotos-premium/sanduiche-de-caranguejo-presunto-e-cafe-em-fundo-branco_44045-70.jpg',
  };

  cardapioItems.forEach((item) => {
    const itemCard = createItemCard(item);
    itemCard.querySelector('.btn__add').addEventListener('click', () => {
      addItemToCart(item);
    });
    itemsList.appendChild(itemCard);
  });

  somarButton.addEventListener('click', () => {
    calcularValor();
  });

  limparButton.addEventListener('click', () => {
    limparCarrinho();
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

  function addItemToCart(item) {
    const cartItem = createCartItem(item);
    cartItemsList.appendChild(cartItem);
  }

  function createCartItem(item) {
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart__item');

    const image = document.createElement('img');
    image.classList.add('cart__item__image');
    image.src = urlImages[item.codigo];
    cartItem.appendChild(image);

    const description = document.createElement('span');
    description.classList.add('cart__item__description');
    description.textContent = item.codigo;
    cartItem.appendChild(description);

    const quantity = document.createElement('span');
    quantity.classList.add('cart__item__quantity');
    quantity.textContent = `Quant: 1`;
    cartItem.appendChild(quantity);

    const price = document.createElement('span');
    price.classList.add('cart__item__price');
    price.textContent = `Preço: R$ ${item.valor.toFixed(2)}`;
    cartItem.appendChild(price);

    const removeButton = document.createElement('button');
    removeButton.classList.add('btn__remove');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', () => {
      cartItem.remove();
    });
    cartItem.appendChild(removeButton);

    return cartItem;
  }

  function calcularValor() {
    const cartItens = document.querySelectorAll('.cart__item');
    const itens = Array.from(cartItens).map((item) => {
      const codigo = item.querySelector('.cart__item__description').textContent;
      const quantidadeText = item.querySelector(
        '.cart__item__quantity'
      ).textContent;
      const quantidade = Number(quantidadeText.split(' ')[1]);
      const itensFormados = `${codigo}, ${quantidade}`;
      return itensFormados;
    });
    const formatedItens = [...itens];
    console.log('formatedItens', formatedItens);

    const caixaDaLanchonete = new CaixaDaLanchonete();
    const valorTotal = caixaDaLanchonete.calcularValorDaCompra(
      metodoDePagamento,
      itens
    );

    valorTotalElement.textContent = `${valorTotal}`;
  }

  function limparCarrinho() {
    const cartItems = document.querySelectorAll('.cart__item');
    cartItems.forEach((item) => {
      item.remove();
    });
    cartItems.innerHTML = '';
    valorTotalElement.textContent = 'R$ 0.00';
  }
});
