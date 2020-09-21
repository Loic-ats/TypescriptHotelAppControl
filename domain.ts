export class Client {
    uuid: string;
    nom: string;
    prenoms:string;

    constructor(uuid: string, nom: string, prenoms: string) {
        this.uuid = uuid;
        this.nom = nom;
        this.prenoms = prenoms;
    }

    toString(): string {
        return `${this.uuid} ${this.nom} ${this.prenoms}`
    }
}
