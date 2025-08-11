import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';


// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   // { path: 'users', component: UsersComponent },
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UsersComponent }
//   ] },
//   // { path: 'users/:id/:name', component: UsersComponent },
//   { path: 'servers', component: ServersComponent, children: [
//     { path: ':id', component: ServersComponent },
//     { path: ':id/edit', component: EditServerComponent }
//   ] },
//   // { path: 'servers/:id', component: ServersComponent },
//   // { path: 'servers/:id/edit', component: EditServerComponent },

//   // path to 404 page
//   { path: 'not-found', component: PageNotFoundComponent },
//   // { path: 'something', redirectTo: '/not-found' },
//   // wildcard routes
//   { path: '**', redirectTo: '/not-found' },
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }






// Important: Redirection Path Matching
// In our example, we didn't encounter any issues when we tried to redirect the user. But that's not always the case when adding redirections.

// By default, Angular matches paths by prefix. That means, that the following route will match both /recipes  and just / 

// { path: '', redirectTo: '/somewhere-else' } 

// Actually, Angular will give you an error here, because that's a common gotcha: This route will now ALWAYS redirect you! Why?

// Since the default matching strategy is "prefix" , Angular checks if the path you entered in the URL does start with the path specified in the route. Of course every path starts with ''  (Important: That's no whitespace, it's simply "nothing").

// To fix this behavior, you need to change the matching strategy to "full" :

// { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 

// Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example).