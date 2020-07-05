import { ITeacher } from './state/teacher/teacher.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachers: ITeacher[] = [
    {
      _id: '123',
      firstName: 'John',
      lastName: 'Doe',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
      img: './src/app/assets/john-doe-avatar.png',
      email: 'johndoe@gmail.com',
      phoneNumber: 30303030
    },
    {
      _id: '456',
      firstName: 'Jane',
      lastName: 'Doe',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
      img: './src/app/assets/john-doe-avatar.png',
      email: 'janedoe@gmail.com',
      phoneNumber: 30303030
    }
  ]

  public getTeachers(): ITeacher[] {
    return this.teachers;
  }

  public getTeacher(id: string): ITeacher {
    return this.teachers.find(event => event._id === id);
  }
}
