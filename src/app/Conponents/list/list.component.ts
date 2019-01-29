import {Component, OnInit} from '@angular/core';
import {DataService} from '../../Services/data.service';
import {StudentsList} from '../../../students-list';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    users: StudentsList[];
    enable = true;
    findText = '';
    findDate = null;
    findRating = null;

    sortAsc = false;

    constructor(
        private dataService: DataService,
    ) {
        this.users = this.dataService.userList;
        console.log(this.users);
    }

    isFind(user: StudentsList) {
        // Если нет данных для поиска, то не нужно ничего искать
        if ((!this.findText || this.findText == '') && !this.findDate) {
            return false;
        }

        // Ищем Имя или фамилю вхождение в строку
        const searchText = (this.findText && (user.FirstName.indexOf(this.findText) !== -1
            || user.SecondName.indexOf(this.findText) !== -1))
            || !this.findText;
        // Поиск даты
        const searchDate = (this.findDate && user.Birthday === this.findDate) || !this.findDate;

        return searchText && searchDate;
    }

    isFilter(user: StudentsList) {
        if ((this.findRating || this.findRating == 0) && this.findRating != '') {
            return user.AverageScore != this.findRating;
        }
    }

    sortByFieldName(fieldName) {
        const k = this.sortAsc ? 1 : -1;
        this.sortAsc = !this.sortAsc;
        this.users.sort((a: StudentsList, b: StudentsList) => {
            return (a[fieldName] > b[fieldName]) ? 1 * k : -1 * k;
        });
    }

    deleteUser(i) {
        console.log(this.users);
        if (confirm('Удалить?')) {
            delete this.users.splice(i, 1);
        }
    }

    /*deleteUser(userSecondName: string) {
        this.dataService.deleteUser(userSecondName);
    }*/

    ngOnInit() {

    }
}
