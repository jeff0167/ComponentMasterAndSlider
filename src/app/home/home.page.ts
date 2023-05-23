import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, PopoverController } from '@ionic/angular';
import { PopUpComponent } from '../components/pop-up/pop-up.component';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Modal1Component } from '../modals/modal1/modal1.component';
import { Modal2Component } from '../modals/modal2/modal2.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';

register(); // why so had, why can't I just import one thing and use it?

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PopUpComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // what in the world is this, I just want to use swiper
})
export class HomePage {

  MyVal: boolean = false;
  location!: Position;
  constructor(public popoverController: PopoverController, public modalController: ModalController) {
    this.printCurrentPosition();
  }

  async openModal1() {
    const modal = await this.modalController.create({
      component: Modal1Component,
      id: 'modal-1'
    });
    await modal.present();
  }

  async openModal2() {
    const modal = await this.modalController.create({
      component: Modal2Component,
      id: 'modal-2'
    });
    await modal.present();
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

  swiperSlideChange(e: any){}

  followPos(){
    setTimeout(async() => {
      const coordinates = await Geolocation.getCurrentPosition();
      this.location = coordinates;
      console.log("Updating cord");
    }, 1500);
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.location = coordinates;
    //console.log('Current position:', coordinates);
    console.log('Current position:', this.location);
  };

}

