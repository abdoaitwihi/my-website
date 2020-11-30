import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { ProjectsComponent } from '../projects/projects.component';
import { SingleProjectComponent } from '../single-project/single-project.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    ProjectsComponent,
    SingleProjectComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CdkScrollableModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    FlexLayoutModule,
    NavMenuComponent,
    CdkScrollableModule,
    ProjectsComponent,
    SingleProjectComponent,
  ],
})
export class SharedModule {}
