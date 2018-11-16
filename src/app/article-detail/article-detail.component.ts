import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BiblioService } from '../biblio.service';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  articleId = +this.route.snapshot.paramMap.get('id');
  article;
  constructor(
    private route: ActivatedRoute,
    private biblioService: BiblioService
  ) { }

  ngOnInit() {
    this.GetCurent();
  }
 GetCurent(): void{
   this.biblioService.GetCurentArticle(this.articleId).subscribe(
    data =>{
      console.log(data);
      this.article = data;
    }
   )
 }
}
