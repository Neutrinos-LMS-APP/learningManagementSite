/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatTableDataSource,MatPaginator } from '@angular/material';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

 /**
 * 
 * Serivice Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

export interface userData {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const Element_data: userData[] = [
        {
            position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'
        }
        ,
        {
            position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'
        }
        ,
        {
            position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'
        }
        ,
        {
            position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'
        }
        ,
        {
            position: 5, name: 'Boron', weight: 10.811, symbol: 'B'
        }
        ,
        {
            position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'
        }
        ,
        {
            position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'
        }
        ,
        {
            position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'
        }
        ,
        {
            position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'
        }
        ,
        {
            position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'
        }
        ,
    ];

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
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    dataSource=new MatTableDataSource(Element_data);

    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }

    viewbtnclick(table)
    {
        this.displaytable=false;
        this.displayView=true;
        
        this.tabledata=table;
        console.log("button Clicked"+this.tabledata.name);
        this.username=this.tabledata.name;

    }
    displayTable(){
        this.displaytable=true;
        this.displayView=false;
    }
    applyFilter(value)
    {
      //  console.log(value);
      this.dataSource.filter = value.trim().toLowerCase();
    }
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

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

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
