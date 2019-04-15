import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {
  items: Observable<any[]>;

  constructor(db: AngularFirestore) { 
    this.items = db.collection('test').valueChanges();

  }

  ngOnInit() {
  }

}
