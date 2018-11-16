import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ForumComponent } from './forum/forum.component';
import { DetailForumComponent } from './detail-forum/detail-forum.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PhototequeComponent } from './phototeque/phototeque.component';
const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'accueil', component: IndexComponent },
  { path: 'bibliotheque', component: BibliothequeComponent },
  { path: 'bibliotheque/:id', component: ArticleDetailComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'photo', component: PhototequeComponent },
  { path : 'forum/:id', component: DetailForumComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
