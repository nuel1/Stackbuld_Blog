import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss',
})
export class BlogFormComponent implements OnChanges {
  formBuilder = inject(FormBuilder);

  @Input() uploadedImageURL = '';
  @Output() onUploadFile: EventEmitter<File> = new EventEmitter();
  @Output() onRemoveCover: EventEmitter<string> = new EventEmitter();

  form = this.formBuilder.group({
    cover: ['', Validators.required],
    title: ['', Validators.required],
    author: ['', Validators.required],
    content: ['', Validators.required],
  });

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200px',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: 'p',
    defaultFontName: '',
    defaultFontSize: '',
    customClasses: [],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { },
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['subscript', 'superscript', 'fontName', 'heading'],
      [
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode',
        'customClasses',
        'link',
        'unlink',
      ],
    ],
  };

  ngOnChanges(changes: SimpleChanges): void {
    const url = changes['uploadedImageURL'].currentValue;
    this.form.controls.cover.setValue(url);
  }

  getUploadedFile(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.item(0) as File;

    this.onUploadFile.emit(file);
  }

  openSystemFileUploader() {
    document.getElementById('input-file')?.click();
  }

  submit() {
    console.log(this.form.value);
  }
}
