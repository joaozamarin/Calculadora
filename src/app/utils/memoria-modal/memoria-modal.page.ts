import { IMemoria } from './../../models/IMemoria.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-memoria-modal',
  templateUrl: './memoria-modal.page.html',
  styleUrls: ['./memoria-modal.page.scss'],
})
export class MemoriaModalPage implements OnInit {
  memoria: IMemoria[];

  constructor(private modalCtrl: ModalController) { }

  confirm() {
    return this.modalCtrl.dismiss('confirm');
  }

  ngOnInit() {
  }

}
