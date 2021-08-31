import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() setFilter: any = {
    btnName: 'Настроить фильтр',
    counter: '6 сессий',
    fields: {
      main: { search: "Поиск", program: "Программа", age: "Период", status: "Статус" },
      extra: { couch: "Тренер", progress: "Прогресс" }
    }
  }
  isSettingsShow: boolean = false
  isReset: boolean = false
  @Input() data: any[] = [
    { name: "Программа", isShow: false, values: ["Все", "Страхование с заботой о клиенте", "Главные правила продаж", "Первичное обучение КС", "Вторичное обучение КС", "Вклады: теория и практика", "Очное обучение менеджеров"] },
    { name: "Период", isShow: false, values: ["Июнь 2019", "Июль 2019", "Август 2019", "Сентябрь 2019", "Октябрь 2019", "Ноябрь 2019"] },
    { name: "Статус", isShow: false, values: ["Все", "Завершен", "В процессе"] }
  ]

  showSettings(): any {
    this.isSettingsShow = !this.isSettingsShow
  }

  ngOnInit(): void {
  }

}
