// Classe base Funcionario
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    // Método para calcular o salário (sem bônus)
    calcularSalario() {
      return this.salario;
    }
  
    // Método para exibir detalhes do funcionário
    getDetalhes() {
      return `${this.nome} - Salário: R$${this.calcularSalario().toFixed(2)}`;
    }
  }
  
  // Subclasse Gerente com cálculo de salário incluindo bônus
  class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
      super(nome, salario);
      this.bonus = bonus;
    }
  
    // Método de cálculo de salário com inclusão do bônus
    calcularSalario() {
      return this.salario + this.bonus;
    }
  
    // Método para exibir detalhes do gerente, incluindo o bônus
    getDetalhes() {
      return `${this.nome} - Salário Base: R$${this.salario.toFixed(2)}, Bônus: R$${this.bonus.toFixed(2)}, Salário Total: R$${this.calcularSalario().toFixed(2)}`;
    }
  }
  
  // Exemplo de uso
  
  // Criação de instâncias de Funcionario e Gerente
  const funcionario1 = new Funcionario("Alice", 3000);
  const gerente1 = new Gerente("Carlos", 5000, 2000);
  
  // Exibindo detalhes do funcionário e do gerente
  console.log("\n=== Detalhes dos Funcionários ===");
  console.log(funcionario1.getDetalhes());
  console.log(gerente1.getDetalhes());
  