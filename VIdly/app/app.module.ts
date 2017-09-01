import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Training
import { AppComponent } from './app.component';
import { ServerComponent } from './playground/server/server.component';
import { ServersComponent } from './playground/servers/servers.component';

// Custom filter
import { EscapeHtmlPipe } from './utils/asHtml.pipe';

// To hold movie app
import { MediaComponent } from './media/media.component'
// To hold training stuff
import { PlaygroundComponent } from './playground/playground.component'

// Movie app sub components
import { HeaderComponent } from './media/header/header.component';

import { FilmsComponent } from './media/films/films.component';
import { FilmListComponent } from './media/films/film-list/film-list.component';
import { FilmItemComponent } from './media/films/film-list/film-item/film-item.component';
import { FilmDetailComponent } from './media/films/film-detail/film-detail.component';

import { CharacterListComponent } from './media/character-list/character-list.component';
import { CharacterEditComponent } from './media/character-list/character-edit/character-edit.component';

import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'Media', pathMatch: 'full' },
    { path: 'Media', component: MediaComponent },
    { path: 'Playground', component: PlaygroundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent, ServerComponent, ServersComponent, EscapeHtmlPipe,
        MediaComponent, PlaygroundComponent, HeaderComponent,
        FilmsComponent, FilmListComponent, FilmItemComponent, FilmDetailComponent,
        CharacterListComponent, CharacterEditComponent, HighlightDirective, UnlessDirective
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
