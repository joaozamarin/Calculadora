import { MemoriaModalPage } from './../utils/memoria-modal/memoria-modal.page';
import { IMemoria } from './../models/IMemoria.model';
import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '+', '-'];

  memoria: IMemoria[] = [];

  constructor(private alertController: AlertController, private modalCtrl: ModalController) {}

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: MemoriaModalPage,
      componentProps: {
        memoria: this.memoria,
      },
    });
    modal.present();
  }

  async mostrarAlertaMemoria(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: '',
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  adicionarMemoria()
  {
    if(this.operacao !== '' && this.resultado !== '')
    {
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado)
      };

      this.memoria.push(memoria);
    }else if(this.operacao !== '' && this.resultado === '')
    {
      this.calcularOperacao();

      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado)
      };

      this.memoria.push(memoria);
    }else
    {
      this.mostrarAlertaMemoria('Atenção', 'Não foi possível salvar na memória. Adicione uma operação!');
    }

    console.log(this.memoria);
  }

  limparMemoriaMC()
  {
    this.memoria = [];
    console.log(this.memoria);
  }

  rechamarMemoria()
  {
    const memoria = this.memoria[this.memoria.length - 1];
    this.operacao = memoria.operacao;
    this.resultado = memoria.resultado.toString();

    console.log('Memória: ', memoria);
  }

  adicaoMemoria()
  {
    if(this.operacao !== '')
    {
      this.calcularOperacao();
      const memoria = this.memoria[this.memoria.length - 1];
      const novaMemoria: IMemoria = {
        operacao: `${this.resultado} + ${memoria.resultado}`,
        resultado: Number(this.resultado) + memoria.resultado,
      };

      this.memoria.push(novaMemoria);
      console.log('Adicionou: ', this.memoria);
    }
  }

  subtrairMemoria()
  {
    if(this.operacao !== '')
    {
      this.calcularOperacao();
      const memoria = this.memoria[this.memoria.length - 1];
      const novaMemoria: IMemoria = {
        operacao: `${memoria.resultado} - ${this.resultado}`,
        resultado: memoria.resultado - Number(this.resultado),
      };

      this.memoria.push(novaMemoria);
      console.log('Adicionou: ', this.memoria);
    }
  }

  verMemoria()
  {
    this.abrirModal();
  }

  calcularOperacao()
  {
    try
    {
      this.resultado = evaluate(this.operacao);
    }
    catch(err)
    {
      this.resultado = 'Operação inválida!';
    }
  }

  adicionarValor(valor: string)
  {
    this.caracter = this.caracteres.includes(valor);

    if(!this.caracter)
    {
      this.operacao += valor;
      this.numero = true;
    }
    else if(this.caracter && this.numero)
    {
      this.operacao += valor;
      this.numero = false;
    }
  }

  limparOperacao()
  {
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  limparMemoria()
  {
    this.operacao = '';
    this.numero = false;
  }

  inverterValor()
  {
    // Alterna o numero entre positivo e negativo
  }

  apagarCaracter()
  {
    if(this.operacao.length > 0)
    {
      this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1);
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);

    if(!this.caracter)
    {
      this.numero = true;
    }
    else
    {
      this.numero = false;
    }
  }
}
