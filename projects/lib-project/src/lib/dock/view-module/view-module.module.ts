import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModuleRoutingModule } from './view-module-routing.module';
import { HeaderComponent, SideNavbarComponent } from 'lib-shared-modules';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ViewModuleRoutingModule,
    HeaderComponent,
    SideNavbarComponent,
  ],
  exports:[LayoutComponent]
})
export class ViewModuleModule { }
