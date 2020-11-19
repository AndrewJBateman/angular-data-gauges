import { Component, ViewChild } from "@angular/core";
import { GoogleChartsModule } from "angular-google-charts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-data-gauges";

  @ViewChild("googlechart")
  googlechart: GoogleChartsModule;
  chart = {
    title: "angular-data-gauges",
    type: "Gauge",
    data: [
      ["Memory", 50],
      ["CPU", 90],
      ["Battery", 60],
    ],
    options: {
      width: 400,
      height: 120,
      greenFrom: 0,
      greenTo: 75,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5,
    },
  };
}
