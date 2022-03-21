import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IListUser } from 'src/app/configs/models/IListUser';
import { UserListService } from 'src/app/services/user-list.service';
import { Md5 } from 'ts-md5/dist/md5';
import { DetailsUserComponent } from './details-user/details-user.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersLists: IListUser[] = [];
  md5 = new Md5();

  constructor(
    private _srvUser: UserListService,
    private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListUsers();
    setTimeout(() => {
      this.gravatartUsers();
    }, 500)
  }

  getListUsers(): void {
    this._srvUser.getListUsers().
      subscribe(res => this.usersLists = res);
  }

  gravatartUsers(): void {
    this._srvUser.getListUsers()
      .subscribe(users => {
        this.usersLists = users.map(user => {
          const md5Str = this.md5.appendStr(user.email).end();
          return { ...user, image: `https://www.gravatar.com/avatar/${md5Str}?d=monsterid` }
        })
      },
        error => console.log(error)
      );
  }

  detailsUser(listUser: IListUser): void {
    this._dialog.open(DetailsUserComponent, {
      data: listUser,
      height: '35em',
      width: '70%'
    });
  }
}
