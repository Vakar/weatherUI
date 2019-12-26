import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  message: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message => (this.message = message)
    );
  }
}
