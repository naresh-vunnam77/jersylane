import { Component } from '@angular/core';
import { Jersey } from 'src/jersey.model';
import { product } from 'src/jersey.data';

@Component({
  selector: 'app-jersey',
  templateUrl: './jersey.component.html',
  styleUrls: ['./jersey.component.css']
})
export class JerseyComponent {
  jersey :Jersey = product
}
