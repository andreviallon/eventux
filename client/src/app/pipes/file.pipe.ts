import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Pipe({
  name: 'file'
})
export class FilePipe implements PipeTransform {

  constructor(private http: HttpClient) { }

  transform(url: string) {

    return new Observable<File>((observer) => {
      const { next, error } = observer;

      this.http.get(url, { responseType: 'blob' }).subscribe(response => {
        console.log('url', url);
        console.log('response', response);
        const file = new File([response as BlobPart], url, { type: response.type, lastModified: Date.now() });

        // {
        //   size: response.size,
        //   type: response.type,
        //   name: 'url',
        //   lastModified: Date.now()
        // };

        console.log('secure file', file);
        return file;
      });

      return { unsubscribe() { } };
    });
  }
}
