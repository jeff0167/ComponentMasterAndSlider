import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Geolocation, Position } from '@capacitor/geolocation';
import { RouterModule } from '@angular/router';

declare var require: any
const mapboxgl = require('mapbox-gl');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamVmZnJpeW8iLCJhIjoiY2xoenluc3gxMWk3dDNkbnRnbGV6cjFhMSJ9.Hp9287N1c9f4JPrfEHoixg';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class GpsPage implements OnInit {

  location!: Position;

  constructor() { 
    //this.printCurrentPosition();
    this.followPos();
  }
  
  ngOnInit() {
  }

  showMap(){
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [this.location.coords.longitude, this.location.coords.latitude], // starting position [lng, lat]
      //center: [-74.5, 40], // starting position [lng, lat]
      zoom: 16, // starting zoom
      });
  }

  followPos(){
    setTimeout(async() => {
      const coordinates = await Geolocation.getCurrentPosition();
      this.location = coordinates;
      this.showMap();
      console.log("Updating cord");
    }, 9000);
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.location = coordinates;
    //console.log('Current position:', coordinates);
    console.log('Current position:', this.location);
    this.showMap();
  };

}
