
export class Products {
    
    id: string;
    naziv: string;
    lager: string;
    

    constructor(id: string, naziv: string, lager: string) {

        this.id = id;
        this.naziv = naziv;
        this.lager = lager;
        return this;

    }
}
