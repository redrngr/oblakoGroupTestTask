import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oblakogroupTest'
  isModalShow: boolean = false

  showModal(value: boolean) {
    this.isModalShow = value
    document.body.classList.add('hide-overflow')
  }

  hideModal(value: boolean) {
    this.isModalShow = value
    document.body.classList.remove('hide-overflow')
  }
}
