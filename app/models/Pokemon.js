export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickname = data.name
        this.img = data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = []
        data.types.forEach(type => {
            this.types.push(type.type.name)
        });
    }

    get activeHTMLTemplate(){
        return(``)
    }
}
