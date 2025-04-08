import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ppl',
  templateUrl: './ppl.page.html',
  styleUrls: ['./ppl.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PPLPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
