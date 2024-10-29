class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.disponivel = true; // Por padrão, o livro está disponível
    }
}

class Biblioteca {
    constructor() {
        this.livros = []; // Lista para armazenar os livros
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }

    emprestarLivro(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo && l.disponivel);
        if (livro) {
            livro.disponivel = false;
            console.log(`O livro "${titulo}" foi emprestado com sucesso.`);
        } else {
            console.log(`O livro "${titulo}" não está disponível para empréstimo.`);
        }
    }

    devolverLivro(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo && !l.disponivel);
        if (livro) {
            livro.disponivel = true;
            console.log(`O livro "${titulo}" foi devolvido com sucesso.`);
        } else {
            console.log(`O livro "${titulo}" não foi encontrado como emprestado.`);
        }
    }

    listarLivrosDisponiveis(genero) {
        const livrosDisponiveis = this.livros.filter(livro => livro.disponivel && (!genero || livro.genero === genero));
        if (livrosDisponiveis.length > 0) {
            console.log("Livros disponíveis:");
            livrosDisponiveis.forEach(livro => {
                console.log(`- ${livro.titulo} (${livro.genero}) por ${livro.autor}`);
            });
        } else {
            console.log(`Nenhum livro disponível${genero ? ` no gênero ${genero}` : ""}.`);
        }
    }
}

// Exemplo de uso
const biblioteca = new Biblioteca();
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", "Romance");
const livro2 = new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis", "Ficção");
const livro3 = new Livro("O Alienista", "Machado de Assis", "Comédia");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

console.log("\n=== Empréstimo de Livros ===");
biblioteca.emprestarLivro("Dom Casmurro");
biblioteca.emprestarLivro("O Alienista");

console.log("\n=== Devolução de Livros ===");
biblioteca.devolverLivro("Dom Casmurro");

console.log("\n=== Listagem de Livros Disponíveis ===");
biblioteca.listarLivrosDisponiveis(); // Todos os livros disponíveis
console.log("\n=== Listagem de Livros Disponíveis por Gênero ===");
biblioteca.listarLivrosDisponiveis("Ficção"); // Livros disponíveis do gênero "Ficção"
