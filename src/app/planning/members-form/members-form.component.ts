import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-form',
  templateUrl: './members-form.component.html',
  styleUrls: ['./members-form.component.scss']
})
export class MembersFormComponent implements OnInit {
  @Input() tab: string = ''
  isSettingsShow: boolean = false
  setFilter: any = {
    btnName: 'Настроить',
    counter: '8 пользователей',
    fields: {
      main: { find: "Поиск", team: "Группа", post: "Должность", expirience: "Стаж" },
      extra: { unit: "Подразделение", state: "Округ", city: "Город" }
    }
  }

  data: any[] = [
    { name: "Группа", isShow: false, values: ["Администрирование", "Группа разработки", "Бухгалтерия", "Рабочий персонал"] },
    { name: "Должность", isShow: false, values: ["Админитратор", "Менеджер по персоналу", "Разработчик", "Президент"] },
    { name: "Стаж", isShow: false, values: ["Все", "1 - 3 года", "3 - 6 лет", "Больше 6 лет"] }
  ]


  showSettings() {
    this.isSettingsShow = !this.isSettingsShow
  }

  ngOnInit(): void {
  }

}
