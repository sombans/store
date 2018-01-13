import { Products } from './product';



export class Buyers {
    id;
    ime;
    prezime;
    email;
    kupljeno: Array<Products>;


    constructor(id, ime, prezime, email, kupljeno) {

        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.kupljeno = kupljeno;
        return this;

    }

}
