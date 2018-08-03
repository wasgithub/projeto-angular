import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';
import { ActivatedRoute } from '../../../../node_modules/@angular/Router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {
  }

  ngOnInit() {
    this.inscricao =  this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
