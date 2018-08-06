import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/Router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean> | boolean {
        console.log(route, 'alunos');
        console.log(state);

        if (state.url.includes('editar')) {
          alert('Usuario sem acesso');
          return false;
        }

        return true;
      }
}
