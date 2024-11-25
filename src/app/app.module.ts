import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatAnchor } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './home/collection/collection.component';
import { BannerComponent } from './home/banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { GameComponent } from './game/game.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent,
    BannerComponent,
    GameComponent,
    SidebarComponent,
    AllGamesComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAnchor,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
