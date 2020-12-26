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