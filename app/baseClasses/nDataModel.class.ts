import { logindetails } from '../src/app/models/logindetails.model';

import { instructordetails } from '../src/app/models/instructordetails.model';
import { traineedetails } from '../src/app/models/traineedetails.model';
import { addcourse } from '../src/app/models/addcourse.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
logindetails: logindetails;
instructordetails: instructordetails;
traineedetails: traineedetails;
addcourse: addcourse;
//DECLARE NEW VARIABLE

constructor() {
this.logindetails = new logindetails();
this.instructordetails = new instructordetails();
this.traineedetails = new traineedetails();
this.addcourse = new addcourse();
//CREATE NEW DM INSTANCE
    }
}
