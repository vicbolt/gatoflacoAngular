import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavComponent } from './components/menunav/menunav.component';
import { HeroComponent } from './components/hero/hero.component';
import { MapComponent } from './components/map/map.component';
import { AboutusInicioComponent } from './components/aboutus-inicio/aboutus-inicio.component';
import { MenuInicioComponent } from './components/menu-inicio/menu-inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonysComponent } from './components/testimonys/testimonys.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';



@NgModule({
  declarations: [
    AppComponent,
    MenunavComponent,
    HeroComponent,
    MapComponent,
    AboutusInicioComponent,
    MenuInicioComponent,
    FooterComponent,
    TestimonysComponent,
    MenuComponent,
    HomeComponent,
    CartaComponent,
    AboutComponent,
    ContactComponent,
    RestauranteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
