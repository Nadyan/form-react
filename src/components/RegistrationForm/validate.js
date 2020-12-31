/* Social ID number validator
 - CPF in Brazil follows this rules to be valid.
*/

export default function validaCPF(cpf) {
    return(
        verificaPrimeiroDigito(cpf)
        &&
        verificaSegundoDigito(cpf)
        &&
        verificaCPFInvalido(cpf)
    );
}

function verificaCPFInvalido(cpf) {
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ];

    return cpfsInvalidos.indexOf(cpf) === -1;
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11;
    const totalDigitosPrimeiraParte = 9;
    
    const digitoDeVerificacao = parseInt(cpf.substring(9, 10));

    return verificaDigito(cpf, totalDigitosPrimeiraParte, peso, digitoDeVerificacao);
}

function verificaSegundoDigito(cpf) {
    const peso = 12;
    const totalDigitosSegundaParte = 10;

    const digitoDeVerificacao = parseInt(cpf.substring(10, 11));

    return verificaDigito(cpf, totalDigitosSegundaParte, peso, digitoDeVerificacao);
}

function verificaDigito(cpf, totalDigitos, peso, digitoDeVerificacao) {
    const soma = somaNumeros(cpf, totalDigitos, peso);
    const resto = (soma * 10) % 11;

    return resto === digitoDeVerificacao;
}

function somaNumeros(cpf, nDigitos, peso) {
    let soma = 0;
    for (let i = 1; i <= nDigitos; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (peso - i);
    }
    
    return soma;
}

export function handleValidate(value, id) {
        
    let valid = true;
    let text = '';

    if (id === 'email') {
        var re = /\S+@\S+\.\S+/; // regular expression
        if (!re.test(value)) {
            valid = false;
            text = 'Invalid e-mail.';
        }
    } else if (id === 'password') {
        if (value.length < 8) {
            valid = false;
            text ="Password must have at least 8 characters"
        }
    }

    if (id === 'socialId') {

        if (value.length !== 11) {
            valid = false;
            text = 'Social ID must have 11 digits';
        }
        else if (!validaCPF(value)) {
            valid = false;
            text = 'Social ID number is invalid'
        }
    } else if (id === 'firstName') {
        if (value.length === 0) {
            valid = false;
            text ="First name can't be blank"
        }
    } else if (id === 'lastName') {
        if (value.length === 0) {
            valid = false;
            text ="Last name can't be blank"
        }
    }

    return {valid: valid, text: text};
}
