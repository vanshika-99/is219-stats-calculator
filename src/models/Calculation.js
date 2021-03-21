class Calculation {
    constructor(a, b, c, d, op) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.op = op;
    }

    static Create(a, b, c, d, op){
        return new Calculation(a, b, c, d, op);
    }

    getResults() {
        return this.op(this.a,this.b, this.c, this.d);
    }
}
module.exports = Calculation;