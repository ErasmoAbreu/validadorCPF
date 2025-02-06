class ValidaCPF {
    constructor(cpfEnviado) {
        // Define a propriedade cpfLimpo removendo todos os caracteres não numéricos do CPF recebido
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,    // Não pode ser alterado
            enumerable: true,   // Pode ser listado em loops
            configurable: false,// Não pode ser reconfigurado
            value: cpfEnviado.replace(/\D+/g, '') // Remove tudo que não for número
        });
    }

    // Método estático para gerar um dígito verificador do CPF
    static geradorCPF(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1; // Começa com 10 para o primeiro dígito e 11 para o segundo

        // Percorre cada número do CPF (exceto os dígitos verificadores)
        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica); // Multiplica cada número pelo contador regressivo
            reverso--; // Decrementa o contador
        }

        // Calcula o dígito verificador com a regra do módulo 11
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'; // Se for maior que 9, retorna '0'
    }

    // Método para verificar se o CPF é uma sequência (ex: "11111111111", "22222222222")
    Sequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    // Método que gera um novo CPF com base nos 9 primeiros dígitos, calculando os verificadores
    gerandoNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); // Pega os 9 primeiros dígitos
        const digito1 = ValidaCPF.geradorCPF(cpfSemDigitos); // Gera o primeiro dígito verificador
        const digito2 = ValidaCPF.geradorCPF(cpfSemDigitos + digito1); // Gera o segundo dígito verificador
        this.novoCPF = cpfSemDigitos + digito1 + digito2; // Concatena para formar o CPF completo
    }

    // Método principal que valida o CPF
    valida() {
        if(!this.cpfLimpo) return false; // Se não existir, retorna falso
        if(typeof this.cpfLimpo !== 'string') return false; // Se não for string, retorna falso
        if(this.cpfLimpo.length !== 11) return false; // Se não tiver 11 caracteres, retorna falso
        if(this.Sequência()) return false; // Se for uma sequência repetida, retorna falso
        this.gerandoNovoCpf(); // Gera o CPF válido baseado nos 9 primeiros dígitos

        return this.novoCPF === this.cpfLimpo; // Compara o CPF gerado com o original
    }
}

// Criando uma instância da classe ValidaCPF e passando um CPF como argumento
let validacpf = new ValidaCPF('070.987.720-03');

// Verificando se o CPF é válido e exibindo o resultado no console
if (validacpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
