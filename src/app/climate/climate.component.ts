import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {

  items: Observable<any[]>;
  names: Observable<any[]>;
  userdata: Observable<any[]>;
  issueblurbs: Observable<any[]>;
  cnames: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('test').valueChanges();
    this.names = db.collection('IssueNames').valueChanges();
    this.userdata = db.collection('Users').valueChanges();
    this.issueblurbs = db.collection('IssueBlurbs').valueChanges();
    this.cnames = db.collection('challengecategories').valueChanges();
  }

  ngOnInit() {
  }

}
