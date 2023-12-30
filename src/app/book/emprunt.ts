import { User } from "../User/user";
import { Book } from "./book";

export interface emprunt {
    id: number |null;
    dateDebut: Date |string;
    dateFin:Date |string; 
    livre_id: number|null;
    user_id: number|null;
}