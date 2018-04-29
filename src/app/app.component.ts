import { Component, OnInit , Input } from '@angular/core';
import { BooksService } from "./services/books.service";
import { BookEntry } from "./model/book-entry";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    _booksArray: Array<BookEntry> = [];
    newBook: BookEntry = <BookEntry> {};
    showDialog: boolean = false;
    
    title: any;
    author: any;
    date: any;
    
    constructor(private booksService: BooksService) {}

    ngOnInit(): void {
        this.getBooks();
    }
    
    getBooks(): void {
        this.booksService.getBooks()
            .subscribe(
                book => this._booksArray = book.books,
                error => console.log("Error :: " + error));
    }
    
    addNewBook() {
        console.log(this.title);
        this.newBook.title = this.title;
        this.newBook.author = this.author;
        this.newBook.date = this.date;
        this._booksArray.push(this.newBook);
    }
}