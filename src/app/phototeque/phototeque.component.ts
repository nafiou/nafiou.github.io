import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phototeque',
  templateUrl: './phototeque.component.html',
  styleUrls: ['./phototeque.component.css']
})
export class PhototequeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".link_hide").css("display", "none");
  }

}
