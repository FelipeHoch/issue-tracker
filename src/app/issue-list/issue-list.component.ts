import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  showReportIssue = false;

  editReportIssue = false;

  issueSelectedToEdit: Issue | null = null; 

  selectedIssue: Issue | null = null;

  constructor(
    private issueService: IssuesService
  ) { }

  issues: Issue[] = [];

  ngOnInit(): void {
    this.getIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  onEditReport() {
    this.editReportIssue = false;
    this.issueSelectedToEdit = null;
    this.getIssues();
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
      this.selectedIssue = null;
    }
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

}
