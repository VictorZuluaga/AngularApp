import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/dbServices/FirebaseServices/firestore.service';
import { ContactData } from '../ContactData.schema';
import FirebasePolicyService from 'src/app/FirebaseServices/firebase-policy-service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['../policy.css']
})
export class ContactoComponent implements OnInit{  

  address: ContactData = {
    data: [],
    icon: "",
    title: ""
  };
  email: ContactData = {
    data: [],
    icon: "",
    title: ""
  };
  telephone: ContactData = {
    data: [],
    icon: "",
    title: ""
  };

  constructor(private firebasePolicyService: FirebasePolicyService){
       
  }

  async ngOnInit(): Promise<void>{
    this.address = await this.firebasePolicyService.loadAddressData();
    console.log(this.address);
    this.email = await this.firebasePolicyService.loadEmailData();
    console.log(this.email);
    this.telephone = await this.firebasePolicyService.loadTelephoneData();
    console.log(this.telephone);
  }
}
