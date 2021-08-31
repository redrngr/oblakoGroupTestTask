import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  @Input() isShow: boolean = false;
  @Output() deleteRequest = new EventEmitter<boolean>();
  tab: string = 'main'


  hideModal(value: boolean) {
    this.deleteRequest.emit(value);
  }

  checkedMainTab() {
    this.tab = 'main'
  }

  checkedMembersTab() {
    this.tab = 'members'
  }

  ngOnInit(): void {
  }

}
