import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainpageComponent {

  constructor(public dbzService:DbzService){}

}