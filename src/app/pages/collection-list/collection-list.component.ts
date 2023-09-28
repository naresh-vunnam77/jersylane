import { Component } from '@angular/core';
import { products } from 'src/collection.data';
import { Products } from 'src/collection.model';



@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent {
 collection:Products[] = products
}
