import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Product } from './product.model'; // Ensure you have this model defined

@Component({
  selector: 'app-root',
  standalone: true, // Mark it as a standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule] // Add FormsModule and CommonModule here
})
export class AppComponent {
  products: Product[] = [];
  name: string = '';
  price: number | null = null;
  category: string = '';
  editMode = false;
  currentProductId: number | null = null;

  onSubmit() {
    if (this.editMode) {
      const index = this.products.findIndex(p => p.id === this.currentProductId);
      this.products[index] = { id: this.currentProductId!, name: this.name, price: this.price!, category: this.category };
    } else {
      const newProduct: Product = {
        id: this.products.length + 1,
        name: this.name,
        price: this.price!,
        category: this.category
      };
      this.products.push(newProduct);
    }
    this.resetForm();
  }

  onEdit(product: Product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.editMode = true;
    this.currentProductId = product.id;
  }

  onDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  resetForm() {
    this.name = '';
    this.price = null;
    this.category = '';
    this.editMode = false;
    this.currentProductId = null;
  }
}