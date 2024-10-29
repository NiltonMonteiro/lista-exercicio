// Classe ContaBancaria
class ContaBancaria {
    // Propriedades privadas (utilizando convenção de nomeação)
    #saldo;
    #titular;
  
    // Construtor da classe
    constructor(titular) {
      this.#titular = titular;
      this.#saldo = 0; // Inicializa o saldo como 0
    }
  
    // Método para depositar uma quantia
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
      } else {
        console.log("O valor do depósito deve ser positivo.");
      }
    }
  
    // Método para sacar uma quantia
    sacar(valor) {
      if (valor > 0 && valor <= this.#saldo) {
        this.#saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
      } else {
        console.log("Saldo insuficiente ou valor inválido para saque.");
      }
    }
  
    // Método para ver o saldo atual
    verSaldo() {
      return `Saldo atual da conta de ${this.#titular}: R$${this.#saldo.toFixed(2)}`;
    }
  }
  
  // Exemplo de uso
  
  // Criação de uma conta bancária
  const contaAlice = new ContaBancaria("Alice");
  
  // Exibindo saldo inicial
  console.log(contaAlice.verSaldo());
  
  // Realizando depósitos
  console.log("\n=== Realizando Depósitos ===");
  contaAlice.depositar(1000);
  console.log(contaAlice.verSaldo());
  contaAlice.depositar(500);
  console.log(contaAlice.verSaldo());
  
  // Tentativa de saque
  console.log("\n=== Realizando Saques ===");
  contaAlice.sacar(300);
  console.log(contaAlice.verSaldo());
  contaAlice.sacar(1500); // Saque maior que o saldo
  
  // Exibindo saldo final
  console.log("\n=== Saldo Final ===");
  console.log(contaAlice.verSaldo());
  