import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { FileChooser } from '@ionic-native/file-chooser';
import {EditListPage} from "../pages/playlist/edit-list/edit-list";
import {ViewListPage} from "../pages/playlist/view-list/view-list";
import {CreateNewListPage} from "../pages/playlist/create-new-list/create-new-list";
import {AddListPage} from "../pages/playlist/add-list/add-list";
import { PopOverListasReproduccionPage} from '../pages/playlist/pop-over-listas-reproduccion/pop-over-listas-reproduccion';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { MediaCapture } from '@ionic-native/media-capture';
//Modificado Grupo 3
import { CargarVideoPage } from '../pages/Modulo3/cargar-video/cargar-video';
import { InfovideoPage } from '../pages/Modulo3/infovideo/infovideo';
import { MisVideosPage } from '../pages/Modulo3/mis-videos/mis-videos';
import { ListarmisvideosPage } from '../pages/Modulo3/listarmisvideos/listarmisvideos';
//Fin Modificado

//Modificado Grupo 10
import { HttpModule } from '@angular/http';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { ConfiguracionNotificacionesPage } from '../pages/configuracion-notificaciones/configuracion-notificaciones';
//Fin Modificado

//Modificado Grupo 8
import { ChannelsPage } from '../pages/Modulo 8/channels/channels';
//Fin modificado


//M01
import { HomePage } from '../pages/M01-Login/home/home';
import { LoginPageModule } from '../pages/M01-Login/login/login.module';
import { OlvidarContraseñaPageModule } from '../pages/M01-Login/olvidar-contraseña/olvidar-contraseña.module';
import { RegistrarsePageModule} from '../pages/M01-Login/registrarse/registrarse.module';
import { InvitacionTwitterPageModule} from '../pages/M01-Login/invitacion-twitter/invitacion-twitter.module';
import {HomecablePageModule } from '../pages/M01-Login/homecable/homecable.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth'
//FIN
//
import {ReproductorPage} from "../pages/reproductor/reproductor"

// Necesario para M01
const firebaseAuth = {
  apiKey: "AIzaSyD5QOpTS7_8zgRSu3dBaG-V6B9QmQpD_Uc",
  authDomain: "test-project-9ca72.firebaseapp.com",
  databaseURL: "https://test-project-9ca72.firebaseio.com",
  projectId: "test-project-9ca72",
  storageBucket: "test-project-9ca72.appspot.com",
  messagingSenderId: "438129532489"
};
//fin

@NgModule({
  declarations: [
    MyApp,
    EditListPage,
    PopOverListasReproduccionPage,
    ViewListPage,
    AddListPage,
    CreateNewListPage,
    NotificacionesPage,
    ConfiguracionNotificacionesPage,
    ChannelsPage,
    ListarmisvideosPage,
    ReproductorPage,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    ChartsModule,
    //m01
    LoginPageModule,
    OlvidarContraseñaPageModule,
    RegistrarsePageModule,
     InvitacionTwitterPageModule,
     HomecablePageModule,
     AngularFireModule.initializeApp(firebaseAuth) ,
     AngularFireAuthModule
     //fin m01
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditListPage,
    PopOverListasReproduccionPage,
    ViewListPage,
    AddListPage,
    CreateNewListPage,
    NotificacionesPage,
    ConfiguracionNotificacionesPage,
    ChannelsPage,
    ListarmisvideosPage,
    ReproductorPage,
    HomePage
  ],
  providers: [
    StatusBar,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    FileChooser,
    FilePath,
    HTTP,
    MediaCapture,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
