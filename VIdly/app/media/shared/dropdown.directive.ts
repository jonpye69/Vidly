import { Directive, HostListener, HostBinding, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    // The below code allows us to use an event emitter to detect clicks not inside our respective element
    // Thanks in part to https://www.npmjs.com/package/angular2-click-outside
    constructor(private elRef: ElementRef) {
    }

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: any) {
        const clickedInside = this.elRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    }
}