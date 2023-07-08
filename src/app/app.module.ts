import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BodyComponent } from './component/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HammerModule,
    IgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
