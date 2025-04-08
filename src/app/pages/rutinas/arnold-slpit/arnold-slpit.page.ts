import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-arnold-slpit',
  templateUrl: './arnold-slpit.page.html',
  styleUrls: ['./arnold-slpit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ArnoldSlpitPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
