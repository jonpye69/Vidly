import { Directive, HostBinding, HostListener, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'        
})
export class HighlightDirective implements OnInit {
    @Input() defaultColour: string = 'transparent';
    @Input() changedColour: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColour: string = this.defaultColour;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.backgroundColour = this.defaultColour; 
    }

    @HostListener('mouseenter') mouseenter(eventData: Event) {
        this.backgroundColour = this.changedColour;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColour = this.defaultColour;
    }

}