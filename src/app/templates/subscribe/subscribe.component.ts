import { Component, OnInit } from '@angular/core';
import { Subscription } from './Subscription.schema';
import { EnterpriseSub } from './EnterpriseSub.schema';
import FirebaseSubscriptionService from 'src/app/FirebaseServices/firebase-subscription-service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscriptions: Subscription[] = [];
  enterpriseSub: EnterpriseSub = {
    advantages: "",
    icon: "",
    title: ""
  }
  constructor(private firebaseSubscriptionService: FirebaseSubscriptionService){
       
  }

  async ngOnInit(): Promise<void>{
    this.subscriptions = await this.firebaseSubscriptionService.loadSubscriptions();
    this.enterpriseSub = await this.firebaseSubscriptionService.loadEnterpriseSub();
  }
}
