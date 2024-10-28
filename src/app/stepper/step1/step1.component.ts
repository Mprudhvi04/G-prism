import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  standalone: true,
  imports: [FileUploadModule, ToastModule, HttpClientModule, FormsModule, NgIf],
  providers: [MessageService]
})
export class Step1Component {
  @Output() next = new EventEmitter<void>();
  @Output() updateIsNFA = new EventEmitter<boolean>();
  allocatedIRN: string = '';

  constructor(private messageService: MessageService) { }

  onUpload(event: any) {
    this.messageService.add({ 
      severity: 'info', 
      summary: 'Success', 
      detail: 'File Uploaded Successfully' 
    });
  }
   // Method to emit the updateIsNFA event
   updateNFA(isNFA: boolean) {
    this.updateIsNFA.emit(isNFA);
  }
  
}