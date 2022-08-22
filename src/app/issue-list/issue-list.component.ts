import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/services/share-data.service';
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
    private issueService: IssuesService,
    private httpClient: HttpClient,
    private shareDataService: ShareDataService,
  ) { }

  issues: Issue[] = [];

  ngOnInit(): void {
    this.getIssues();

    this.shareDataService.getIssue().subscribe((issue: Issue) => console.log(issue));
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
