import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../services/curriculum.service';
import { ICourse } from '../services/ICurriculum';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { dragula } from 'ng2-dragula';

@Component({
  selector: 'app-dragula-dnd',
  templateUrl: './dragula-dnd.component.html',
  styleUrls: ['./dragula-dnd.component.css']
})
export class DragulaDndComponent implements OnInit {

  list1: ICourse[];
  list1Sorted:ICourse[];
  list2: ICourse[];
  msg:string;
  totalHour:number = 0;
  constructor(private _service:CurriculumService,private _dservice:DragulaService ){
    
    var drake = dragula({
      // isContainer: function (el) {
      //   return el.classList.contains('dnd-container');
       
      // },
      revertOnSpill: true,
      removeOnSpill:true
    });

    drake.on('drag', function (el) {
      this.msg  = 'dragsssssssssssssssss';
      el.className = el.className.replace('ex-moved', '');
    }).on('drop', function (el) {
      this.msg  = 'drop';
      el.className += ' ex-moved';
    }).on('over', function (el, container) {
      this.msg  = 'over';
      container.className += ' ex-over';
    }).on('out', function (el, container) {
      this.msg  = 'out';
      container.className = container.className.replace('ex-over', '');
    });



       let ll =  this._service.getCurriculumList123();
       this.list1 = ll.filter(x => x.courseid != 'PDE1-211');
       this.list2 = ll.filter(x => x.courseid == 'PDE1-211');

       this.totalHour = this._service.getTotalHours(this.list1);
      //  this._dservice.setOptions('', {
      //   revertOnSpill: true,
      //   removeOnSpill:true
      //  // containers:[this.getContainers()]

      //  });

  //  this._service.getCurriculumList().subscribe(
  //    val => {
  //      this.list1 = val.filter(x => x.courseid != 'PDE1-211');
  //      this.list2 = val.filter(x => x.courseid == 'PDE1-211');
  //    }
  //  )



 }

  getContainers(){
   return document.getElementsByClassName('dnd-container');
 }

  ngOnInit() {

    
    
    this._dservice
    .drag
    .subscribe(value => {
      console.log(value[1].innerText);
      this.msg = `Dragging the ${value[1].innerText}!`;
    });

    this._dservice
    .drop
    .subscribe(value => {

      this.totalHour = this._service.getTotalHours(this.list1);
      this.msg = `Dropped the ${ value[1].innerText }!`;

    //   setTimeout(() => {
    //     this.msg = '';
    //   }, 1000);
    // });

    this._dservice.cancel.subscribe(val => this.msg = 'drag cancelled');
    
  });
}

  saveData(e:ICourse[]):void{
    console.log(e);
     //this.list1.forEach((x,i) =>  x.order = i ); 
       
  }

}
