# 🛡️ Validador de CPF - JavaScript (POO)
Este projeto apresenta uma implementação robusta em JavaScript para a validação de números de CPF (Cadastro de Pessoas Físicas). O código utiliza o paradigma de Programação Orientada a Objetos (POO) e implementa o algoritmo oficial de dígitos verificadores (Módulo 11).

### 🚀 Funcionalidades
Sanitização Automática: Remove automaticamente pontos, hífens e quaisquer caracteres não numéricos através de Expressões Regulares (Regex).

Tratamento de Imutabilidade: Utiliza Object.defineProperty para garantir que o CPF limpo não seja alterado acidentalmente durante a execução.

Detecção de Sequências: Identifica e invalida números compostos por dígitos repetidos (ex: 111.111.111-11), que são matematicamente válidos pelo algoritmo, mas inválidos pela Receita Federal.

Algoritmo Módulo 11: Implementação precisa do cálculo dos dois dígitos verificadores.

Validação de Tipo e Extensão: Verifica se a entrada possui exatamente 11 dígitos e se é uma string válida.

### 🛠️ Tecnologias Utilizadas
JavaScript (ES6+): Uso de classes, métodos estáticos e novos métodos de string (como .repeat()).

Regex: Para limpeza e processamento de dados.

### 🔧 Como Utilizar
Importe ou copie a classe para o seu projeto.

Instancie a classe passando o CPF (com ou sem formatação) como argumento.

Chame o método .valida().

JavaScript
const validador = new ValidaCPF('123.456.789-00');

if (validador.valida()) {
    console.log('O CPF informado é válido.');
} else {
    console.log('O CPF informado é inválido.');
}

### 🧠 Aprendizados Demonstrados
Aplicação de Métodos Estáticos para lógicas que não dependem de dados da instância.

Manipulação de Propriedades de Objeto (writable, enumerable) para maior segurança do código.

Lógica algorítmica aplicada à segurança de dados e validação de regras de negócio.
