import { RouterOutlet } from '@angular/router';
import { NavComponent } from './../nav/nav.component';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
