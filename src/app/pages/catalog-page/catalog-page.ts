import { Component } from '@angular/core';
import { FILMS } from '../../constants/films.constants';
import { Film } from '../../models/film.model';
import { FilmServices } from '../../services/filmsService';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {
  // public films: Film[] = FILMS

  constructor(private _filmsService: FilmServices) {

  }
  public get films(): Film[] {
    return this._filmsService.filtredFilms
  }
}
