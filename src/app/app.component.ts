import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { BoardComponent } from "./board/board.component";
import {  NbButtonModule, NbLayoutModule } from '@nebular/theme';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SquareComponent, BoardComponent, NbButtonModule],
    providers: [],
    
})
export class AppComponent {
  title = 'myapp';
}
