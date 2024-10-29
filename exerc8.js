// Classe base Funcionario
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    getDetalhes() {
      return `${this.nome} - Salário: R$${this.salario}`;
    }
  }
  
  // Subclasse Desenvolvedor com projetoAtual
  class Desenvolvedor extends Funcionario {
    constructor(nome, salario, projetoAtual) {
      super(nome, salario);
      this.projetoAtual = projetoAtual;
    }
  
    getDetalhes() {
      return `${super.getDetalhes()} - Projeto Atual: ${this.projetoAtual}`;
    }
  }
  
  // Subclasse Designer com portfólio
  class Designer extends Funcionario {
    constructor(nome, salario, portifolio) {
      super(nome, salario);
      this.portifolio = portifolio;
    }
  
    getDetalhes() {
      return `${super.getDetalhes()} - Portfólio: ${this.portifolio}`;
    }
  }
  
  // Classe Departamento que armazena uma lista de funcionários
  class Departamento {
    constructor(nome) {
      this.nome = nome;
      this.funcionarios = [];
    }
  
    adicionarFuncionario(funcionario) {
      this.funcionarios.push(funcionario);
      console.log(`Funcionário ${funcionario.nome} adicionado ao departamento ${this.nome}.`);
    }
  
    removerFuncionario(nome) {
      const index = this.funcionarios.findIndex(f => f.nome === nome);
      if (index !== -1) {
        const [removido] = this.funcionarios.splice(index, 1);
        console.log(`Funcionário ${removido.nome} removido do departamento ${this.nome}.`);
      } else {
        console.log(`Funcionário ${nome} não encontrado no departamento ${this.nome}.`);
      }
    }
  
    listarFuncionarios() {
      console.log(`\nDepartamento: ${this.nome} - Funcionários:`);
      if (this.funcionarios.length > 0) {
        this.funcionarios.forEach(func => console.log(func.getDetalhes()));
      } else {
        console.log("Nenhum funcionário no departamento.");
      }
    }
  }
  
  // Exemplo de uso
  
  // Criação do departamento
  const departamentoTI = new Departamento("Tecnologia da Informação");
  
  // Criação de funcionários
  const dev1 = new Desenvolvedor("Alice", 5000, "App Mobile");
  const dev2 = new Desenvolvedor("Carlos", 6000, "Site Web");
  const designer1 = new Designer("Bob", 4500, "Behance Portfolio");
  
  // Adicionando funcionários ao departamento
  console.log("\n=== Adicionando Funcionários ===");
  departamentoTI.adicionarFuncionario(dev1);
  departamentoTI.adicionarFuncionario(dev2);
  departamentoTI.adicionarFuncionario(designer1);
  
  // Listando todos os funcionários
  console.log("\n=== Listagem de Funcionários ===");
  departamentoTI.listarFuncionarios();
  
  // Removendo um funcionário
  console.log("\n=== Removendo Funcionário ===");
  departamentoTI.removerFuncionario("Alice");
  
  // Listando novamente após a remoção
  console.log("\n=== Listagem de Funcionários Atualizada ===");
  departamentoTI.listarFuncionarios();
  
  // Tentando remover um funcionário inexistente
  console.log("\n=== Tentativa de Remoção de Funcionário Inexistente ===");
  departamentoTI.removerFuncionario("João");
  