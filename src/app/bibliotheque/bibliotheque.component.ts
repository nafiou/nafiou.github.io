import { Component, OnInit } from '@angular/core';
import { BiblioService } from '../biblio.service';
import "jquery";
@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {
  articles = [];
  constructor(private biblioService: BiblioService) { }

  ngOnInit() {
    this.GetArticle();
    $(".link_hide").css("display", "none");
  }

  GetArticle():void{
    this.biblioService.GetArticle().subscribe(
      data =>{
        console.log(data);
        this.articles = data;
      } 
    )
  }

}
