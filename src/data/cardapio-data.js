const cardapioData = [
  {
    codigo: 'cafe',
    descricão: 'Café',
    valor: 3.00,
    tipo: 'principal',
  },
  {
    codigo: 'chantily',
    descricão: 'Chantilly (extra do Café)',
    valor: 1.50,
    tipo: 'extra',
    principalRequerido: 'cafe',
  },
  {
    codigo: 'suco',
    descricao: 'Suco Natural',
    valor: 6.20,
    tipo: 'principal',
  },
  {
    codigo: 'sanduiche',
    descricao: 'Sanduíche',
    valor: 6.50,
    tipo: 'principal',
  },
  {
    codigo: 'queijo',
    descricao: 'Queijo (extra do Sanduíche)',
    valor: 2.00,
    tipo: 'extra',
    principalRequerido: 'sanduiche',
  },
  {
    codigo: 'salgado',
    descricao: 'Salgado',
    valor: 7.50,
    tipo: 'principal',
  },
  {
    codigo: 'combo1',
    descricao: '1 Suco e 1 Sanduíche',
    valor: 9.50,
  },
  {
    codigo: 'combo2',
    descricao: '1 Café e 1 Sanduíche',
    valor: 7.50,
  },
];

export { cardapioData };
