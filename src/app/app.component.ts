import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FD_Assignment';
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
