import { Component, OnInit } from "@angular/core";
import { resolve } from "url";

@Component({
  selector: "app-promises",
  templateUrl: "./promises.component.html",
  styleUrls: ["./promises.component.css"],
})
export class PromisesComponent implements OnInit {
  constructor() {}

  message: any;

  dell = {
    brand: "Dell",
    storage: "2 TB",
    color: "Sliver",
  };

  hp = {
    brand: "HP",
    storage: "1 TB",
    color: "White",
  };

  notAvailable = {
    status: "No Laptop Available",
  };

  dellAvailable() {
    return false;
  }

  hpAvailable() {
    return false;
  }

  ngOnInit() {
    let buyLaptop = new Promise((resolve, reject) => {
      // Used when a certain condition is successful
      // resolve("Promise is resolved");

      // Used when a certain condition is unsuccessful
      // reject("Promise is rejected");

      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve(this.hp);
        }, 3000);
      } else {
        return setTimeout(() => {
          reject(this.notAvailable);
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log(res);
        this.message = res;
      })
      .catch((res) => {
        console.log("On Reject, " + res);
        this.message = res.status;
      });
  }
}
