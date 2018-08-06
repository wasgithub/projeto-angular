import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class CursosGuard implements CanActivateChild {
    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) : Observable<boolean> | Promise<boolean> | boolean {
        return true;
      }
}