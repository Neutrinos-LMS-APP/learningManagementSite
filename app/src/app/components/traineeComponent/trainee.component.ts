/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit ,ViewChild} from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatTableDataSource,MatPaginator } from '@angular/material';
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
    selector: 'bh-trainee',
    templateUrl: './trainee.template.html'
})

export class traineeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
   displayView:boolean=false;
   displaytable:boolean=true;
   username;
   tabledata;
   approvedTrainees;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    dataSource=new MatTableDataSource(this.approvedTrainees);
    fname;lname;email;contact;gender;country;dob;
    constructor(private bdms: NDataModelService,private registerServiceObj:registerinstructorservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.getRoleAndStatus();
        this.dataSource.paginator = this.paginator;
   }
    viewTraineeInfo(selectedRowInfo)
    {
        this.displaytable=false;
        this.displayView=false;
        this.tabledata=selectedRowInfo;
        this.username=selectedRowInfo.name;
        this.fname=selectedRowInfo.firstName;
        this.lname=selectedRowInfo.lastName;
        this.email=selectedRowInfo.email;
        this.contact=selectedRowInfo.mobile;
        this.gender=selectedRowInfo.gender;
        this.country=selectedRowInfo.country;
        this.dob=selectedRowInfo.date;
    }
     //getting data by status need to pass the status value
    async getRoleAndStatus(){
        this.approvedTrainees = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('approved','trainee')).local.result);
        this.dataSource.data = this.approvedTrainees;
    }

    //converting object of objects into araay of objects
    convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
    }
    displayTable(){
        this.displaytable=true;
        this.displayView=false;
    }
    applyFilter(value)
    {
      
      this.dataSource.filter = value.trim().toLowerCase();
    }
    delete(id){
        this.registerServiceObj.deleteInstructor(id);
        this.getRoleAndStatus();
    }

}
