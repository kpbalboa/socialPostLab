import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/post";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {

  @Input() post: Post[];
  @Input() index: number;
  @Output() delete = new EventEmitter<any>();

  //This triggers parent to splice(delete items)
  
  constructor() {}

  deletePost(index: number): void {
    this.delete.emit(index);
    console.log(index)
    
 }


  ngOnInit() {}
}