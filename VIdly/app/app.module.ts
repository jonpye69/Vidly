import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './playground/server/server.component';
import { ServersComponent } from './playground/servers/servers.component';

import { EscapeHtmlPipe } from './utils/asHtml.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent, ServerComponent, ServersComponent, EscapeHtmlPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
