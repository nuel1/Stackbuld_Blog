import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { LargeModalComponent } from './components/modal/large-modal/large-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    BlogFormComponent,
    HeaderComponent,
    FooterComponent,
    BlogCardComponent,
    LargeModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [SharedService],
  exports: [
    HeaderComponent,
    FooterComponent,
    BlogCardComponent,
    BlogFormComponent,
    LargeModalComponent,
  ],
})
export class SharedModule {}
