/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{courseservice} from '../../sd-services/courseservice';
import { Router } from '@angular/router';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
import {NSnackbarService} from 'neutrinos-seed-services';

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
    selector: 'bh-coursedetail',
    templateUrl: './coursedetail.template.html'
})

export class coursedetailComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    courseId;
    courseData;
     outcomes;
     userName;
     userId;
     coursename;coursedescription;courseauthor;courseduration;courseprice;
     
    //demo=['demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1dem1emo1','demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1dem1emo1demo1demo1','demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1dem1emo1demo1demo1','demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1dem1emo1demo1','demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1dem1emo1demo1','demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1'];
   // daata="demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1";
    constructor(private bdms: NDataModelService,private courseServiceObj:courseservice,public router:Router,private registerServiceObj:registerinstructorservice,public snackbarService:NSnackbarService) {
        super();
        this.mm = new ModelMethods(bdms);
       
    }

    ngOnInit() {
       this.courseId = localStorage.courseId;
       this. userName = sessionStorage.username;
       this.userId = sessionStorage.userid;
        this.getCourseById(this.courseId);
        
    }
    async getCourseById(id){
        
      this.courseData = (await this.courseServiceObj.getCourseById(id)).local.result;
        this.outcomes=[this.courseData.learning_outcome_1,this.courseData.learning_outcome_2,this.courseData.learning_outcome_3,this.courseData.learning_outcome_4,this.courseData.learning_outcome_5,this.courseData.learning_outcome_6];
      console.log(this.outcomes);

      this.coursename=this.courseData.courseName;
      this.coursedescription=this.courseData.coursedescription;
      this.courseauthor=this.courseData.createdby;
      this.courseduration=this.courseData.duration;
      this.courseprice=this.courseData.price;
        
    }

buyNow(){
    if(this.userName == undefined){
          this.snackbarService.openSnackBar('please login for course');
         this.router.navigate(['/login']);
    }
    else if(this.courseId !==null ,this.userId !==undefined ){

        this.registerServiceObj.updateCourses({'_id':this.userId,"coursesid":this.courseId});
        //this.snackbarService.openSnackBar('courses added successfully');
        this.router.navigate(['/allcourses']);
    }
    
}

}
