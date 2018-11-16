import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'bootstrap';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
    $(".link_hide").css("display", "block");
  }
  

}
