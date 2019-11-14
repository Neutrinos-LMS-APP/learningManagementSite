/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatTableDataSource,MatPaginator } from '@angular/material';
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
    selector: 'bh-courses',
    templateUrl: './courses.template.html'
})

export class coursesComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    displayView:boolean=false;
   displaytable:boolean=true;
   username;
   tabledata;
   approvedCourses=[];
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    dataSource=new MatTableDataSource(this.approvedCourses);

    constructor(private bdms: NDataModelService,private courseServiceObj:courseservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
       this.getCourseByStatus('approved');
    }
    fname;lname;email;contact;gender;country;dob;pass;
    viewCourseInfo(selectedRowInfo)
    {
        this.displaytable=false;
        this.displayView=true;
        this.tabledata=selectedRowInfo;
        this.username=this.tabledata.name;
        this.fname=selectedRowInfo.firstName;
        this.lname=selectedRowInfo.lastName;
        this.email=selectedRowInfo.email;
        this.contact=selectedRowInfo.mobile;
        this.gender=selectedRowInfo.gender;
        this.country=selectedRowInfo.country;
        this.dob=selectedRowInfo.date;
        this.pass=selectedRowInfo.password;

    }
    displayTable(){
        this.displaytable=true;
        this.displayView=false;
    }
    applyFilter(value)
    {
      this.dataSource.filter = value.trim().toLowerCase();
    }
    async getCourseByStatus(status){
        
        this.approvedCourses = this.convertObjtoArr((await this.courseServiceObj.getCourseByStatus(status)).local.result);
        console.log(this.approvedCourses);
        this.dataSource.data = this.approvedCourses;
    }
    //converting object of objects into araay of objects
    convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
    }
    delete(id){
        this.courseServiceObj.deletecourse(id);
         this.getCourseByStatus('null');
    }

}
