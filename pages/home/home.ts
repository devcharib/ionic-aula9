import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import usuarios from './usuarios.json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios : [];
  email : '';
  senha : '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.usuarios = usuarios;

    console.log(this.usuarios);

  }

  login(){
    // percorrer o array e verificar se tem algum usuario com login e senha iguais

    logado = false;

    usuarios.map( x => {
      if (x.email == this.email && x.senha == this.senha)
        logado = true;
    });


    if(logado){
      this.alertCtrl.create({
          title: 'Login',
          subTitle: 'Bem-vindo'
        }).present();
    }
    else{
      this.alertCtrl.create({
          title: 'Login',
          subTitle: 'Login e/ou senha inválidos!'
        }).present();
    }

  }

}