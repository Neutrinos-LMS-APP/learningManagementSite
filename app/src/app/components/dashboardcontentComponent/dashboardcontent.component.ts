/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';


import {selectedcoursedetaildemoComponent} from '../selectedcoursedetaildemoComponent/selectedcoursedetaildemo.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{courseservice} from '../../sd-services/courseservice';
import { courseaccessstatusComponent } from '../courseaccessstatusComponent/courseaccessstatus.component';





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
    selector: 'bh-dashboardcontent',
    templateUrl: './dashboardcontent.template.html'
})

export class dashboardcontentComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    
    instructorandrole=[];
    traineeandrole=[];
    coursesandrole=[];
    approvedandaccessCourse=[];
    rejectedCourses=[];
    totalcourses=0;
    constructor(private bdms: NDataModelService,      // Created Objects
                private registerServiceObj:registerinstructorservice,
                public dialog: MatDialog,
                private courseServiceObj:courseservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
      
       
   // this.getRoleAndStatus();  // Getting data of all user having role and status
    this.getCourseByStatus('null'); // getting all courses having status null for getting approval requests
    this.getCourseByStatus('approved');// getting all courses having status approved for making it private or public
    this.getCourseByStatus('reject'); // getting all courses having status rejected so that further we can approved it as per demand

   

    }

    async getCourseByStatus(status){
        if(status=='null')
        {
          this.coursesandrole = this.convertObjtoArr((await this.courseServiceObj.getCourseByStatus(status)).local.result);  // storing in coursesandrole of all courses  having null
          this.totalcourses=this.totalcourses+this.coursesandrole.length;
        }
        
        if(status=='approved')
        {
         this.approvedandaccessCourse = this.convertObjtoArr((await this.courseServiceObj.getCourseByStatus(status)).local.result);  // storing in coursesandrole of all courses  having null
         this.totalcourses=this.totalcourses+this.approvedandaccessCourse.length;
        }

        if(status=='reject')
        {
            this.rejectedCourses=this.convertObjtoArr((await this.courseServiceObj.getCourseByStatus(status)).local.result);
            this.totalcourses=this.totalcourses+this.rejectedCourses.length;
        }
    }

    openDialogAccess(selectedcourse)
    {
     const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.data={selectedcourse}; //assigning data of particular data
    //  console.log(selecteddInfo);
      const dialogRef = this.dialog.open(courseaccessstatusComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=> {this.getCourseByStatus('approved'); this.getCourseByStatus('reject');} );
    }
    openDialog(selecteddInfo,role) {  // going for opening dialog popup for approved and delete
        
         if(role == 'course'){  // send data=instructor for selectedcoursedetaildemoComponent for doing approved functionality
            const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.data={selecteddInfo}; //assigning data of particular data
      console.log(selecteddInfo);
      const dialogRef = this.dialog.open(selectedcoursedetaildemoComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=>  {this.getCourseByStatus('null');this.getCourseByStatus('reject');this.getCourseByStatus('approved');});
        }
    }

//     async getRoleAndStatus(){
//      this.instructorandrole = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('null','instructor')).local.result); // getting all instructors having status null
//      this.traineeandrole = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('null','trainee')).local.result); // getting all trainees having status null
//    }
   
   convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);   // coverting result data in array so that we can use it for frontend
   }
    //updating the status of instructor and trainne
   updateStatus(id,status){
        this.registerServiceObj.updateByStatus({"_id":id,"status":status});  
      //   this.getRoleAndStatus();
   }
   
}
