class ValidaCPF {
    constructor(cpfEnviado) {
      Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, '')
      });
    }
  
    static geradorCPF(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
  
      for(let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }
  
    Sequência() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    gerandoNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCPF.geradorCPF(cpfSemDigitos);
      const digito2 = ValidaCPF.geradorCPF(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  
  
    valida() {
      if(!this.cpfLimpo) return false;
      if(typeof this.cpfLimpo !== 'string') return false;
      if(this.cpfLimpo.length !== 11) return false;
      if(this.Sequência()) return false;
      this.gerandoNovoCpf();
  
      return this.novoCPF === this.cpfLimpo;
    }
  }
  
  let validacpf = new ValidaCPF('070.987.720-03');
  
  if (validacpf.valida()) {
    console.log('CPF válido');
  } else {
    console.log('CPF inválido');
  }