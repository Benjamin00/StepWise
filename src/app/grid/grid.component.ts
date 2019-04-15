import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  items: Observable<any[]>;
  names: Observable<any[]>;
  issueblurbs: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('test').valueChanges();
    this.names = db.collection('IssueNames').valueChanges();
    this.issueblurbs = db.collection('IssueBlurbs').valueChanges();
  }

  ngOnInit() {
  }

}