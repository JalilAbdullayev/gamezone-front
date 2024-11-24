import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-collection',
  standalone: false,

  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {
  @Input() title: string = '';
  @Input() collection: any[] = [];
}
