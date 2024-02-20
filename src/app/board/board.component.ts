import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.scss',
    imports: [SquareComponent, CommonModule]
})
export class BoardComponent implements OnInit {
squares: any[] = [];
xIsNext: boolean = true;
winner: string | null = null;
ngOnInit(): void {
  this.newGame();

}

newGame() {
  this.squares = Array(9).fill(null);
  this.xIsNext = true;
  this.winner = null;
  
}
get player(){
  return this.xIsNext ? 'X' : 'O';
}
currentColor: string = 'pink';

makeMove(idx: number){

if (!this.squares[idx]){
  this.squares.splice(idx, 1, this.player);
  this.xIsNext = !this.xIsNext;
}
this.winner = this.calculateWinner();
  
}
calculateWinner(){
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(this.squares[a] &&
      this.squares[a] == this.squares[b] &&
      this.squares[a] == this.squares[c]){
        return this.squares[a]
      }
  }
  return null;

}


}
