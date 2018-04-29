import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Book } from "../model/book";
 
@Injectable()
export class BooksService {
 
    private _booksJSON = "../../assets/data/books.json";

    constructor(private http: Http) {}

    getBooks(): Observable<Book> {
        return this.http
            .get(this._booksJSON)
            .map(this.extractBooks) 
            .catch(this.handleError);
    }
    
    private extractBooks(res: Response): Book {
        let book = res.json();
        return book || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
 }

