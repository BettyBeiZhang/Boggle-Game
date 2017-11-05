import {Component, Input, OnInit, OnChanges} from '@angular/core';

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

  ngOnInit() {
      this.data = [].concat(...this.data);
  }

  ngOnChanges() {
    this.data = [].concat(...this.data);
}
}
