import { User } from "../User/user";
import { Book } from "./book";

export interface Reservation {
    id: number;
    dateReservation: Date | string; 
    user: User; 
    livre: Book;
}