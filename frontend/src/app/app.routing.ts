import { Routes, RouterModule } from '@angular/router';
import { ArranqueComponent } from './arranque/arranque.component';
import { Taller1Component } from './taller1/taller1.component';

const appRoutes: Routes = [
  { path: "", redirectTo:"arranque", pathMatch: "full"  },
  { path: "arranque", component: ArranqueComponent, pathMatch: "full"},
  { path: "taller1", component: Taller1Component, pathMatch: "full"}
];

export const routing = RouterModule.forRoot(appRoutes);
