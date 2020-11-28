import { Emetteur } from './emetteur';
import { Recepteur } from './recepteur';

export class Transfert {

    id : number;
    date : String;
    montant : number;
    emetteur : Emetteur;
    recepteur : Recepteur;

}
