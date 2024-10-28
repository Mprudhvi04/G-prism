import { Component, EventEmitter, Output } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FileUploadModule,ToastModule,HttpClientModule],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  providers: [MessageService]
})
export class Step2Component {
  @Output() back = new EventEmitter<void>();  // Emits event to go back to Step 1
  @Output() next = new EventEmitter<void>();  // Emits event to go to Step 3
  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    this.messageService.add({ 
      severity: 'info', 
      summary: 'Success', 
      detail: 'File Uploaded Successfully' 
    });
  }
}
