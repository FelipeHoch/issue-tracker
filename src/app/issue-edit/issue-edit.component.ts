import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { ShareDataService } from 'src/services/share-data.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {
  issueForm: FormGroup | undefined;

  @Output() formClose = new EventEmitter();

  @Input() issue: Issue | null = null;

  constructor(
    private builder: FormBuilder,
    private issueService: IssuesService,
    private shareIssueService: ShareDataService,
  ) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      issueNo: [this.issue?.issueNo],
      title: [this.issue?.title, Validators.required],
      description: [this.issue?.description, Validators.required],
      priority: [this.issue?.priority],
      type: [this.issue?.type]
    })
  }

  editIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();

      return;
    }

    this.shareIssueService.setIssue(this.issueForm!.value);

    this.issueService.editIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
