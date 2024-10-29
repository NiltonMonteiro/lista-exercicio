// Classe Produto
class Produto {
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
    }
  
    // Método para aplicar desconto
    aplicarDesconto(percentual) {
      if (percentual > 0 && percentual <= 100) {
        const desconto = (this.preco * percentual) / 100;
        this.preco -= desconto; // Reduz o preço com base no desconto
        console.log(`Desconto de ${percentual}% aplicado!`);
      } else {
        console.log("Percentual de desconto inválido. Deve ser entre 0 e 100.");
      }
    }
  
    // Método para mostrar detalhes do produto
    mostrarDetalhes() {
      return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
    }
  }
  
  // Exemplo de uso
  
  // Criação de uma instância de Produto
  const produto1 = new Produto("Notebook", 3000, "Eletrônicos");
  
  // Exibindo detalhes do produto antes do desconto
  console.log("\n=== Detalhes do Produto Antes do Desconto ===");
  console.log(produto1.mostrarDetalhes());
  
  // Aplicando um desconto de 10%
  produto1.aplicarDesconto(10);
  
  // Exibindo detalhes do produto após o desconto
  console.log("\n=== Detalhes do Produto Após o Desconto ===");
  console.log(produto1.mostrarDetalhes());
  