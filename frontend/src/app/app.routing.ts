import { Routes, RouterModule } from '@angular/router';
import { ArranqueComponent } from './arranque/arranque.component';

const appRoutes: Routes = [
  { path: "", redirectTo:"arranque", pathMatch: "full"  },
  { path: "arranque", component: ArranqueComponent, pathMatch: "full"}
];

export const routing = RouterModule.forRoot(appRoutes);
