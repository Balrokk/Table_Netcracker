export class StudentsList {
    FirstName: string;
    SecondName: string;
    LastName: string;
    Birthday: any;
    AverageScore: number;

    constructor(First: string, Second: string, Last: string, day: any, Score: number) {
        this.FirstName = First;
        this.SecondName = Second;
        this.LastName = Last;
        this.Birthday = day;
        this.AverageScore = Score;
    }

    getFirstName(): string {
        return this.FirstName;
    }

    getSecondName(): string {
        return this.SecondName;
    }

    getLastName(): string {
        return this.LastName;
    }

    getBirthday(): number {
        return this.Birthday;
    }

    getAverageScope(): number {
        return this.AverageScore;
    }
}



