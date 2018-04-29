import { Component, OnInit, Input, OnChanges , Output , EventEmitter} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    
})
export class ModalComponent implements OnInit {

    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(){}

    ngOnInit(){}

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
}