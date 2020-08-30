import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { AuthenticationService } from "../../services/auth/authentication.service";

@Component({
  selector: "app-back-office",
  templateUrl: "./back-office.component.html",
  styleUrls: ["./back-office.component.css"],
  animations: [
    trigger("smoothCollapse", [
      state(
        "initial",
        style({
          height: "0",
          overflow: "hidden",
          opacity: "0",
        })
      ),
      state(
        "final",
        style({
          overflow: "hidden",
          opacity: "0.9",
        })
      ),
      transition("initial=>final", animate("300ms")),
      transition("final=>initial", animate("300ms")),
    ]),
  ],
})
export class BACKOFFICEComponent implements OnInit {
  title = "Plateforme UIB";
  constructor(private router: Router, private auth: AuthenticationService) {}

  private isOnP: boolean;

  ngOnInit() {}

  logOut() {
    this.auth.loggedOut();
    this.router.navigate(["/Login"]);
  }
}
