import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser'; // Import bootstrapApplication
import { AppComponent } from './app/app.component'; // Import the standalone component
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Use bootstrapApplication for standalone components
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));