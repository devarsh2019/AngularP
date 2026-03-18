import { Component, OnInit } from '@angular/core';
import { UserModel, Userservice } from './userservice';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  userData: UserModel[] = [];
  searchUser: UserModel[] = [];
  searchName = '';
  favoriteUsers: UserModel[] = [];
  constructor(private data: Userservice) {}
  ngOnInit(): void {
    this.data.getData().subscribe((res) => {
      this.userData = res;
      this.searchUser = this.userData;
    });
    this.data.favouriteSubject.subscribe((res) => {
      this.favoriteUsers = res;
    });
  }
  searchByName() {
    this.searchUser = this.userData.filter((username) =>
      username?.name.toLowerCase().includes(this.searchName.toLowerCase()),
    );
    console.log(this.searchUser);
  }
  addFavorite(user: UserModel) {
    this.data.addFavorite(user);
  }
  isFavorite(userId: number) {
    return this.favoriteUsers.find((u) => u.id === userId);
  }
}
