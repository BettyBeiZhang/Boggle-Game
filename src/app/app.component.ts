import {Component, OnInit} from '@angular/core';
import {rollDice, shuffleBoard,isTileEqual, isAdjacent, calculateScore} from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
    ngOnInit(){
    }
}
