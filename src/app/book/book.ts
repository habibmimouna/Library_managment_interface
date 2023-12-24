import { Category } from "./categorie";


export interface Book{
    id: number|null; 
    titre: string;
    auteur:string;
    datePublication:string;
    isbn:string;
    categories:Category[]|null


}