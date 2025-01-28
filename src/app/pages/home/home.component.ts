import { Component, signal } from '@angular/core';
import { InformacionHome } from '../../core/models/informacion-home';
import { CardInformationComponent } from "../../components/home/card-information/card-information.component";
import { CardFooterComponent } from "../../components/home/card-footer/card-footer.component";

@Component({
  selector: 'app-home',
  imports: [CardInformationComponent, CardFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  informacion = signal<InformacionHome[]>(
    [
      {
        titulo: 'Grow Together',
        descripcion: `Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form.`,
        imagen: 'images/illustration-grow-together.svg',
        posision: 'right'
      },
      {
        titulo: 'Flowing Conversations',
        descripcion: `You wouldn't paginate a conversation in real life, so why do it online? Our threads 
  have just-in-time loading for a more natural flow.`,
        imagen: 'images/illustration-flowing-conversation.svg',
        posision: 'left'
      },
      {
        titulo: 'Your Users',
        descripcion: `It takes no time at all to integrate Huddle with your app's authentication solution. 
  This means, once signed in to your app, your users can start chatting immediately.`,
        imagen: 'images/illustration-your-users.svg',
        posision: 'right'
      }
    ]
  )
}
