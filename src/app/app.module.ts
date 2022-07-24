import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueReportComponent } from './issue-report/issue-report.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { IssueEditComponent } from './issue-edit/issue-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    ConfirmDialogComponent,
    IssueEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
