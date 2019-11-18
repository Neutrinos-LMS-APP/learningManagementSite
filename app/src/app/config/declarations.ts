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
//CORE_REFERENCE_IMPORT-header_nobuttonsComponent
import { header_nobuttonsComponent } from '../components/header_nobuttonsComponent/header_nobuttons.component';
//CORE_REFERENCE_IMPORT-selectedcoursedetaildemoComponent
import { selectedcoursedetaildemoComponent } from '../components/selectedcoursedetaildemoComponent/selectedcoursedetaildemo.component';
//CORE_REFERENCE_IMPORT-selectedtraineedemodetailsComponent
import { selectedtraineedemodetailsComponent } from '../components/selectedtraineedemodetailsComponent/selectedtraineedemodetails.component';
//CORE_REFERENCE_IMPORT-selectedinstructordetaildemoComponent
import { selectedinstructordetaildemoComponent } from '../components/selectedinstructordetaildemoComponent/selectedinstructordetaildemo.component';
//CORE_REFERENCE_IMPORT-cardComponent
import { cardComponent } from '../components/cardComponent/card.component';
//CORE_REFERENCE_IMPORT-coursedetailComponent
import { coursedetailComponent } from '../components/coursedetailComponent/coursedetail.component';
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/footerComponent/footer.component';
//CORE_REFERENCE_IMPORT-headerComponent
import { headerComponent } from '../components/headerComponent/header.component';
//CORE_REFERENCE_IMPORT-productsComponent
import { productsComponent } from '../components/productsComponent/products.component';
//CORE_REFERENCE_IMPORT-productComponent
import { productComponent } from '../components/productComponent/product.component';
//CORE_REFERENCE_IMPORT-riserviceService

//CORE_REFERENCE_IMPORT-courselandingComponent


//CORE_REFERENCE_IMPORT-selfjoinedcoursesComponent
import { selfjoinedcoursesComponent } from '../components/selfjoinedcoursesComponent/selfjoinedcourses.component';
//CORE_REFERENCE_IMPORT-traineedashboardcontentComponent
import { traineedashboardcontentComponent } from '../components/traineedashboardcontentComponent/traineedashboardcontent.component';
//CORE_REFERENCE_IMPORT-traineedashboardComponent
import { traineedashboardComponent } from '../components/traineedashboardComponent/traineedashboard.component';
//CORE_REFERENCE_IMPORT-courselistComponent
import { courselistComponent } from '../components/courselistComponent/courselist.component';
//CORE_REFERENCE_IMPORT-instructordashboradcontentComponent
import { instructordashboradcontentComponent } from '../components/instructordashboradcontentComponent/instructordashboradcontent.component';
//CORE_REFERENCE_IMPORT-addcourseComponent
import { addcourseComponent } from '../components/addcourseComponent/addcourse.component';
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
import { courselandingpageComponent } from 'app/components/courselandingpageComponent/courselandingpage.component';

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
  selectedinstructordetaildemoComponent,
  selectedtraineedemodetailsComponent,
  selectedcoursedetaildemoComponent
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
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-header_nobuttonsComponent
header_nobuttonsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selectedcoursedetaildemoComponent
selectedcoursedetaildemoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selectedtraineedemodetailsComponent
selectedtraineedemodetailsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selectedinstructordetaildemoComponent
selectedinstructordetaildemoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cardComponent
cardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-coursedetailComponent
coursedetailComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
footerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-headerComponent
headerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-productsComponent
productsComponent,

//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-courselandingComponent
courselandingpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-productComponent
productComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selfjoinedcoursesComponent
selfjoinedcoursesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-traineedashboardcontentComponent
traineedashboardcontentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-traineedashboardComponent
traineedashboardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-courselistComponent
courselistComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-instructordashboradcontentComponent
instructordashboradcontentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addcourseComponent
addcourseComponent,
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
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-riserviceService


];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'instructorregistration', component: instructorregistrationComponent},{path: 'traineeregistration', component: traineeregistrationComponent},{path: 'adminDashboard', component: admindashboardComponent,
children: [{path: 'instructors', component: instructorsComponent},{path: 'trainee', component: traineeComponent},{path: 'courses', component: coursesComponent},{path: 'dashboardcontent', component: dashboardcontentComponent}]},{path: 'instructordashboard', component: instructordashboardComponent,
children: [{path: 'addcourse', component: addcourseComponent,
children: []},{path: 'instructorDashboardContent', component: instructordashboradcontentComponent},{path: 'courseList', component: courselistComponent}]},{path: 'traineedashboard', component: traineedashboardComponent,
children: [{path: 'traineedashboardcontent', component: traineedashboardcontentComponent},{path: 'selfjoinedcourses', component: selfjoinedcoursesComponent}]},{path: 'login', component: loginformComponent},{path: 'contactus', component: contactusComponent},{path: 'product', component: productComponent},{path: 'home', component: homeComponent},{path: 'header', component: headerComponent},{path: 'footer', component: footerComponent},{path: 'card', component: cardComponent},{path: 'allcourses', component: courselandingpageComponent},{path: 'coursedetail', component: coursedetailComponent},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
