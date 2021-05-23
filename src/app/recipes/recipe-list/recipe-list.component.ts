import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe('test recipe', 'Hola recipe', 'https://cdn.pixabay.com/photo/2016/01/20/20/49/recipes-1152341_1280.jpg'),
    new Recipe('test recipe', 'Hola recipe', 'https://cdn.pixabay.com/photo/2016/01/20/20/49/recipes-1152341_1280.jpg')
  ]

  ngOnInit(): void {
  }

}
