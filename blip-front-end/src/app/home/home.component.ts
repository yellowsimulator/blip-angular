import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imagePreview!: string | ArrayBuffer;
  selectedFile!: File ;
  backendResult!: string;
  showSpinner: boolean = false;
  isLoading: boolean = false; // Add this line

  constructor(private http: HttpClient) { }

  onFileSelected(event: Event) {
    this.backendResult = '';
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length) {
      this.selectedFile = target.files[0];
      // Create a FileReader instance
      const reader = new FileReader();
  
      // Add an event listener to the FileReader instance
      reader.onload = (event: any) => {
        // event.target.result contains the DataURL of the image
        this.imagePreview = event.target.result;
      };
  
      // Read the image file as DataURL
      reader.readAsDataURL(this.selectedFile);
    }
  }
  

  uploadImage() {
    let formData = new FormData();
    formData.append('file', this.selectedFile);

    this.showSpinner = true;

    this.http.post('http://127.0.0.1:5000/upload', formData).subscribe(
      (response: any) => {
        this.showSpinner = false;
        this.backendResult = response.description;
        //console.log('Response:', this.backendResult);
        this.isLoading = false; // Hide the spinner
      },
      error => {
        this.showSpinner = false;
        console.error('Error:', error);
      }
    );
  }



//////////////////////////////
}
