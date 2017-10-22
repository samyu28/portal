import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  showSidebar = false;

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
}
