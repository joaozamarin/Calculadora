import { IMemoria } from './models/IMemoria.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  memoria: IMemoria[];

  constructor() {}
}
