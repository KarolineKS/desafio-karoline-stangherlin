import { Cardapio } from './cardapio-da-lanchonete.js';

class Pedido {
  #itensCarrinho;

  constructor() {
    this.#itensCarrinho = [];
  }

  adicionarItensCarrinho(itens) {
    if (!itens || itens.length === 0) {
      throw new Error('Não há itens no carrinho de compra!');
    }

    const itensSelecionados = itens.map((itemStr) => {
      const [itemCodigo, quantidade] = itemStr.split(',');

      if (quantidade <= 0) {
        throw new Error('Quantidade inválida!');
      }

      const itemInfo = new Cardapio().buscarItem(itemCodigo);

      return { ...itemInfo, quantidade: Number(quantidade) };
    });

    this.#itensCarrinho = [...this.#itensCarrinho, ...itensSelecionados];
    this.#itensCarrinho.forEach((item) => this.#verificarItemExtra(item));
  }

  #verificarItemExtra(itensInfo) {
    if (itensInfo.tipo === 'extra') {
      const itemPrincipal = this.#itensCarrinho.find(
        (produto) => produto.codigo === itensInfo.principalRequerido
      );

      if (!itemPrincipal) {
        throw new Error('Item extra não pode ser pedido sem o principal');
      }
    }
  }

  calcularValorPedido() {
    return this.#itensCarrinho.reduce((acc, item) => {
      const { valor, quantidade } = item;
      return acc + Number(valor) * quantidade;
    }, 0);
  }
}

export { Pedido };
