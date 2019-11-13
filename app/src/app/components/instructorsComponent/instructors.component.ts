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
  approvedStatusResult;
    @ViewChild(dashboardcontentComponent, { static: true }) dashboardpage : dashboardcontentComponent ;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    dataSource=new MatTableDataSource(this.approvedStatusResult);
    // Data table configuration (Sample Data)
    //storing the selcted row information
    rowData;
    
    pageSize;
    constructor(private bdms: NDataModelService,private registerServiceObj:registerinstructorservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.getByStatus('approved');
    }
    async getByStatus(status){
      this.approvedStatusResult = this.convertObjtoArr((await this.registerServiceObj.getbystatus(status)).local.result);
      console.log(this.approvedStatusResult);
    }
     convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
   }
   fname;lname;email;contact;gender;country;dob;pass;
    viewInstructorInfo(selectedRowInfo)
    {
        this.displaytable=false;
        this.displayView=true;
       // this.rowData=this.convertObjtoArr(selectedRowInfo);
    //    this.rowData =  selectedRowInfo;
    // console.log(this.rowData.firstName);
       this.fname=selectedRowInfo.firstName;
       this.lname=selectedRowInfo.lastName;
       this.email=selectedRowInfo.email;
       this.contact=selectedRowInfo.mobile;
       this.gender=selectedRowInfo.gender;
       this.country=selectedRowInfo.country;
       this.dob=selectedRowInfo.date;
       this.pass=selectedRowInfo.password;
        
        //console.log("button Clicked"+this.tabledata.name);
        //this.username=this.tabledata.name;
    }
    displayTable(){
        this.displaytable=true;
        this.displayView=false;
    }
    applyFilter(value)
    {
      //  console.log(value);
      //this.dataSource.filter = value.trim().toLowerCase();
    }

    // selectPage(pageSizeOptions){
    //     console.log(pageSizeOptions);
    //     this.paginator=pageSizeOptions.pageSize;



    // }
    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    // delete(dataModelName, filter) {
    //     this.mm.delete(dataModelName, filter,
    //         result => {
    //             // On Success code here
    //         }, error => {
    //             // Handle errors here
    //         })
    // }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
