import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';

import { ActivatedRoute, Router } from '@angular/Router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

    cursos: any[];
    pagina: number;
    inscricao: Subscription;

  constructor(
    private cursosSevices: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cursos = this.cursosSevices.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  priximaPagina() {
    this.router.navigate(['/cursos'],
      {queryParams: { 'pagina': ++this.pagina }});
  }

}
