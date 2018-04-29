import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})
export class TitlecasePipe implements PipeTransform {

    public transform(input:string): string {
        if (!input) return 'Not assigned';
        else {
            return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ))
            .replace(/[^a-zA-Z ]/g, "");
        }
    }
}


