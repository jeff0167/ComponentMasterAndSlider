import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Modal1Component {

  constructor(private modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }

}
