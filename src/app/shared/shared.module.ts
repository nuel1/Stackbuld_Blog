import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    BlogCardComponent,
    RouterModule,
  ],
  providers: [SharedService],
  exports: [HeaderComponent, FooterComponent, BlogCardComponent],
})
export class SharedModule {}
