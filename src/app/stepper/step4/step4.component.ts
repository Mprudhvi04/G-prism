import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';  
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [DialogModule, ButtonModule,ConfirmDialogModule],  
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']  
})
export class Step4Component {
  displayDialog: boolean = false;
  showDialog(event: Event) {
    event.preventDefault();  
    this.displayDialog = true;
  }
  hideDialog() {
    this.displayDialog = false;
  }
}
