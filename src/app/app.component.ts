import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServices } from './services/dbServices/Users/user-services.service';
import { User } from './models/User.schema';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'app';
}
