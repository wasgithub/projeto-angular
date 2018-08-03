import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com.br'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com.br'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com.br'}
  ];

  getAlunos(): any[] {
    return this.alunos;
  }

  getAluno(id: number) {
    const cursos = this.getAlunos();
    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }

    return null;
  }

}
