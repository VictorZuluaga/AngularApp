import { doc, getDoc } from 'firebase/firestore'
import { Injectable } from "@angular/core";
import { FirestoreService } from '../services/dbServices/FirebaseServices/firestore.service';
import { ContactData } from '../templates/policy/ContactData.schema';
import { LawData } from '../templates/policy/LawData.schema';

@Injectable({
    providedIn: 'root'
})

export default class FirebasePolicyService {

    constructor(private fss: FirestoreService) { }

    async loadTelephoneData(): Promise<ContactData>{
        // Accedo a la base de datos
        const contactSnapshot = await getDoc(doc(this.fss.db, "Policy", "Contacto"));
        const telephoneData: ContactData = {
            data: contactSnapshot.get('telephoneData'),
            icon: contactSnapshot.get('telephoneIcon'),
            title: contactSnapshot.get('telephoneTitle')
        }        

        // compruebo su existencia
        if(contactSnapshot.exists()){
            console.log("El documento existe");
        } else{
            console.log("El documento no existe");
        }
        return telephoneData;
    }

    async loadAddressData(): Promise<ContactData>{
        // Accedo a la base de datos
        const contactSnapshot = await getDoc(doc(this.fss.db, "Policy", "Contacto"));
        const addressData: ContactData = {
            data: contactSnapshot.get('addressData'),
            icon: contactSnapshot.get('addressIcon'),
            title: contactSnapshot.get('addressTitle')
        }

        // compruebo su existencia
        if(contactSnapshot.exists()){
            console.log("El documento existe");
        } else{
            console.log("El documento no existe");
        }
        return addressData;
    }

    async loadEmailData(): Promise<ContactData>{
        // Accedo a la base de datos
        const contactSnapshot = await getDoc(doc(this.fss.db, "Policy", "Contacto"));
        const emailData: ContactData = {
            data: contactSnapshot.get('emailData'),
            icon: contactSnapshot.get('emailIcon'),
            title: contactSnapshot.get('emailTitle')
        }

        // compruebo su existencia
        if(contactSnapshot.exists()){
            console.log("El documento existe");
        } else{
            console.log("El documento no existe");
        }
        return emailData;
    }

    async loadCopyright(): Promise<string>{
        const avisoLegalSnapshot = await getDoc(doc(this.fss.db, "Policy", "AvisoLegal"));
        if(avisoLegalSnapshot.exists()){
            console.log("El documento de aviso legal existe");
        } else{
            console.log("El documento de aviso legal no existe");
        } 
        const copyright = avisoLegalSnapshot.get('copyright');        
        return copyright;
    }

    async loadAvisoLegal(): Promise<LawData[]>{
        const avisoLegalSnapshot = await getDoc(doc(this.fss.db, "Policy", "AvisoLegal"));
        if(avisoLegalSnapshot.exists()){
            console.log("El documento de aviso legal existe");
        } else{
            console.log("El documento de aviso legal no existe");
        } 
        const arrayLeyes = avisoLegalSnapshot.get('data');        
        return arrayLeyes;
    }    

    async loadPoliticaDeCookies(): Promise<LawData[]> {
        const politicaDeCookiesSnapshot = await getDoc(doc(this.fss.db, "Policy", "PoliticaDeCookies"));
        if(politicaDeCookiesSnapshot.exists()){
            console.log("El documento de Política de Cookies existe");
        } else{
            console.log("El documento de Política de Cookies no existe");
        } 
        const arrayLeyes = politicaDeCookiesSnapshot.get('data');        
        return arrayLeyes;
    }

    async loadPoliticaDePrivacidad(): Promise<LawData[]> {
        const politicaDePrivacidadSnapshot = await getDoc(doc(this.fss.db, "Policy", "PoliticaDePrivacidad"));
        if(politicaDePrivacidadSnapshot.exists()){
            console.log("El documento de Política de Privacidad existe");
        } else{
            console.log("El documento de Política de Privacidad no existe");
        } 
        const arrayLeyes = politicaDePrivacidadSnapshot.get('data');        
        return arrayLeyes;
    }

}