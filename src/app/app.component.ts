import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MyServicesComponent} from './my-services/my-services.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {SkillsComponent} from './skills/skills.component';
import {NavbarComponent} from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent , NavbarComponent , FooterComponent , MyServicesComponent , AboutMeComponent , SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
