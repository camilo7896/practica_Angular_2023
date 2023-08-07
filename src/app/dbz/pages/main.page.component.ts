import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainpageComponent{
   public character:Character[]=[
    {name:'Camilo',
    power:1000},
    {name:'Crsitian',
    power:200000},
    {name:'Jane',
    power:300000}
   ];

}