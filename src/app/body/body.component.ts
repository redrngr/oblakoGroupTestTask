import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  isSettingsShow: boolean = false
  setFilter: any = {
    btnName: 'Настроить фильтр',
    counter: '',
    fields: {
      main: { search: "Поиск", program: "Программа", age: "Период", status: "Статус" },
      extra: { couch: "Тренер", progress: "Прогресс" }
    }
  }

  data: any =
    {
      name: "Сортировка",
      isShow: false,
      values: ["По прогрессу обучения ", "По количеству участников", "По дате начала"]
    }

  showSettings(): any {
    this.isSettingsShow = !this.isSettingsShow
  }

  ngOnInit(): void {
  }

}
