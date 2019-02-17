import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  names: Observable<any[]>;
  userdata: Observable<any[]>;
  issueblurbs: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('test').valueChanges();
    this.names = db.collection('IssueNames').valueChanges();
    this.userdata = db.collection('Users').valueChanges();
    this.issueblurbs = db.collection('IssueBlurbs').valueChanges();
  }
}