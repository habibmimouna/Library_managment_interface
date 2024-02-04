import { User } from "../User/user";
import { Book } from "./book";

export interface emprunt {
    id: number |null;
    dateDebut: Date |string;
    dateFin:Date |string; 
    livreId: number|null;
    userId: number|null;
}