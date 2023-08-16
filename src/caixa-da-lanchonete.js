import { Pedido } from './pedido-caixa-lanchonete.js';
import { Pagamento } from './pagamento-caixa-lanchonete.js';

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    try {
      const pedido = new Pedido();
      pedido.adicionarItensCarrinho(itens);

      const valorPedido = pedido.calcularValorPedido();
      console.log('valorPedido', valorPedido);
      const valorPagamento = new Pagamento().aplicarTaxas(
        metodoDePagamento,
        valorPedido
      );

      const valorFormatado = Number(valorPagamento)
        .toFixed(2)
        .replace('.', ',');

      return `R$ ${valorFormatado}`;
    } catch (error) {
      return error.message;
    }
  }
}

export { CaixaDaLanchonete };
