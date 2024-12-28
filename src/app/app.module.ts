import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms

@NgModule({
  imports: [
    BrowserModule, // Import BrowserModule
    FormsModule // Import FormsModule for template-driven forms
  ],
  providers: [],
  bootstrap: [] // No bootstrap component here since we are using standalone
})
export class AppModule {}