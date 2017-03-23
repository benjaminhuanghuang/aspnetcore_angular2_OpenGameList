"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),platform_browser_1=require("@angular/platform-browser"),http_1=require("@angular/http"),forms_1=require("@angular/forms"),app_component_1=require("./app.component"),item_list_component_1=require("./item-list.component"),item_detail_component_1=require("./item-detail.component"),item_service_1=require("./item.service"),AppModule=function(){function AppModule(){}return AppModule}();AppModule=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,http_1.HttpModule,forms_1.FormsModule],declarations:[app_component_1.AppComponent,item_list_component_1.ItemListComponent,item_detail_component_1.ItemDetailComponent],providers:[item_service_1.ItemService],bootstrap:[app_component_1.AppComponent]})],AppModule),exports.AppModule=AppModule;
//# sourceMappingURL=app.module.js.map
