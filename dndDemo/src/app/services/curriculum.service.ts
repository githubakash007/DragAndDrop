import { Injectable } from '@angular/core';
import { ICurriculum, ICourse } from './ICurriculum';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurriculumService {

    private _url: string = "/assets/TestData/courses.json";
    curriculumList: ICourse[] = [];
    //private curriculumListSource = new BehaviorSubject<ICurriculum[]>(this.curriculumList);

    //curriculumListObservable = this.curriculumListSource.asObservable();
      
    constructor(private _http: Http) { }

    getCurriculumList(): Observable<ICourse[]> {

        return this._http.get(this._url)
            .map((response: Response) => response.json())
        //.catch(this.errorHandler)
    }


    getTotalHours(list: ICourse[]): number {
        let total = 0;
        total = list.reduce(((x, y) => x += y.duration), 0);
        return total;
    }


    //definetely need to optimize






    getCurriculumList123(): ICourse[] {

        this.curriculumList = [
            {
                "courseid": "PDE5-311",
                "coursename": "Angular with cloud",
                "duration": 2,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Angular",
                    "Azure",
                    "AWS"
                ],
                "order": 0
            },
            {
                "courseid": "PDE5-312",
                "coursename": "Angular component",
                "duration": 4,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Angular"

                ]
                ,
                "order": 11
            },
            {
                "courseid": "PDE5-313",
                "coursename": "UI Development",
                "duration": 4,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Javascript",
                    "json",
                    "HTML",
                    "CSS"
                ],
                "order": 2
            },
            {
                "courseid": "PDE5-314",
                "coursename": "Using Bootstrap",
                "duration": 5,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Bootstrap",
                    "CSS",
                    "Jquery"
                ]
                ,
                "order": 3
            },
            {
                "courseid": "PDE1-211",
                "coursename": "Angular with azure",
                "duration": 5,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Angular",
                    "Azure"
                ],
                "order": 4
            },
            {
                "courseid": "PDE1-212",
                "coursename": "customer focus",
                "duration": 5,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Customer Knowledge",
                    "Good focus"
                ],
                "order": 5
            },
            {
                "courseid": "PDE1-213",
                "coursename": "Angular with azure",
                "duration": 10,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Angular",
                    "Azure"
                ],
                "order": 6
            },
            {
                "courseid": "PDE1-214",
                "coursename": "Angular with azure",
                "duration": 5,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Angular",
                    "Azure"
                ],
                "order": 7
            },
            {
                "courseid": "PDE1-211",
                "coursename": "Angular with azure",
                "duration": 5,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Angular",
                    "Azure"
                ],
                "order": 8
            },
            {
                "courseid": "PDE1-211",
                "coursename": "Angular with azure",
                "duration": 10,
                "ismandatory": 0,
                "isselected": 0,
                "competencies": [
                    "Angular",
                    "Azure"
                ],
                "order": 9
            }
        ];
        return this.curriculumList;

    }

}
