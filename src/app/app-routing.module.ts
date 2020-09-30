import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ObservablesComponent } from "./observables/observables.component";
import { PromisesComponent } from "./promises/promises.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  { path: "promise", component: PromisesComponent },
  { path: "observables", component: ObservablesComponent },
  { path: "userslist", component: UsersListComponent },
  // { path: "**", redirectTo: "promise" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
