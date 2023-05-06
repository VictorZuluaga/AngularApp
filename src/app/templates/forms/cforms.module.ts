import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule } from '@angular/forms'
import { SignupComponent } from './signup/signup.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { FormsValidationService } from './services/forms-validation.service';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ LoginComponent, SignupComponent, SubscribeFormComponent, UploadImageComponent, ImageGalleryComponent ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    FormsValidationService
  ]
})
export class CFormsModule { }
