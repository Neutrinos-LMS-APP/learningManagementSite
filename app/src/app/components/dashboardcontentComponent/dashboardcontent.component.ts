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
    
    instructorandrole=[];
    traineeandrole=[];
    coursesandrole=[];
    constructor(private bdms: NDataModelService,      // Created Objects
                private registerServiceObj:registerinstructorservice,
                public dialog: MatDialog,
                private courseServiceObj:courseservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
      
       
    this.getRoleAndStatus();  // Getting data of all user having role and status
    this.getCourseByStatus('null'); // getting all courses having status null for getting approval requests
    }

    async getCourseByStatus(status){
        this.coursesandrole = this.convertObjtoArr((await this.courseServiceObj.getCourseByStatus(status)).local.result);  // storing in coursesandrole of all courses  having null
    }
    openDialog(selecteddInfo,role) {  // going for opening dialog popup
        if(role=='instructor'){     // send data=instructor for selectedinstructordetaildemoComponent for doing approved functionality
            const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={selecteddInfo}; //assigning data of particular data
      const dialogRef = this.dialog.open(selectedinstructordetaildemoComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=>  this.getRoleAndStatus());
        }
        else if(role == 'trainee'){  // send data=instructor for selectedtraineedemodetailsComponent for doing approved functionality
            const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={selecteddInfo}; //assigning data of particular data
      const dialogRef = this.dialog.open(selectedtraineedemodetailsComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=>  this.getRoleAndStatus());
        }
        else if(role == 'course'){  // send data=instructor for selectedcoursedetaildemoComponent for doing approved functionality
            const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={selecteddInfo}; //assigning data of particular data
      console.log(selecteddInfo);
      const dialogRef = this.dialog.open(selectedcoursedetaildemoComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=>  this.getCourseByStatus('null'));
        }
    }

    async getRoleAndStatus(){
     this.instructorandrole = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('null','instructor')).local.result); // getting all instructors having status null
     this.traineeandrole = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('null','trainee')).local.result); // getting all trainees having status null
   }
   
   convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);   // coverting result data in array so that we can use it for frontend
   }
    //updating the status of instructor and trainned
   updateStatus(id,status){
        this.registerServiceObj.updateByStatus({"_id":id,"status":status});  
         this.getRoleAndStatus();
   }
   
}
