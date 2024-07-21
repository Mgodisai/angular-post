import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [PostsComponent, PostDetailComponent],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  exports: [PostsComponent, PostDetailComponent],
})
export class PostsModule {}
