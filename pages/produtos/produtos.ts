import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  public produto;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto=[

      {nome:"Cimento", preco: "R$ 80,00"},
      {nome:"Tinta", preco: "R$ 70,00"},
      {nome:"Rejunte", preco:"R$ 35,00"},
      {nome:"Rachinha", preco:"R$ 20,00"},
      {nome:"Brita", preco: "R$ 30,00"},
      {nome:"Areia", preco:"R$ 25,00"},
      {nome:"Manta", preco: "R$ 10,00"},
      {nome:"Prego", preco: "R$ 5,00"},
      {nome:"Tubo galvanizado", preco: "R$ 19,00"},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

}
