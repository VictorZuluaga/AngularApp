import { doc, getDoc } from 'firebase/firestore'
import { Injectable } from "@angular/core";
import { FirestoreService } from '../services/dbServices/FirebaseServices/firestore.service';
import { ContactData } from '../templates/policy/ContactData.schema';
import { LawData } from '../templates/policy/LawData.schema';
import { Subscription } from '../templates/subscribe/Subscription.schema';
import { EnterpriseSub } from '../templates/subscribe/EnterpriseSub.schema';

@Injectable({
    providedIn: 'root'
})

export default class FirebaseSubscriptionService {

    constructor(private fss: FirestoreService) { }

    async loadSubscriptions(): Promise<Subscription[]>{
        // Accedo a la base de datos
        const subscriptionSnapshot = await getDoc(doc(this.fss.db, "Subscription", "Subscriptions"));
        const subscriptions = subscriptionSnapshot.get("normalSubs");         

        // compruebo su existencia
        if(subscriptionSnapshot.exists()){
            console.log("El documento de Subscriptions existe");
        } else{
            console.log("El documento de Subscriptions no existe");
        }
        return subscriptions;
    }

    async loadEnterpriseSub(): Promise<EnterpriseSub>{
        // Accedo a la base de datos
        const subscriptionSnapshot = await getDoc(doc(this.fss.db, "Subscription", "Subscriptions"));
        const enterpriseSub: EnterpriseSub = subscriptionSnapshot.get("enterpriseSub");         

        // compruebo su existencia
        if(subscriptionSnapshot.exists()){
            console.log("El documento de Subscriptions existe");
        } else{
            console.log("El documento de Subscriptions no existe");
        }
        return enterpriseSub;
    }

}