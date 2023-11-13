import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Jonnathan';
  public gender: 'male'| 'female' = 'male';
  public invatationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Jonnathan', 'Melissa', 'Ricardo', 'Maria', 'Juan', 'Pedro', 'Luis'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient(): void {
    this.clients.shift();
  }

  //Keyvalue Pipe
  public person = {
    name: 'Jonnathan',
    age: 25,
    address: 'Cuenca, Ecuador'
  }

  // Async Pipe
  public myObservableTimer: Observable<number>= interval(2000).pipe(
    tap( data => console.log('tap:', data))
  ); // cada dos segundos se incrementa en 1

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
