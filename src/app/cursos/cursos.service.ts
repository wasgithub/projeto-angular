import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'}
    ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
      return null;
    }
  }

}
