import { Component, computed, input, signal } from '@angular/core';
import { InformacionHome } from '../../../core/models/informacion-home';

@Component({
  selector: 'app-card-information',
  imports: [],
  templateUrl: './card-information.component.html',
  styleUrl: './card-information.component.scss'
})
export class CardInformationComponent {
  informacion = input<InformacionHome>()
  posicion_contenido = computed(() => (
    this.informacion()?.posision == 'right'
      ? true
      : false
  ))


}
