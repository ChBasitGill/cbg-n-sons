import { effect, Injectable, signal } from '@angular/core';

export type ThemeModes = 'dark' | 'light'

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  darkMode = signal<ThemeModes>((window.localStorage.getItem('darkMode') ?? 'light') === 'light' ? 'light' : 'dark');
  toggleDarkMode() {
    this.darkMode.update((val: ThemeModes): ThemeModes => val === "light" ? "dark" : "light")
  }
  constructor() {
    effect(() =>
      window.localStorage.setItem('darkMode', this.darkMode())
    )
  }
}
