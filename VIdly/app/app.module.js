"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// Training
var app_component_1 = require("./app.component");
var server_component_1 = require("./playground/server/server.component");
var servers_component_1 = require("./playground/servers/servers.component");
var active_users_component_1 = require("./playground/active-users/active-users.component");
var inactive_users_component_1 = require("./playground/inactive-users/inactive-users.component");
// Custom filter
var asHtml_pipe_1 = require("./utils/asHtml.pipe");
// To hold movie app
var media_component_1 = require("./media/media.component");
// To hold training stuff
var playground_component_1 = require("./playground/playground.component");
// Movie app sub components
var header_component_1 = require("./media/header/header.component");
var films_component_1 = require("./media/films/films.component");
var film_list_component_1 = require("./media/films/film-list/film-list.component");
var film_item_component_1 = require("./media/films/film-list/film-item/film-item.component");
var film_detail_component_1 = require("./media/films/film-detail/film-detail.component");
var character_list_component_1 = require("./media/character-list/character-list.component");
var character_edit_component_1 = require("./media/character-list/character-edit/character-edit.component");
var dropdown_directive_1 = require("./media/shared/dropdown.directive");
var highlight_directive_1 = require("./test-directives/highlight.directive");
var unless_directive_1 = require("./test-directives/unless.directive");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: '', redirectTo: 'Media', pathMatch: 'full' },
    { path: 'Media', component: media_component_1.MediaComponent },
    { path: 'Playground', component: playground_component_1.PlaygroundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [
            app_component_1.AppComponent, server_component_1.ServerComponent, servers_component_1.ServersComponent, asHtml_pipe_1.EscapeHtmlPipe,
            media_component_1.MediaComponent, playground_component_1.PlaygroundComponent, header_component_1.HeaderComponent,
            films_component_1.FilmsComponent, film_list_component_1.FilmListComponent, film_item_component_1.FilmItemComponent, film_detail_component_1.FilmDetailComponent,
            character_list_component_1.CharacterListComponent, character_edit_component_1.CharacterEditComponent,
            highlight_directive_1.HighlightDirective, unless_directive_1.UnlessDirective, dropdown_directive_1.DropdownDirective,
            active_users_component_1.ActiveUsersComponent, inactive_users_component_1.InactiveUsersComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map