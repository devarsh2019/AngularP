import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class Userservice {
  private url = 'https://jsonplaceholder.typicode.com/users';
  favouriteSubject = new BehaviorSubject<UserModel[]>([]);
  currentFavourites: UserModel[] = [];
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<UserModel[]>(this.url);
  }
  addFavorite(user: UserModel) {
    if (this.currentFavourites.find((u) => u.id === user.id)) {
      this.currentFavourites = this.currentFavourites.filter((u) => {
        return u.id !== user.id;
      });
      this.favouriteSubject.next(this.currentFavourites);
    } else {
      this.currentFavourites.push(user);
      this.favouriteSubject.next(this.currentFavourites);
    }
  }
}
