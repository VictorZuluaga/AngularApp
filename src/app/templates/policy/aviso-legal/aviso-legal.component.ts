import { Component, OnInit } from '@angular/core';
import FirebasePolicyService from 'src/app/FirebaseServices/firebase-policy-service';
import { LawData } from '../LawData.schema';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['../policy.css']
})
export class AvisoLegalComponent implements OnInit{

  leyes: LawData[] = [];
  copyright: string = "";
  
  constructor(private firebasePolicyService: FirebasePolicyService){
       
  }

  async ngOnInit(): Promise<void> {
      this.leyes = await this.firebasePolicyService.loadAvisoLegal();
      this.copyright = await this.firebasePolicyService.loadCopyright();
  }
}
