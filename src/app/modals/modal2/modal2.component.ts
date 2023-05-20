import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Modal2Component {

  constructor(private modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }
}
