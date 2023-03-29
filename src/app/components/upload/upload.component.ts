import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReplaySubject } from 'rxjs';
import { UploadService } from 'src/app/services/upload.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
 
  selectedFile: File;
  selectedmail:any;
  selectedproject:any;
  selecteddesc:any;
  files:any;
  decodedFileUrl: SafeResourceUrl;
  base64EncodedFileContent:any
  constructor(private http: HttpClient ,private _snackBar: MatSnackBar,private uploadservice:UploadService,private sanitizer : DomSanitizer  ) {
    uploadservice.getfiles().subscribe((data:any)=>{
      console.log(data);
      // this.base64EncodedFileContent= data.file
     
    });
  }

  // decodeFile() {
  //   const decodedContent = atob(this.base64EncodedFileContent);
  //   const decodedBytes = new Uint8Array(decodedContent.length);
  //   for (let i = 0; i < decodedContent.length; i++) {
  //     decodedBytes[i] = decodedContent.charCodeAt(i);
  //   }
  //   const decodedBlob = new Blob([decodedBytes], { type: 'application/pdf' });
  //   this.decodedFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(decodedBlob));
  //   console.log(this.decodedFileUrl);
  // }
  

  


  // b64toBlob(){

  //  const b64toBlob = (b64Data, contentType='application/pdf', sliceSize=512) => {
  //   const byteCharacters = atob(b64Data);
  //   const byteArrays = [];
  
  //   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //     const slice = byteCharacters.slice(offset, offset + sliceSize);
  
  //     const byteNumbers = new Array(slice.length);
  //     for (let i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }
  
  //     const byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }
  
  //   const blob = new Blob(byteArrays, {type: contentType});
  //   return blob;
  // }


  onFileSelected(event: any) {
    this.selectedFile = event?.target?.files?.[0]; 
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('emailId',this.selectedmail);
    formData.append('projName',this.selectedproject);
    formData.append('description', this.selecteddesc);
    this._snackBar.open('uploaded successfully','',{
      duration:1000,
      verticalPosition:'bottom',
      horizontalPosition:'center'
    });
    
  
  
   return this.http.post('http://localhost:8093/file/server/api/store', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );  
  
  }
   
 
  


}


