import {Component, Input, OnInit, OnChanges} from '@angular/core';


/**
 * App-board Component 
 * @export
 * @class BoardComponent
 * @implements {onInit, onChanges}
 */
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() data;
  @Input()
  public tileClick: Function;
  constructor() {}
  

  //Initialize the directive/component after Angular first displays the data-bound properties
  ngOnInit() {
      this.data = [].concat(...this.data);
  }
  
  //Lifecycle hook that is called when any data-bound property of a directive changes.
  ngOnChanges() {
    this.data = [].concat(...this.data);
}
}
