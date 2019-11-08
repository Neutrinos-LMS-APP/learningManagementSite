import { instructordetails } from '../src/app/models/instructordetails.model';
import { traineedetails } from '../src/app/models/traineedetails.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
instructordetails: instructordetails;
traineedetails: traineedetails;
//DECLARE NEW VARIABLE

constructor() {
this.instructordetails = new instructordetails();
this.traineedetails = new traineedetails();
//CREATE NEW DM INSTANCE
    }
}