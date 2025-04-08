import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-full-body',
  templateUrl: './full-body.page.html',
  styleUrls: ['./full-body.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FullBodyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
