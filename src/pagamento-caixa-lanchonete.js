class Pagamento {
  #metodoDePagamento;

  constructor() {
    this.#metodoDePagamento = ['dinheiro', 'credito', 'debito'];
  }

  set adicionarMetodoDePagamento(metodoDePagamento) {
    this.#metodoDePagamento.push(metodoDePagamento);
  }

  set removerMetodoDePagamento(metodoDePagamento) {
    const index = this.#metodoDePagamento.indexOf(metodoDePagamento);
    this.#metodoDePagamento.splice(index, 1);
  }

  get mostrarMetodosDePagamento() {
    return this.#metodoDePagamento;
  }

  #verificaPagamento(metodoDePagamento) {
    const validaMetodoPagamento = this.#metodoDePagamento
      .includes(metodoDePagamento);

    if (!validaMetodoPagamento) {
      throw new Error('Método de pagamento inválido');
    }
  }

  aplicarTaxas(metodoDePagamento, valorTotal) {
    this.#verificaPagamento(metodoDePagamento);

    if (metodoDePagamento === 'dinheiro') {
      return (valorTotal * 0.95).toFixed(2);
    }

    if (metodoDePagamento === 'credito') {
      return (valorTotal * 1.05).toFixed(2);
    }

    return valorTotal.toFixed(2);
  }
}

export { Pagamento };
