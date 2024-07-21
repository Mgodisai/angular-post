import { Component, DestroyRef, signal } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  id = Number(this.route.snapshot.paramMap.get('id'));
  post = toSignal(this.postsService.getPost(this.id));

  constructor(
    private readonly route: ActivatedRoute,
    private readonly postsService: PostsService,
    private readonly router: Router
  ) {}

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
