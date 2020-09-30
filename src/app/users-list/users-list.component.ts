import { Component, OnInit } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, map, tap } from "rxjs/operators";
import { User } from "../models/user";
import { UserdetailsService } from "../services/userdetails.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  data: any = [];
  allUser: Observable<User[]>;

  constructor(private userService: UserdetailsService) {}

  ngOnInit() {
    this.loadAllUser();

    var userDetails = this.userService.getAllUsers().pipe(
      tap((data) => {
        console.log("Users List Tap: " + data);
      }),
      map((data) => {
        this.data = data;
        console.log("Map Data: " + this.data);
      }),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      }),
      finalize(() => {
        console.log("Task Completed");
      })
    );

    userDetails.subscribe();
  }

  loadAllUser() {
    this.allUser = this.userService.getAllUsers();
    console.log("All users: " + this.allUser);
  }
}
