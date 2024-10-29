// Classe ItemInventario
class ItemInventario {
    constructor(nome, quantidade, preco) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
    }
  
    // Método para calcular o valor total com base na quantidade e preço
    calcularValorTotal() {
      return this.quantidade * this.preco;
    }
  
    // Método para exibir detalhes do item
    getDetalhes() {
      return `${this.nome} - Quantidade: ${this.quantidade}, Preço: R$${this.preco.toFixed(2)}, Valor Total: R$${this.calcularValorTotal().toFixed(2)}`;
    }
  }
  
  // Objeto literal inventario contendo vários itens e métodos para gestão
  const inventario = {
    itens: [],
  
    // Método para adicionar um item ao inventário
    adicionarItem(item) {
      this.itens.push(item);
      console.log(`Item "${item.nome}" adicionado ao inventário.`);
    },
  
    // Método para calcular o valor total de todos os itens no inventário
    calcularValorTotalInventario() {
      let valorTotal = 0;
      this.itens.forEach(item => {
        valorTotal += item.calcularValorTotal();
      });
      return valorTotal;
    },
  
    // Método para listar todos os itens no inventário com seus detalhes
    listarItens() {
      console.log("\n=== Inventário ===");
      if (this.itens.length > 0) {
        this.itens.forEach(item => console.log(item.getDetalhes()));
      } else {
        console.log("O inventário está vazio.");
      }
    },
  
    // Método para exibir o valor total de todos os itens no inventário
    exibirValorTotal() {
      console.log(`\nValor Total do Inventário: R$${this.calcularValorTotalInventario().toFixed(2)}`);
    }
  };
  
  // Exemplo de uso
  const item1 = new ItemInventario("Caneta", 100, 1.5);
  const item2 = new ItemInventario("Caderno", 50, 10);
  const item3 = new ItemInventario("Lápis", 200, 0.5);
  
  console.log("\n=== Adicionando Itens ao Inventário ===");
  inventario.adicionarItem(item1);
  inventario.adicionarItem(item2);
  inventario.adicionarItem(item3);
  
  console.log("\n=== Listagem de Itens no Inventário ===");
  inventario.listarItens();
  
  console.log("\n=== Valor Total do Inventário ===");
  inventario.exibirValorTotal();
  