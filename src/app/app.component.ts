import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
    ]),

  ],
  styles: [`
      h1 {
          text-decoration:underline;
      }
      .red-title {
        color:red;
      }
      .large-title {
  font-size:4em;
}
p {
  width:200px;
  background:lightgray;
  margin: 100px auto;
  text-align:center;
  padding:20px;
  font-size:1.5em;
}
  `]

})
export class AppComponent {

  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';

  title = 'app';

  myArr = ['him', 'hers', 'yours', 'theirs'];

  titleClasses = {
    'red-title': true,
    'large-title': true
  }
  myEvent(event) {
    console.log(event);
  }
  constructor(private dataService: DataService) {
  }

  someProperty: string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }
}
