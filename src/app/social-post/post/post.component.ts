import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/post";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: Post[];
  @Output() onAdd = new EventEmitter<any>();

  constructor() {}
  deletePost(i): void {
    console.log(i);
  }

  ngOnInit() {}
}
