import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-post",
  templateUrl: "./social-post.component.html",
  styleUrls: ["./social-post.component.css"]
})
export class SocialPostComponent implements OnInit {
  posts: Post[] = [
    {
      title: "test",
      thought: "this is a test"
    },
    {
      title: "test",
      thought: "this is a test"
    }
  ];
  constructor() {}

  ngOnInit() {}

  addPost() {
    this.posts.push();
  }
  deletePost() {
    this.posts.splice(1, 1);
  }
}
