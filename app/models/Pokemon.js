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
        return(`<div>
                <h2>${this.name}</h2>
                <img src="${this.img}"
                    alt="${this.name}" class="img-fluid">
                <div>
                    <div class="d-flex justify-content-between">
                        <p>Height: ${this.height}</p>
                        <p>Weight: ${this.weight} lbs</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Types: ${this.types}</p>
                        <button class="btn btn-outline-danger rounded">Catch</button>
                    </div>
                </div>
            </div>`)
    }
}
