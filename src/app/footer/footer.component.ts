import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faGithub, faGoogle , faTelegram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email : string = "menna.abdallah@gmail.com";
  phone : string = "+201153039490";
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faLinked = faLinkedin;
  faGit = faGithub;
  faGoogle = faGoogle;
  faPhone = faTelegram;
}
