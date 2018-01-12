import { Products } from "./product";



export class Buyers {
    id: string;
    ime: string;
    prezime: string;
    email: string;
    kupljeno: Products[];


    constructor(id: string, ime: string, prezime: string, email: string, kupljeno: Products[]) {

        this.id = id;
        this.ime = ime;
        this.email = email;
        this.kupljeno = kupljeno;
        return this;

    }

}
