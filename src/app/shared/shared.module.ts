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
import { SearchComponent } from './components/search/search.component';
import { DeleteModalComponent } from './components/modal/delete-modal/delete-modal.component';
import { SmallModalComponent } from './components/modal/small-modal/small-modal.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { enviroment } from '../enviroment';

@NgModule({
  declarations: [
    BlogFormComponent,
    HeaderComponent,
    FooterComponent,
    BlogCardComponent,
    LargeModalComponent,
    SearchComponent,
    DeleteModalComponent,
    SmallModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [
    SharedService,
    { provide: FIREBASE_OPTIONS, useValue: enviroment.firebase },
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BlogCardComponent,
    BlogFormComponent,
    LargeModalComponent,
    SearchComponent,
    DeleteModalComponent,
    SmallModalComponent,
  ],
})
export class SharedModule {}
