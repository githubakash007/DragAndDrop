export interface ICurriculum{

    skillgrp:string,
    courses:ICourse[]
}


export interface ICourse{
    courseid:string,
    coursename:string,
    duration:number,
    ismandatory: number,
    isselected: number,
    competencies:string[],
    order:number

}