import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmailMatComponent } from './email-mat/email-mat.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PassMatComponent } from './pass-mat/pass-mat.component';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailMatComponent,
    PassMatComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule,
   MatButtonModule, MatIconModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
