import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  post?: Post;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly postsService: PostsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPost(id).subscribe((post) => (this.post = post));
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
