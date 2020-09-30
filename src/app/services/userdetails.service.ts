import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, map, tap } from "rxjs/operators";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserdetailsService {
  url = "http://localhost:57113/api/UserDetails";

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map((data) => {
        return data;
      }),
      tap((data) => {
        console.log("Services Tap: " + data);
      }),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      }),
      finalize(() => {
        console.log("Task Completed");
      })
    );
  }
}
