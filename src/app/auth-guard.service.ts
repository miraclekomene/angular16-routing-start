import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router, CanActivateChild, GuardResult, MaybeAsync } from "@angular/router";
import { Observable } from "rxjs";
// injector
import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // Here you can implement your logic to check if the user is authenticated
        // For example, you can check if the user is logged in or not
        // If the user is logged in, return true, otherwise return false
        return this.authService.isAuthenticated()
            .then(
                (isAuthenticated: boolean) => {
                    if (isAuthenticated) {
                        return true;
                    }else{
                        this.router.navigate(['/']);
                    }
                }
                        
            );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);        
    }
}