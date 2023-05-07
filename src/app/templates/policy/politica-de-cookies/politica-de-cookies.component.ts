import { Component, OnInit } from '@angular/core';
import FirebasePolicyService from 'src/app/FirebaseServices/firebase-policy-service';
import { LawData } from '../LawData.schema';

@Component({
  selector: 'app-politica-de-cookies',
  templateUrl: './politica-de-cookies.component.html',
  styleUrls: ['../policy.css']
})
export class PoliticaDeCookiesComponent implements OnInit {
  leyes: LawData[] = [];
  constructor(private firebasePolicyService: FirebasePolicyService){
       
  }
  async ngOnInit(): Promise<void>{
    this.leyes = await this.firebasePolicyService.loadPoliticaDeCookies();
  }
}
