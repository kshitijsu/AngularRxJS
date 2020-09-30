import { Component, OnInit } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { map, catchError, tap, finalize } from "rxjs/operators";

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.css"],
})
export class ObservablesComponent implements OnInit {
  allNumbers = of(1, 89, 6, 8, 67, 83, 77);

  constructor() {}

  ngOnInit() {
    // Implementing Observables, observer and subscription
    console.warn("Implementing Observables, observer and subscription");
    var observer = new Observable(function subs(subscriber) {
      try {
        subscriber.next("My First Observable");
        subscriber.next("My Second Observable");
        subscriber.complete();
        subscriber.next("My Third Observable");
      } catch (err) {
        subscriber.error(err);
      }
    });

    observer.subscribe(
      (x) => console.log(x),
      (e) => console.log(e),
      () => console.log("Completed")
    );

    // pipe and catchError
    console.warn("Implementing pipe and catchError");
    var finalValues = this.allNumbers.pipe(
      map((el) => {
        if (el === 67) {
          throw new Error("Testing Error");
        }
        return el * 10;
      }),
      tap((data) => {
        console.log(data);
      }),
      catchError((err) => {
        console.error(err.message);
        // return of("From CatchError");
        return throwError(err);
      }),
      finalize(() => {
        console.log("Task Completed");
      })
    );

    // finalValues.subscribe(
    //   (x) => console.log(x),
    //   (err) => console.error(err),
    //   () => console.log("Task Completed")
    // );

    finalValues.subscribe();
  }
}
