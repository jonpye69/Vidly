import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './playground/server/server.component';
import { ServersComponent } from './playground/servers/servers.component';

import { EscapeHtmlPipe } from './utils/asHtml.pipe';

import { AppMedia } from './media.component'
import { AppPlayground } from './playground.component'

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'Media', pathMatch: 'full' },
    { path: 'Media', component: AppMedia },
    { path: 'Playground', component: AppPlayground }
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, ServerComponent, ServersComponent, EscapeHtmlPipe, AppMedia, AppPlayground ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
