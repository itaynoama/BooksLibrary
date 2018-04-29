import { Component, OnInit , Input } from '@angular/core';
import { TitlecasePipe } from '../pipe/titlecase.pipe';
import { BookEntry } from "../model/book-entry";

@Component({
    selector: 'book',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    
    @Input() book: any;
    @Input() index: number; 
    @Input() booksArray: Array<BookEntry>;
    showDialog: boolean = false;
    
    constructor() {}

    ngOnInit() {}
    
    editBook(newTitle,newAuthor,newDate) {
        this.book.title = newTitle;
        this.book.author = newAuthor;
        this.book.date = newDate; 
    }
    
    deleteBook(index: number): void {
        if(confirm("Are you sure to delete ?")) {
            this.booksArray.splice(index, 1);
        } 
    }
    
}