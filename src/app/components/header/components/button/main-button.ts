import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-main-button',
    standalone: true,
    imports: [RouterLink],
    templateUrl: 'main-button.html',
    styleUrl: 'main-button.css',
})

export class MainButton { }