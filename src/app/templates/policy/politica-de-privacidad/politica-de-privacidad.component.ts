import { Component, OnInit } from '@angular/core';
import FirebasePolicyService from 'src/app/FirebaseServices/firebase-policy-service';
import { LawData } from '../LawData.schema';

@Component({
  selector: 'app-politica-de-privacidad',
  templateUrl: './politica-de-privacidad.component.html',
  styleUrls: ['../policy.css']
})
export class PoliticaDePrivacidadComponent implements OnInit {
  leyes: LawData[] = [];
  constructor(private firebasePolicyService: FirebasePolicyService){
       
  }
  async ngOnInit(): Promise<void>{
    this.leyes = await this.firebasePolicyService.loadPoliticaDePrivacidad();
  }
}
