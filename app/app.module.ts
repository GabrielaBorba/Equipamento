import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContatoPage } from "../pages/contato/contato";
import { InstitucionalPage} from '../pages/institucional/institucional';
import { ProdutosPage} from '../pages/produtos/produtos';


@NgModule({
  declarations: [
    MyApp,
    HomePage, ContatoPage, InstitucionalPage, ProdutosPage
  
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, ContatoPage, InstitucionalPage, ProdutosPage

  
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
