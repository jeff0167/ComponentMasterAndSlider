import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';

import { PopUpComponent } from '../components/pop-up/pop-up.component';

import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PopUpComponent]
})
export class HomePage {

  MyVal: boolean = false;
  
  constructor(public popoverController: PopoverController) {
    this.printCurrentPosition();
  }

  async presentPopover(e: Event) { // still a bunch of code just to use a object/component
    const popover = await this.popoverController.create({  // we create a popup from the existing pop-upComponent class so to say, you could switch out the component to create
      component: PopUpComponent,
      componentProps: { description: "Are you sure about that?" } // value to send as input param
    });

      await popover.present(); 
      
      popover.onDidDismiss()
      .then((data) => {
        //const user = data['data']; 
        this.MyVal = data?.data;
      });
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
  
    console.log('Current position:', coordinates);
  };

}

