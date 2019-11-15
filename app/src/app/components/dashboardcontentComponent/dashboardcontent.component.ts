/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';

import {selectedinstructordetaildemoComponent} from '../selectedinstructordetaildemoComponent/selectedinstructordetaildemo.component';
import {selectedtraineedemodetailsComponent} from '../selectedtraineedemodetailsComponent/selectedtraineedemodetails.component';
import {selectedcoursedetaildemoComponent} from '../selectedcoursedetaildemoComponent/selectedcoursedetaildemo.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
    selector: 'bh-dashboardcontent',
    templateUrl: './dashboardcontent.template.html'
})

export class dashboardcontentComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    cardlenght;
    instructorandrole=[];
    traineeandrole=[];
    coursesandrole=[];
    constructor(private bdms: NDataModelService,private registerServiceObj:registerinstructorservice,public dialog: MatDialog,private courseServiceObj:courseservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
       // this.cardlenght=['a','b','c','d','e','f','g','h','i','j','k','l','m'];
       
     this.getRoleAndStatus();
    this.getCourseByStatus('null');
    }

    async getCourseByStatus(status){
        this.coursesandrole = this.convertObjtoArr((await this.courseServiceObj.getCourseByStatus(status)).local.result);
    }
    openDialog(selecteddInfo,role) {
        if(role=='instructor'){
            const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={selecteddInfo};
      const dialogRef = this.dialog.open(selectedinstructordetaildemoComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=>  this.getRoleAndStatus());
        }
        else if(role == 'trainee'){
            const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={selecteddInfo};
      const dialogRef = this.dialog.open(selectedtraineedemodetailsComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=>  this.getRoleAndStatus());
        }
        else if(role == 'course'){
            const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={selecteddInfo};
      console.log(selecteddInfo);
      const dialogRef = this.dialog.open(selectedcoursedetaildemoComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=>  this.getCourseByStatus('null'));
        }
    }
    // openDialogCourses()
    // {
    //     const dialogRef = this.dialog1.open(selectedcoursedetaildemoComponent, {
    //   width: '700px',
    //   height:'500px',
    //   data:'hello' 
    // });
    
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.ngOnInit();
    // });
    // }
//     openDialogInstructor() {
//     const dialogRef = this.dialog1.open(selectedinstructordetaildemoComponent, {
//       width: '550px',
//       height:'500px',
//       data:'hello' 
//     });
    
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.ngOnInit();
//     });
//   }

//   openDialogTrainee() {
//     const dialogRef = this.dialog1.open(selectedtraineedemodetailsComponent, {
//       width: '550px',
//       height:'500px',
//       data:'hello' 
//     });
    
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.ngOnInit();
//     });
//   }
    //getting data by status need to pass the status value
    async getRoleAndStatus(){
     this.instructorandrole = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('null','instructor')).local.result);
     this.traineeandrole = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('null','trainee')).local.result);
   }
   
   convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
   }
    //updating the status of instructor and trainned
   updateStatus(id,status){
        this.registerServiceObj.updateByStatus({"_id":id,"status":status});
         this.getRoleAndStatus();
   }
   
}
