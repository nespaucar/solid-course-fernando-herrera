type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}

    isProductReady(): boolean {
        for(const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if((<string><unknown>this[key]).length == 0) throw Error(`${typeof this[key]} is empty`);
                    break;
                case 'number':
                    if((<number><unknown>this[key]) == 0) throw Error(`${typeof this[key]} is zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }

    toString() {
        // NO DRY

        // Si tuvieramos tantas propiedades, debemos poner mas condiciones aqui
        //if(this.name.length == 0) throw Error('name is empty');
        //if(this.price <= 0) throw Error('price is zero');
        //if(this.size.length == 0) throw Error('size is empty');

        // Mejor solo invocamos una funcion que se encargue de esa logica

        if(!this.isProductReady()) return;

        return `${this.name} (${this.price}) ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pats', 10, 'M');
    console.log(bluePants.toString());
})()