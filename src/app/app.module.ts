import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HighlightBoardComponent } from './components/highlight-board/highlight-board.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsComponent } from './components/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightBoardComponent,
    FooterComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SparkAngularModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
