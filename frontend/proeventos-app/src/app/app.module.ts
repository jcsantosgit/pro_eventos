// Angular Components/Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// NGX Bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar } from './app-navbar';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';

// Meus Componentes
import { EventosComponent } from './eventos/eventos.component';
import { EventosCreate } from './eventos/create/eventos.component-create';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EventosCreate,
    NavBar,
    MenuVerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
