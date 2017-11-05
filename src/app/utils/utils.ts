let list = [
  'aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem', 'aeegmu', 'aegmnn',
  'afirsy', 'bjkqxz', 'ccenst', 'ceiilt', 'ceilpt', 'ceipst', 'ddhnot',
  'dhhlor', 'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu', 'fiprsy',
  'gorrvw', 'iprrry', 'nootuw', 'ooottu'
];

/**
 * handles for random letter dispaly on each dice
 * @param {*} list 
 */

  // loop for getting random dice item and roll dice
 export const rollDice = (list) => {
        let result = [];       
        for (let i = 0; i < 25; i++) {
          let randomIndex = Math.floor(Math.random() * list.length);
          let removed = list.splice(randomIndex, 1);
          result.push(removed[0]);      
        }
        return result; 
}

// dispaly a ramdon letter in each dice
const randomlySelectedFaceLetter = (letters) => {
  let randomIndex = Math.floor(Math.random() * 6);
  return letters.charAt(randomIndex);
};


/**
 * create and insert an empty board
 */
let board:Array<Array<object>> = [
  [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}]
];

export const shuffleBoard = () => {
      let rolledDice = rollDice(list);
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
          let EachDice = rolledDice.shift();
          let face = randomlySelectedFaceLetter(EachDice);
          let tileData = new TileData(face, row, col);
          board[row][col] = tileData;
        }
      }
      return board;
    }

// TileData constructor function
class TileData {
    letter;
    rowId;
    columnId;
    selected;

  constructor(letter, rowId, columnId, selected = false) {
    this.letter = letter.toUpperCase();
    this.rowId = rowId;
    this.columnId = columnId;
    this.selected = selected;
  }
}

//handles for not selecting the same tile 
export const isTileEqual = (tile1, tile2) => {
  if (!tile1 || !tile2) return false;
  return tile1.rowId === tile2.rowId && tile1.columnId === tile2.columnId;
};


//handles for is adjcent tile selected 
export const isAdjacent = (tile1, tile2) => {
  if (!tile1 || !tile2) return false;
  if (isTileEqual(tile1, tile2)) {
    return false;
  }

  var colDiff = Math.abs(tile1.columnId - tile2.columnId);
  var rowDiff = Math.abs(tile1.rowId - tile2.rowId);
  if (colDiff <= 1 && rowDiff <= 1) {
    return true;
  } else {
    return false;
  }
};

// handles for word score calculate 
export const calculateScore = (word) => {
    if (word.length === 1 || word.length === 2) {
      return 0;
    }
    if (word.length === 3 || word.length === 4) {
      return 1;
    }
    if (word.length === 5) {
      return 2;
    }
    if (word.length === 6) {
      return 3;
    }
    if (word.length === 7) {
      return 5;
    }
    if (word.length >= 8) {
      return 11;
    }
    
  };

