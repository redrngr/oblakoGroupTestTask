import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  @Input() tab: string = ''
  data: any = {
    name: "Программа",
    isShow: false,
    values: ["Все", "Страхование с заботой о клиенте", "Главные правила продаж", "Первичное обучение КС", "Вторичное обучение КС", "Вклады: теория и практика", "Очное обучение менеджеров"],
    events: ["Главные правила продаж  Тренинг", "Страхование без потерь  Тренинг", "Страховой случай или как помочь клиенту   Тренинг"]
  }

  ngOnInit(): void {

  }

}
