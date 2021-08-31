import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  @Input() data: any = {};
  currentValue: string = '';

  toggleDropList() {
    this.data.isShow = !this.data.isShow
  }

  setValue(event: any) {
    this.currentValue = event.target.textContent
    this.toggleDropList()
  }

  ngOnInit(): void {
    this.currentValue = this.data.values[0]
  }

}
