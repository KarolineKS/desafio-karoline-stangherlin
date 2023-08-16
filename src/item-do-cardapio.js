class Item {
  #codigo;
  #descricao;
  #valor;
  #tipo;
  #principalRequerido;

  constructor(codigo, descricao, valor, tipo, principalRequerido) {
    this.#codigo = codigo;
    this.#descricao = descricao;
    this.#valor = valor;
    this.#tipo = tipo || '';
    this.#principalRequerido = principalRequerido || '';
  }

  get codigo() {
    return this.#codigo;
  }

  get descricao() {
    return this.#descricao;
  }

  set descricao(valor) {
    this.#descricao = valor;
  }

  get valor() {
    return this.#valor;
  }

  set valor(valor) {
    this.#valor = valor;
  }

  get tipo() {
    return this.#tipo;
  }

  get principalRequerido() {
    return this.#principalRequerido;
  }
}

export { Item };
