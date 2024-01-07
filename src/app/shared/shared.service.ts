import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../enviroment';
import { Blog } from '../model/blog';

@Injectable()
export class SharedService {
  private http = inject(HttpClient);
  private afs = inject(AngularFirestore);

  imageURL = '';
  // constructor(private afs: A) {}

  public async uploadFile(file: File) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', enviroment.cloudinary.upload_preset);

      const { url } = (await this.http
        .post(enviroment.cloudinary.url, formData)
        .toPromise()) as {
        url: string;
      };

      this.imageURL = url;
    } catch (e) {
      console.log(e);
    }
  }

  public async getBlogs() {
    try {
      const resp = await this.afs.collection('/blogs').get().toPromise();
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  }

  public async addBlog(blog: Blog) {
    try {
      blog.id = this.afs.createId();
      await this.afs.collection('/blogs').add(blog);
    } catch (e) {
      console.log(e);
    }
  }

  public async editBlog(blog: Blog) {
    await this.deleteBlog(blog);
    await this.addBlog(blog);
  }

  public async deleteBlog(blog: Blog) {
    try {
      await this.afs.doc('/blogs' + blog.id).delete();
    } catch (e) {}
  }
}
