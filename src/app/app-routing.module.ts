import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'restaurante', component: RestauranteComponent },

  // Otras rutas
  { path: '**', redirectTo: '/home', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
