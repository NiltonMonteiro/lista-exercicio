// Função para criar objetos Pessoa
function criarPessoa(nome, idade, profissao) {
    return {
      nome,
      idade,
      profissao,
  
      // Método para saudar
      saudar() {
        return `Olá, meu nome é ${this.nome}!`;
      },
  
      // Método para mostrar informações
      mostrarInfo() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`;
      }
    };
  }
  
  // Exemplo de uso
  
  // Criando várias pessoas
  const pessoa1 = criarPessoa("Alice", 28, "Desenvolvedora");
  const pessoa2 = criarPessoa("Bruno", 35, "Designer");
  const pessoa3 = criarPessoa("Carlos", 42, "Gerente");
  
  // Testando os métodos
  console.log("\n=== Saudações ===");
  console.log(pessoa1.saudar());
  console.log(pessoa2.saudar());
  console.log(pessoa3.saudar());
  
  console.log("\n=== Informações ===");
  console.log(pessoa1.mostrarInfo());
  console.log(pessoa2.mostrarInfo());
  console.log(pessoa3.mostrarInfo());
  