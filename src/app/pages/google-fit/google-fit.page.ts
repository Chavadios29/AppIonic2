import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Health } from '@awesome-cordova-plugins/health/ngx';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-google-fit',
  templateUrl: './google-fit.page.html',
  styleUrls: ['./google-fit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [Health]
})
export class GoogleFitPage implements OnInit {

  pasos: number = 0;
  calorias: number = 0;
  distancia: number = 0; // en metros

  constructor(private health: Health) { }

  ngOnInit() {}

  getData() {
    this.health.isAvailable().then((available: boolean) => {
      if (available) {
        this.health.requestAuthorization([
          { read: ['steps', 'distance', 'calories'], write: [] }
        ]).then(() => {
          const today = new Date();
          const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const endDate = today;

          Promise.all([
            this.health.query({ startDate, endDate, dataType: 'steps' }),
            this.health.query({ startDate, endDate, dataType: 'calories' }),
            this.health.query({ startDate, endDate, dataType: 'distance' })
          ]).then(([steps, calories, distance]) => {
            this.pasos = steps.reduce((total, item) => total + (Number(item.value) || 0), 0);
            this.calorias = calories.reduce((total, item) => total + (Number(item.value) || 0), 0);
            this.distancia = distance.reduce((total, item) => total + (Number(item.value) || 0), 0);
          }).catch(e => console.log('Error al consultar datos', e));
        }).catch(e => console.log('Error permisos', e));
      }
    }).catch(e => console.log('Health no disponible', e));
  }

  async buscarGimnasios() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const mapsUrl = `https://www.google.com/maps/search/gimnasios/@${lat},${lng},15z`;
      window.open(mapsUrl, '_blank');
    } catch (error) {
      console.log('Error al obtener ubicación', error);
    }
  }
}
