import { Component, OnInit } from '@angular/core';
import {rollDice, shuffleBoard, isTileEqual, isAdjacent, calculateScore} from '../../utils/utils';

/**
 * App-game Component 
 * @export
 * @class GameComponent
 * @implements {onInit}
 */
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    title = 'app';
    boardData;
    currentWord: any = '';
    currentWordPosition: Array<any> = [];
    wordScoreList = [];
    totalScore = 0;
    initBoard;
  
    constructor() {
      this.boardData = shuffleBoard();
      this.initBoard = JSON.parse(JSON.stringify(this.boardData));
    }
    ngOnInit() {}
  
    handleClick(rowId, columnId) {
      // Handle tile click to select / unselect tile.
      const selectedTile = this.boardData[rowId][columnId];
      const lastSelectedTile =
          this.currentWordPosition[this.currentWordPosition.length - 1];
      if (selectedTile.selected) {
        // Check if selectedTile is last tile
        if (isTileEqual(selectedTile, lastSelectedTile)) {
          // Unselected selectedTile and remove from currentWordPosition
          // Also update the board to set the tile to unselected
          this.boardData[rowId][columnId].selected = false;
          this.currentWord = this.currentWord.slice(0, -1);
          this.currentWordPosition = this.currentWordPosition.slice(0, -1);
        }
      } else {
        if (!lastSelectedTile || isAdjacent(selectedTile, lastSelectedTile)) {
          // Select the tile
          this.boardData[rowId][columnId].selected = true;
          // update current word with selected tile & make 'Qu' display in the current word instead of 'Q' 
          this.currentWord = this.currentWord.concat(this.boardData[rowId][columnId].letter === 'Q' ? 'Qu': this.boardData[rowId][columnId].letter).toLowerCase(),
          // update current word position with selected tile position
              this.currentWordPosition = this.currentWordPosition.concat(
                  {rowId: rowId, columnId: columnId})
        }
      }
    }
  
    handleSubmit() {
      // TODO: Check if Current Word is real
  
      // Check if word is not empty
      if (this.currentWord.length === 0 ) {
        return;
      }
      // Calculate score
      const score = calculateScore(this.currentWord);
  
      // Add to the Word List
      this.wordScoreList.push({word: this.currentWord, score: score});
      this.totalScore = this.wordScoreList.map(function(word) {
          return word.score;
        }).reduce(function(totalScore, next) {
        return totalScore + next;
      }, 0);
      this.currentWord = '';
      this.currentWordPosition = [];
      this.boardData = JSON.parse(JSON.stringify(this.initBoard));
    }

}
