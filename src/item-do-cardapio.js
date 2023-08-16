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

// testes manuais da classe Item

/* const cafe = new Item('cafe', 'Café', 7.0, 'principal')
const chantily = new Item('chantily', 'Chantily', 3.0, 'adicional', 'cafe')

console.log(cafe.tipo);
console.log(cafe.valor);
console.log(chantily.principalRequerido);

cafe.valor = 8.0;
console.log(cafe.valor); */
