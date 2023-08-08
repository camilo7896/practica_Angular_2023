import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-component-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[]=[{
    name:'Jorge',
    power:200000
  }];

  @Output() onDelete: EventEmitter<number>= new EventEmitter();


  public onDeleteCharacter(index:number):void{
    // console.log(index)
    this.onDelete.emit(index);

  }
}
