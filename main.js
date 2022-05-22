class Taiyaki {


    constructor(name) {
        this.name = name;
    }

    contents() {
        console.log(`中身は${this.name}です`);
    }
}
let tastes = new Taiyaki('あんこ');
tastes.contents();