import { Category } from "./categorie";
import { Reservation } from "./reservation";


export interface Book{
    id: number|null; 
    titre: string;
    auteur:string;
    datePublication:string;
    isbn:string;
    img:string;
    categoryId: number | null;
    reservations?: Reservation[];
    


}