const assert = require("assert");
const op = require("../operaciones");

/* GLOBAL VARIABLE */
let a;
let b;

// EXECUTE BEFORE ALL TEST
before(() => {
    a = 0;
    b = 0;
    console.log("BEFORE ALL", a ,b );
});

describe("Operaciones", () => {
    // EXECUTE BEFORE EACH TEST
    beforeEach(() => {
        console.log("BeforeEach", a ,b);
        a = getIntRandom(0, 1000);
        b = getIntRandom(1000, 2000);
    });
    // EXECUTE AFTER EACH TEST
    afterEach(() => {
        console.log("AfterEach", a, b);
        a = 0;
        b = 0;
    });

    it("Test Suma", () => {
        console.log(a, b);
        let res = op.suma(a, b);

        assert.ok( res >= 0);
        assert.equal(res, a + b);
    });

    it("Test Resta", () => {
        console.log(a, b);
        let res = op.resto(a, b); // -3

        assert.equal(res, a - b);
    });

    it("Test Div by zero", () => {
        console.log(a, b);
        try {
            let res = op.div(a, 0);
            assert.ok(false);
        }catch(e) {
            assert.ok(true);
        }
    });

    it("Maximo comun multiplo", () => {
        console.log(a, b);
        let res = op.mcm(a, b);
        assert.ok( res > 0 );
    });

    it("Maximo comun divisor", () => {
        console.log(a, b);
        let res = op.mcd(a, b);
        assert.ok( res > 0 );
    });

    it("Numero primo", () => {
        console.log(a);
        let res = op.primo(a);
        assert.ok( res == true );
    });

    it("Numero COprimo", () => {
        console.log(a, b);
        let res = op.coprimo(a, b);
        assert.ok( res == true );
    });

    it("Raiz cuadrada", () => {
        console.log(a);
        let res = op.raiz(a);
        console.log(res, " ", Math.sqrt(a));
        assert.equal( res, Math.sqrt(a) );
    });

    

});

// EXECUTE AFTER ALL TEST
after(() => {
    a = 0;
    b = 0;
    console.log("AFTER ALL", a, b);
});

function getIntRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}