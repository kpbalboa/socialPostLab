import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-post",
  templateUrl: "./social-post.component.html",
  styleUrls: ["./social-post.component.css"]
})
export class SocialPostComponent implements OnInit {
  showForm: boolean = false;
  posts: Post[] = [
    {
      title: "test",
      thought: "this is a test dope"
    },
    {
      title: "test",
      thought: "this is a test"
    }
  ];
  constructor() {}

  ngOnInit() {}

  onAddHandler(newPost: Post): void {
    this.posts.push(newPost);
    this.toggleForm();
    console.log(this.posts);
  }
  onDeletePost(index): void {
    this.posts.splice(index, 1);
  }
  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
