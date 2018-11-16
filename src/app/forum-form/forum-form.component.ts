import { Component, OnInit } from '@angular/core';
import { Forum } from '../forum';
@Component({
  selector: 'app-forum-form',
  templateUrl: './forum-form.component.html',
  styleUrls: ['./forum-form.component.css']
})
export class ForumFormComponent implements OnInit {
  model : Forum;
  submitted = false;
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

  ngOnInit() {
  }

}
