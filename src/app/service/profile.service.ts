import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Profile } from '../model/profile';
import { single } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http: HttpClient = inject(HttpClient);
  info = signal<Profile>({
    full_name: "Basit Jamil",
    first_name: "Basit",
    last_name: "Jamil",
    github: "https://github.com/ChBasitGill/ChBasitGill",
    phone :"+60 11 1281 4295",
    email : "chbasitgill@outlook.com",
    name : "Basit",
    title : "Software Engineer",
    profession : "Software Engineer"
  })


}