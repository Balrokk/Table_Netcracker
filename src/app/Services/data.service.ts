import {Injectable} from '@angular/core';

import {StudentsList} from '../../students-list';


export interface UserModels {

    firstName: string;
    secondName: string;
    lastName: string;
    dateBorn: any;
    AverageScore: number;
}


@Injectable({
    providedIn: 'root'
})
export class DataService {

    userList = [];

    constructor() {
        const st1: StudentsList = new StudentsList('Андрей', 'Васильев', 'Олегович', '2018-11-18', 3);
        this.userList.push(st1);
        const st2: StudentsList = new StudentsList('Максим', 'Федоров', 'Сергеевич', '2017-02-18', 4);
        this.userList.push(st2);
        const st3: StudentsList = new StudentsList('Петя', 'Иванов', 'Юрьевич', '2010-07-20', 5);
        this.userList.push(st3);
        const st4: StudentsList = new StudentsList('Вася', 'Суслов', 'Сергеевич', '2000-06-18', 3);
        this.userList.push(st4);
    }

    /*deleteUser(userSecondName) {
        const users = this.userList.value.filter((item: StudentsList) => {
            if (item.getSecondName() === userSecondName) {
                return false;
            }
            return true;
        });
        this.userList.next(users);
        this.saveToLocalStorage();
    }


    // Сохраняем в ls
    saveToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.userList.value));
    }*/


}
