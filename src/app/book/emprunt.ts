import { User } from "../User/user";
import { Book } from "./book";

export interface Reservation {
    id: number;
    dateDebut: Date;
    dateFin:Date; 
    livre_id: Book;
    user_id: User;
}