/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
import{courseservice} from '../../sd-services/courseservice';
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

 /**
 * 
 * Serivice Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

@Component({
    selector: 'bh-traineedashboardcontent',
    templateUrl: './traineedashboardcontent.template.html'
})

export class traineedashboardcontentComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
     cardlenght=['a','b','c','d','e','f','g','h','i','j','k','l','m'];
     showcoursedetails=true;
     userInfo;
     userId;
    coursesIdArray =[];
    coursesData;
    coursesInfoArray=[];
    constructor(private bdms: NDataModelService,private registerServiceObj:registerinstructorservice,private courseServiceObj:courseservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.userId = sessionStorage.userid;
        this. getById(this.userId);
       
        
    }
    coursename;coursedescription;duration;out1;out2;out3;out4;out5;out6;price;
    selectedcourseDetails(course){
        this.coursename=course.courseName;
        this.coursedescription=course.duration;
        this.duration=course.coursedescription;
        this.price=course.price;
        this.out1=course.learning_outcome_1;
        this.out1=course.learning_outcome_1;
        this.out1=course.learning_outcome_1;
        this.out1=course.learning_outcome_1;
        this.out1=course.learning_outcome_1;
        this.out1=course.learning_outcome_1;

        this.showcoursedetails=false;
        
    }

    ViewDetails()
    {
        this.showcoursedetails=false;
    }
    async getById(id){
       this.userInfo =this.convertObjtoArr( (await this.registerServiceObj.getById(id)).local.result);
       this.coursesIdArray = this.userInfo[0].registercourses;
       console.log(this.coursesIdArray);
       for(let i=0;i< this.coursesIdArray.length;i++){
          this.getCourseById(this.coursesIdArray[i]);
        }
     
       
    }
    
    //converting object of objects into araay of objects
    convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
    }
    // getCourses(allUsers){
    //    for(let i=0;i< allUsers.length;i++){
    //        if(allUsers[i]._id == this.userId){
    //             this.registredCourses =  allUsers[i].registercourses;
    //             this.getCourseInfo(this.registredCourses);
    //         }
    //    }
    // }
    // getCourseInfo(coursesArry)
    // {
        
    // }
     async getCourseById(id){
        this.coursesData = (await this.courseServiceObj.getCourseById(id)).local.result;
        this.coursesInfoArray.push(this.coursesData);
        console.log( this.coursesInfoArray);
    }



}
