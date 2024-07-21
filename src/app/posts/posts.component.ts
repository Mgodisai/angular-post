import { Component, DestroyRef } from '@angular/core';
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
  private posts: Post[] = [];
  constructor(
    private readonly postsService: PostsService,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.postsService
      .getPosts()
      .pipe(
        map((posts) => posts.slice(0, 10)),
        tap((posts) => (this.posts = posts)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  getPosts() {
    return this.posts;
  }

  deletePost(id: number): void {
    this.postsService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }
}
