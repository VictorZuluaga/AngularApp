import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import firebaseService from "../../FirebaseServices/firebase-articles.service";
import { Articles } from "../../models/Articles/Articles.model";

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: [ './main-home.component.css' ]
})
export class MainHomeComponent {}