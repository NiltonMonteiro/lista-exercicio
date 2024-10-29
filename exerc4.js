// Classe Produto
class Produto {
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
    }
  
    // Método para mostrar detalhes do produto
    mostrarDetalhes() {
      return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
    }
  }
  
  // Classe Eletronico que herda de Produto
  class Eletronico extends Produto {
    constructor(nome, preco, categoria, garantia) {
      super(nome, preco, categoria); // Chama o construtor da classe pai
      this.garantia = garantia; // Propriedade específica da classe Eletronico
    }
  
    // Método sobrescrito para incluir a garantia nas informações
    mostrarDetalhes() {
      return `${super.mostrarDetalhes()}, Garantia: ${this.garantia} anos`;
    }
  }
  
  // Exemplo de uso
  
  // Criação de uma instância de Eletronico
  const celular = new Eletronico("Smartphone", 1500, "Eletrônicos", 2);
  
  // Exibindo detalhes do eletrônico
  console.log("\n=== Detalhes do Produto Eletrônico ===");
  console.log(celular.mostrarDetalhes());
  