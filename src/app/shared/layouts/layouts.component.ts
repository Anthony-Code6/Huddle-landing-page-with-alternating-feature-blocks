import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MainComponent } from "../components/main/main.component";

@Component({
  selector: 'app-layouts',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {

}
