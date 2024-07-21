import { Component, DestroyRef, signal } from '@angular/core';
import { PostsService } from './posts.service';
import { map, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts = signal<Post[]>([]);

  constructor(
    private readonly postsService: PostsService,
    private readonly destroyRef: DestroyRef
  ) {
    this.postsService
      .getTopPosts()
      .pipe(
        tap((posts) => this.posts.set(posts)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  ngOnInit(): void {}

  deletePost(id: number): void {
    this.postsService.deletePost(id).subscribe();
    this.posts.update((posts) => posts.filter((post) => post.id !== id));
  }
}
