import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Importação dos APPS
import { AppComponent } from './app.component';
//import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
// import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
		LoginComponent
		/*CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent*/
  ],
  imports: [
		BrowserModule,
		//routing
		//CursosModule,
		//AlunosModule,
		AppRoutingModule
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }