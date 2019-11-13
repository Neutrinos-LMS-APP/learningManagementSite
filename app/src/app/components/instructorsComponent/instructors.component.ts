/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
//import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import {dashboardcontentComponent} from '../dashboardcontentComponent/dashboardcontent.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';

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
    selector: 'bh-instructors',
    templateUrl: './instructors.template.html'
})

export class instructorsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    
    displayView:boolean=false;
    displaytable:boolean=true;
    username;
    tabledata;
    approvedInstructors;
    
    @ViewChild(dashboardcontentComponent, { static: true }) dashboardpage : dashboardcontentComponent ;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    dataSource;
    //storing the selcted row information
    rowData;
    pageSize;
    constructor(private bdms: NDataModelService,private registerServiceObj:registerinstructorservice) {
        super();
        this.mm = new ModelMethods(bdms);
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
         this.dataSource = new MatTableDataSource();
        this.getRoleAndStatus();     
    }
    ngAfterViewInit() {
        
       this.dataSource.paginator = this.paginator;
         
    }
    //getting the instroctrs based on status,we need to pass status value
    // async getByStatus(status){
    //     this.approvedStatusResult = this.convertObjtoArr((await this.registerServiceObj.getbystatus(status)).local.result);
    //     this.dataSource.data = this.approvedStatusResult;
    // }

    //getting data by status need to pass the status value
    async getRoleAndStatus(){
        this.approvedInstructors = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('approved','instructor')).local.result);
        this.dataSource.data = this.approvedInstructors;
    }

    //converting object of objects into araay of objects
    convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
    }
   fname;lname;email;contact;gender;country;dob;pass;
   //it displays the selcted row information
    viewInstructorInfo(selectedRowInfo)
    {
        this.displaytable=false;
        this.displayView=true;
        // this.rowData=this.convertObjtoArr(selectedRowInfo);
        //this.rowData =  selectedRowInfo;
        //console.log(this.rowData.firstName);
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
        this.dataSource.filterPredicate = (value, filter) => JSON.stringify(value).includes(filter);
        this.dataSource.filter = value.trim().toLowerCase();
    }

    // selectPage(pageSizeOptions){
    //     console.log(pageSizeOptions);
    //     this.paginator=pageSizeOptions.pageSize;
    // }
    delete(id){
        this.registerServiceObj.deleteInstructor(id);
        this.getRoleAndStatus();
    }
}
