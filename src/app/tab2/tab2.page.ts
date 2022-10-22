import { IMemoria } from './../models/IMemoria.model';
import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

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

  constructor() {}

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

    }

    console.log(this.memoria);
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
