import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { LoggerService } from "./logger.service";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { MaterialModule } from "./material-module";

const CommonModules = [MaterialModule];

@NgModule({
  imports: [
    CommonModule,
    ...CommonModules,
    FormsModule,
    HttpModule
  ],
  declarations: [],
  exports: [...CommonModules],
  providers: [LoggerService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}