import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BackgroundComponent } from './background/background.component';
import { BackgroundService } from './background/background.service';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './settings/settings.service';
import { StorageService } from './storage/storage.service';
import { CryptoService } from './crypto/crypto.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SafePipe } from './pipes/safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertsService } from './alerts/alerts.service';
import { AlertsComponent } from './alerts/alerts.component';
import { DefaultDialogComponent } from './alerts/default-dialog/default-dialog.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    DefaultDialogComponent,
    HomeComponent,
    NotFoundComponent,
    PhotosComponent,
    VideosComponent,
    ContactComponent,
    BlogComponent,
    BackgroundComponent,
    SettingsComponent,
    NavbarComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    AlertsService,
    BackgroundService,
    SettingsService,
    StorageService,
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }