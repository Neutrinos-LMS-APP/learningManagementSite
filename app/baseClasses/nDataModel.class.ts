import { logindetails } from '../src/app/models/logindetails.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
logindetails: logindetails;
//DECLARE NEW VARIABLE

constructor() {
this.logindetails = new logindetails();
//CREATE NEW DM INSTANCE
    }
}