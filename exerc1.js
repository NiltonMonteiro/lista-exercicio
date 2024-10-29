// Objeto literal livro
const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
  
    // Método para obter informações do livro
    getInfo() {
      return `Título: "${this.titulo}", Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
    },
  
    // Método para verificar se o livro é clássico
    isClassico() {
      return this.anoPublicacao < 1990;
    }
  };
  
  // Exibindo informações do livro
  console.log("\n=== Informações do Livro ===");
  console.log(livro.getInfo());
  
  // Verificando se o livro é clássico
  console.log("\n=== Verificação de Clássico ===");
  if (livro.isClassico()) {
    console.log(`"${livro.titulo}" é um clássico da literatura.`);
  } else {
    console.log(`"${livro.titulo}" não é um clássico.`);
  }
  