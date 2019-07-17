import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'main', component: MainComponent },
 ];

registerLocaleData(zh);

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      UserListComponent,
      MessageBoxComponent,
      LoginComponent,
      MainComponent
   ],
   imports: [
      RouterModule.forRoot(
         appRoutes,
         { enableTracing: true } // <-- debugging purposes only
       ),
      BrowserModule,
      AppRoutingModule,
      NgZorroAntdModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
