import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { BottonToggleComponent } from './botton-toggle/botton-toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { IconComponent } from './icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
import { BadgesComponent } from './badges/badges.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component'

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ToolBarNavBarComponent } from './tool-bar-nav-bar/tool-bar-nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { ListComponent } from './list/list.component';
import {MatListModule} from '@angular/material/list';
import { GridListComponent } from './grid-list/grid-list.component';
import {MatGridListModule} from '@angular/material/grid-list'
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BottonToggleComponent,
    IconComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    ToolBarNavBarComponent,
    SideNavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
