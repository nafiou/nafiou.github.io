import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { ForumFormComponent } from './forum-form/forum-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StorageServiceModule} from 'angular-webstorage-service';

import 'jquery';
import 'bootstrap';
import { DetailForumComponent } from './detail-forum/detail-forum.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PhototequeComponent } from './phototeque/phototeque.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
declare const foo: string;
@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    IndexComponent,
    ForumFormComponent,
    DetailForumComponent,
    BibliothequeComponent,
    ArticleDetailComponent,
    PhototequeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    RouterModule,
    HttpModule,
    BrowserModule,
	  StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
