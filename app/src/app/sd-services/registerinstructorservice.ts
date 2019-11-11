/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SDBaseService } from '../n-services/SDBaseService';
import { environment } from '../../environments/environment';
import {
  NAlertComponent,
  NAlertService,
  NFileIOService,
  NFileUploadComponent
} from 'neutrinos-module';
import {
  NDataModelService,
  NAuthGuardService,
  NHTTPLoaderService,
  NLocalStorageService,
  NLoginService,
  NLogoutService,
  NNotificationService,
  NPubSubService,
  NSessionStorageService,
  NSnackbarService,
  NSystemService,
  NTokenService
} from 'neutrinos-seed-services';
//CORE_REFERENCE_IMPORTS

declare const window: any;
declare const cordova: any;

@Injectable()
export class registerinstructorservice {
  systemService = NSystemService.getInstance();
  appProperties;

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar,
    private sdService: SDBaseService,
    private sessionStorage: NSessionStorageService,
    private tokenService: NTokenService,
    private router: Router,
    private httpLoaderService: NHTTPLoaderService,
    private dataModelService: NDataModelService,
    private loginService: NLoginService,
    private authGuardService: NAuthGuardService,
    private localStorageService: NLocalStorageService,
    private logoutService: NLogoutService,
    private notificationService: NNotificationService,
    private pubsubService: NPubSubService,
    private snackbarService: NSnackbarService,
    private alertService: NAlertService,
    private fileIOService: NFileIOService
  ) {}

  //   service flows_registerinstructorservice

  public async getregisterinstructordata(...others) {
    try {
      let bh = { input: {}, local: { result: undefined, apiUrl: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_1xzg5aFC8PXUuzml(bh);
      //appendnew_next_getregisterinstructordata
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async registerinstructoradd(registerobject = undefined, ...others) {
    try {
      let bh = {
        input: { registerobject: registerobject },
        local: { result: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_TutKcQXWPi3KUjIN(bh);
      //appendnew_next_registerinstructoradd
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async registerinstructordelete(
    instructorrowId = undefined,
    ...others
  ) {
    try {
      let bh = {
        input: { instructorrowId: instructorrowId },
        local: { apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_RiD03wZBG7fr5xs7(bh);
      //appendnew_next_registerinstructordelete
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getbystatus(status = undefined, ...others) {
    try {
      let bh = { input: { status: status }, local: { result: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_GBf7CshUcykFHJNA(bh);
      //appendnew_next_getbystatus
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_registerinstructorservice_Start

  async sd_1xzg5aFC8PXUuzml(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/getregisterdata';

      bh = await this.sd_K8S2v4G9gstxUKHX(bh);
      //appendnew_next_sd_1xzg5aFC8PXUuzml
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_K8S2v4G9gstxUKHX(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_K8S2v4G9gstxUKHX
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_TutKcQXWPi3KUjIN(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/registerdata';

      bh = await this.sd_HsOD479NzRVnxbaN(bh);
      //appendnew_next_sd_TutKcQXWPi3KUjIN
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_HsOD479NzRVnxbaN(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.registerobject
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_HsOD479NzRVnxbaN
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_RiD03wZBG7fr5xs7(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/deleteregisterdata?${bh.input.instructorrowId}`;

      bh = await this.sd_0xTQbgS6fvdXxO06(bh);
      //appendnew_next_sd_RiD03wZBG7fr5xs7
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_0xTQbgS6fvdXxO06(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.instructorrowId
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_0xTQbgS6fvdXxO06
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_GBf7CshUcykFHJNA(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/getbystatus?status=${bh.input.status}`;

      bh = await this.sd_ZqyKL2VOGSEiOYm2(bh);
      //appendnew_next_sd_GBf7CshUcykFHJNA
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_ZqyKL2VOGSEiOYm2(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_ZqyKL2VOGSEiOYm2
      return bh;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_node

  __constructDefault(bh) {
    const system: any = {};

    try {
      system.currentUser = this.sessionStorage.getValue('userObj');
      system.environment = environment;
      system.tokenService = this.tokenService;
      system.deviceService = this.systemService;
      system.router = this.router;
      system.httpLoaderService = this.httpLoaderService;
      system.dataModelService = this.dataModelService;
      system.loginService = this.loginService;
      system.authGuardService = this.authGuardService;
      system.localStorageService = this.localStorageService;
      system.logoutService = this.logoutService;
      system.notificationService = this.notificationService;
      system.pubsubService = this.pubsubService;
      system.snackbarService = this.snackbarService;
      system.alertService = this.alertService;
      system.fileIOService = this.fileIOService;

      Object.defineProperty(bh, 'system', {
        value: system,
        writable: false
      });

      return bh;
    } catch (e) {
      throw e;
    }
  }
}
