import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Issue } from 'src/app/issue';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  //Just for practise sharing data between distances components.

  private issueData = new BehaviorSubject<Issue>({});

  constructor() { }

  setIssue(issue: Issue): void {
    this.issueData.next(issue);
  }

  getIssue(): Observable<Issue> {
    return this.issueData.asObservable();
  }
}
