const suma = (a, b) => {
    return a + b;
}

const resto = (a, b) => {
    return a - b;
}

const mult = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    if ( b == 0 ) {
        throw new Error("DIV by 0");
    }
    return a / b;
}

const mcd = (a, b) => {
    var resto = 0;
    while ( a % b != 0 ) {
        resto = a % b;
        a = b;
        b = resto;
    }
    return b;

}

const mcm = (a, b) => {
    var multiplo;
    if ( a > b ) {
        multiplo = a;
    }else {
        multiplo = b;
    }
    while ( (multiplo % a != 0)  || (multiplo % b != 0) ) {
        multiplo++;
    }
    return multiplo;
}

const primo = (a) => {
    var esprimo = true;
    for (i=2; i<a; i++) {
        if ( a % i == 0 ) {
            esprimo = false;
        }
    }
    return esprimo;
}

const coprimo = (a, b) => {
    var escoprimo = true;
    if ( mcd(a,b) == 1 ) {
        escoprimo = true;
    }else {
        escoprimo = false;
    }
    return escoprimo;
}

const raiz = (a) => {
    var radicando = a;
    var result = 1;

    for(i=0; i<25; i++){
        result=result-((result*result-radicando)/(2*result));
    }
    return result;
}

const logaritmo = (a) => {
    var result = 0;

    return result;
}

const exponencial = (a) => {
    var result = 0;

    return result;
}

const redondeo = (a, b) => {
    var result = 0;

    return result;
}




module.exports = {
    suma,
    resto,
    mult,
    div,
    mcd,
    mcm,
    primo,
    coprimo,
    raiz,
    logaritmo,
    exponencial,
    redondeo
}