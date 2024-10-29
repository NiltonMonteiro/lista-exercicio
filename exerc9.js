class Quarto {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
        this.reservado = false; // Por padrão, o quarto está disponível
    }

    getPreco() {
        return 0; // Preço padrão, será sobrescrito nas subclasses
    }

    reservar() {
        if (!this.reservado) {
            this.reservado = true;
            console.log(`Quarto ${this.numero} (${this.tipo}) reservado com sucesso.`);
        } else {
            console.log(`Quarto ${this.numero} (${this.tipo}) já está reservado.`);
        }
    }

    cancelarReserva() {
        if (this.reservado) {
            this.reservado = false;
            console.log(`Reserva do quarto ${this.numero} (${this.tipo}) foi cancelada.`);
        } else {
            console.log(`Quarto ${this.numero} (${this.tipo}) não está reservado.`);
        }
    }
}

class QuartoSimples extends Quarto {
    constructor(numero) {
        super(numero, "Simples");
    }

    getPreco() {
        return 100; // Preço específico para Quarto Simples
    }
}

class SuiteLuxo extends Quarto {
    constructor(numero) {
        super(numero, "Luxo");
    }

    getPreco() {
        return 300; // Preço específico para Suíte Luxo
    }
}

class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartos = [];
    }

    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
        console.log(`Quarto ${quarto.numero} (${quarto.tipo}) adicionado ao hotel.`);
    }

    realizarReserva(numero) {
        const quarto = this.quartos.find(q => q.numero === numero);
        if (quarto) {
            quarto.reservar();
        } else {
            console.log(`Quarto ${numero} não encontrado.`);
        }
    }

    cancelarReserva(numero) {
        const quarto = this.quartos.find(q => q.numero === numero);
        if (quarto) {
            quarto.cancelarReserva();
        } else {
            console.log(`Quarto ${numero} não encontrado.`);
        }
    }

    verDisponibilidade() {
        console.log("Quartos disponíveis:");
        this.quartos.forEach(quarto => {
            if (!quarto.reservado) {
                console.log(`- Quarto ${quarto.numero} (${quarto.tipo}), Preço: R$${quarto.getPreco()}`);
            }
        });
    }
}

// Exemplo de uso
const hotel = new Hotel("Hotel dos Sonhos", "Rio de Janeiro");
const quarto1 = new QuartoSimples(101);
const quarto2 = new QuartoSimples(102);
const suite1 = new SuiteLuxo(201);

hotel.adicionarQuarto(quarto1);
hotel.adicionarQuarto(quarto2);
hotel.adicionarQuarto(suite1);

console.log("\n=== Reservas de Quartos ===");
hotel.realizarReserva(101); // Reserva o quarto 101
hotel.realizarReserva(201); // Reserva a suíte 201
hotel.realizarReserva(101); // Tenta reservar novamente o quarto 101 (já reservado)

console.log("\n=== Cancelamento de Reservas ===");
hotel.cancelarReserva(101); // Cancela a reserva do quarto 101
hotel.cancelarReserva(102); // Tenta cancelar a reserva do quarto 102 (não reservado)

console.log("\n=== Disponibilidade de Quartos ===");
hotel.verDisponibilidade(); // Exibe quartos disponíveis e preços
