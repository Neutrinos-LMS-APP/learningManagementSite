import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-contactusComponent
import { contactusComponent } from '../components/contactusComponent/contactus.component';
//CORE_REFERENCE_IMPORT-loginformComponent
import { loginformComponent } from '../components/loginformComponent/loginform.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-learningmanagementsystemComponent
import { learningmanagementsystemComponent } from '../components/learningmanagementsystemComponent/learningmanagementsystem.component';
//CORE_REFERENCE_IMPORT-instructordashboardComponent
import { instructordashboardComponent } from '../components/instructordashboardComponent/instructordashboard.component';
//CORE_REFERENCE_IMPORT-dashboardcontentComponent
import { dashboardcontentComponent } from '../components/dashboardcontentComponent/dashboardcontent.component';
//CORE_REFERENCE_IMPORT-coursesComponent
import { coursesComponent } from '../components/coursesComponent/courses.component';
//CORE_REFERENCE_IMPORT-traineeComponent
import { traineeComponent } from '../components/traineeComponent/trainee.component';
//CORE_REFERENCE_IMPORT-instructorsComponent
import { instructorsComponent } from '../components/instructorsComponent/instructors.component';
//CORE_REFERENCE_IMPORT-admindashboardComponent
import { admindashboardComponent } from '../components/admindashboardComponent/admindashboard.component';
//CORE_REFERENCE_IMPORT-traineeregistrationComponent
import { traineeregistrationComponent } from '../components/traineeregistrationComponent/traineeregistration.component';
//CORE_REFERENCE_IMPORT-instructorregistrationComponent
import { instructorregistrationComponent } from '../components/instructorregistrationComponent/instructorregistration.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-contactusComponent
contactusComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginformComponent
loginformComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-learningmanagementsystemComponent
learningmanagementsystemComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-instructordashboardComponent
instructordashboardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardcontentComponent
dashboardcontentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-coursesComponent
coursesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-traineeComponent
traineeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-instructorsComponent
instructorsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-admindashboardComponent
admindashboardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-traineeregistrationComponent
traineeregistrationComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-instructorregistrationComponent
instructorregistrationComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
<<<<<<< Updated upstream
export const appRoutes = [{path: 'instructorregistration', component: instructorregistrationComponent},{path: 'traineeregistration', component: traineeregistrationComponent},{path: '', redirectTo: '/instructorregistration', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
=======
export const appRoutes = [{path: 'adminDashboard', component: admindashboardComponent,
children: [{path: 'instructors', component: instructorsComponent},{path: 'trainee', component: traineeComponent},{path: 'courses', component: coursesComponent},{path: '"', component: dashboardcontentComponent}]},{path: '', redirectTo: 'adminDashboard', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
>>>>>>> Stashed changes
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
