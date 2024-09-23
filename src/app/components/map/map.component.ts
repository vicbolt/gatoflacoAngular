import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: any;

  // Coordenadas del restaurante El Gato Flaco
  lat = 40.19901599776987; 
  lng = -3.6881131574949926;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lng],
      zoom: 25
    });

    // Cargar el mapa con tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Icono personalizado para el marcador
    const customIcon = L.icon({
      iconUrl: '../../../assets/icons/location.png',
      iconSize: [100, 100], // Tamaño del icono
      iconAnchor: [50, 100] // Punto donde el icono se ancla en el mapa (centro del pin en la base)
    });

    // Añadir marcador con el icono personalizado
    const marker = L.marker([this.lat, this.lng], { icon: customIcon })
      .bindPopup('<b>El Gato Flaco</b>')
      .addTo(this.map);
  }

  // Función para abrir Google Maps o Apple Maps
  getDirections(): void {
    const destination = `${this.lat},${this.lng}`;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const url = isIOS
      ? `http://maps.apple.com/?daddr=${destination}`
      : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    window.open(url, '_blank');
  }
}
