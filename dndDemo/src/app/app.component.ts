import { Component } from '@angular/core';
import { CurriculumService } from './services/curriculum.service';
import { ICurriculum, ICourse } from './services/ICurriculum';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list1: ICourse[];
  list1Sorted:ICourse[];
  list2: ICourse[];
  constructor(private _service:CurriculumService ){
     
        let ll =  this._service.getCurriculumList123();
        this.list1 = ll.filter(x => x.courseid != 'PDE1-211');
        this.list2 = ll.filter(x => x.courseid == 'PDE1-211');
    // this._service.getCurriculumList().subscribe(
    //   val => {
    //     this.list1 = val.filter(x => x.courseid != 'PDE1-211');
    //     this.list2 = val.filter(x => x.courseid == 'PDE1-211');
    //   }
    // )

  }

  dragSuccess(e:any):void{
    console.log(e);
    console.log('drag completed');
  }

  saveData(e:ICourse[]):void{
    console.log(e);
     this.list1.forEach((x,i) =>  x.order = i ); 
       
  }
}
