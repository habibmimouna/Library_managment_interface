import { Category } from "./categorie";


export interface Book{
    id: string; 
    titre: string;
    auteur:string;
    datePublication:string;
    isbn:string;
    categories:Category[]|null


}