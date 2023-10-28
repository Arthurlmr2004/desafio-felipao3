class Hero {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago = new Hero("Merlin", "mago");
mago.atacar();

let guerreiro = new Hero("Conan", "guerreiro");
guerreiro.atacar();

let monge = new Hero("Bruce", "monge");
monge.atacar();

let ninja = new Hero("Hanzo", "ninja");
ninja.atacar();
