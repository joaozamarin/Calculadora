import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  valor1;
  valor2;
  resultado;
  maior: number;
  menor: number;
  conta: string;
  constructor(private alertController: AlertController) {}

  async mostrarAlertaSoma() {
    this.resultado = Number(this.valor1) + Number(this.valor2);
    this.conta = 'Soma';
    const mensagem = `<p><b>Primeiro Valor: ${this.valor1}</b></p>` +
                    `<p><b>Segundo Valor: ${this.valor2}</b></p>` +
                    `<p><b>Resultado: ${this.resultado}</b></p>`;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mostrarAlertaSubtracao() {
    this.resultado = Number(this.valor1) - Number(this.valor2);
    this.conta = 'Subtração';
    const mensagem = `<p><b>Primeiro Valor: ${this.valor1}</b></p>` +
                    `<p><b>Segundo Valor: ${this.valor2}</b></p>` +
                    `<p><b>Resultado: ${this.resultado}</b></p>`;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mostrarAlertaMultiplicacao() {
    this.resultado = Number(this.valor1) * Number(this.valor2);
    this.conta = 'Multiplicação';
    const mensagem = `<p><b>Primeiro Valor: ${this.valor1}</b></p>` +
                    `<p><b>Segundo Valor: ${this.valor2}</b></p>` +
                    `<p><b>Resultado: ${this.resultado}</b></p>`;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mostrarAlertaDivisao() {
    this.resultado = Number(this.valor1) / Number(this.valor2);
    this.conta = 'Divisão';
    const mensagem = `<p><b>Primeiro Valor: ${this.valor1}</b></p>` +
                    `<p><b>Segundo Valor: ${this.valor2}</b></p>` +
                    `<p><b>Resultado: ${this.resultado}</b></p>`;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mostrarAlertaMaior() {
    this.resultado = this.valor1 > this.valor2 ? this.valor1 : this.valor2;
    this.conta = 'Maior Valor';
    const mensagem = `<p><b>Primeiro Valor: ${this.valor1}</b></p>` +
                    `<p><b>Segundo Valor: ${this.valor2}</b></p>` +
                    `<p><b>Maior: ${this.resultado}</b></p>`;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }


  async mostrarAlertaMenor() {
    this.resultado = this.valor1 < this.valor2 ? this.valor1 : this.valor2;
    this.conta = 'Menor Valor';
    const mensagem = `<p><b>Primeiro Valor: ${this.valor1}</b></p>` +
                    `<p><b>Segundo Valor: ${this.valor2}</b></p>` +
                    `<p><b>Menor: ${this.resultado}</b></p>`;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async limpar() {
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = null;
    this.maior = null;
    this.menor = null;
    this.conta = '';
  }
}
