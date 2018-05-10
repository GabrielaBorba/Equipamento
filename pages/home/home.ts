import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InstitucionalPage} from '../institucional/institucional';
import {ContatoPage} from '../contato/contato';
import {ProdutosPage} from '../produtos/produtos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 constructor(public navCtrl: NavController) {
  
  }

openContato(){
  this.navCtrl.push(ContatoPage);
}

openInstitucional(){
  this.navCtrl.push(InstitucionalPage);
}

openProdutos(){
  this.navCtrl.push(ProdutosPage);
}
}
