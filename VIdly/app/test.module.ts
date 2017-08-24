import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './test.component';



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [TestComponent],
    bootstrap: [TestComponent]
})
export class TestModule { }