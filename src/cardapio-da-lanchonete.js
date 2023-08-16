import { Item } from './item-do-cardapio.js';
import { cardapioData } from './data/cardapio-data.js';

class Cardapio {
  #cardapio = [] ;

  constructor() {
    this.#cardapio = cardapioData.map((item) => new Item(item.codigo,
      item.descricao,
      item.valor,
      item.tipo,
      item.principalRequerido));
  }

  get gerarCardapio() {
    return this.#cardapio.map((item) => {
      return {
        codigo: item.codigo,
        descricao: item.descricao,
        valor: item.valor,
        tipo: item.tipo,
        principalRequerido: item.principalRequerido,
      };
    });
  }

  adicionarItem(item) {
    const novoItem = new Item(
      item.codigo,
      item.descricao,
      item.valor,
      item.tipo,
      item.principalRequerido
    );
  
    const itemExistente = this.#cardapio.find((produto) => produto.codigo === novoItem.codigo);
    if (itemExistente) {
      throw new Error('Item já existente!');
    }
  
    this.#cardapio.push(novoItem);
    return 'Item adicionado com sucesso!';
  }

  buscarItem(codigo) {
    const item = this.#cardapio.find((produto) => produto.codigo === codigo);
    if (!item) {
      throw new Error('Item inválido!');
    }
    return {
      codigo: item.codigo,
      descricao: item.descricao,
      valor: item.valor,
      tipo: item.tipo,
      principalRequerido: item.principalRequerido,
    };
  }

  removerItem(codigo) {
    const item = this.buscarItem(codigo);
    const index = this.#cardapio.indexOf(item);
    this.#cardapio.splice(index, 1);
    return 'Item removido com sucesso!';
  }

  modificarItem(codigo, item) {
    const itemExistente = this.buscarItem(codigo);

    if(!itemExistente) {
      throw new Error('Item inválido!');
    }
    const {descricao, valor} = item;

    itemExistente.descricao = descricao;
    itemExistente.valor = valor;

    return 'Item modificado com sucesso!';
  }
}

export { Cardapio };

// Testes manuais da classe Cardapio

/* const cardapio = new Cardapio();
console.log("cardapio antigo",cardapio.gerarCardapio);

cardapio.adicionarItem({
  codigo: 'pizza',
  descricao: 'Pizza',
  valor: 10.00,
  tipo: 'principal',
})

console.log(cardapio.gerarCardapio);

cardapio.removerItem('pizza');
console.log(cardapio.gerarCardapio);

console.log("buscar item",cardapio.buscarItem('cafe')); */