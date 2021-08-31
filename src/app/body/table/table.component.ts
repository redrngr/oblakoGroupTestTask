import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  isSort: boolean = false
  isSortUp: boolean = true
  events: any = [
    {
      "name": "Страхование с заботой о клиенте",
      "members": 12,
      "couch": "",
      "progres": 95,
      "date": "23 дек, 9:00"
    },
    {
      "name": "Главные правила продаж",
      "members": 10,
      "couch": "",
      "progres": 91,
      "date": "14 ноя, 9:30"
    },
    {
      "name": "Первичное обучение КС",
      "members": 8,
      "couch": "",
      "progres": 86,
      "date": "19 окт, 14:30"
    },
    {
      "name": "Вторичное обучение КС",
      "members": 18,
      "couch": "",
      "progres": 82,
      "date": "10 окт, 16:00"
    },
    {
      "name": "Вклады: теория и практика",
      "members": 6,
      "couch": "",
      "progres": 79,
      "date": "5 окт, 15:00"
    },
    {
      "name": "Очное обучение менеджеров",
      "members": 20,
      "couch": "",
      "progres": 73,
      "date": "27 сен, 11:00"
    }
  ]

  sortForProgress(): void {
    this.isSort = true
    this.events = this.events.sort((a: any, b: any) => {
      if (!this.isSortUp) return a["progres"] - b["progres"]
      return b["progres"] - a["progres"]
    })
    this.isSortUp = !this.isSortUp
  }

  ngOnInit(): void {
  }

}
