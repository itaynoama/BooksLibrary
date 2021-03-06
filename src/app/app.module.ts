import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { BookListComponent } from './book-list/book-list.component';
import { ModalComponent } from './modal/modal.component';
import { BooksService } from "./services/books.service";
import { TitlecasePipe } from './pipe/titlecase.pipe';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        ModalComponent,
        TitlecasePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [BooksService],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
