import { Component } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  meals = [
    {
      id: '1',
      name: 'Pasta',
      portionSize: 4,
      image: 'https://picsum.photos/641/361',
    },
    {
      id: '2',
      name: 'Rice',
      portionSize: 6,
      image: 'https://picsum.photos/641/361',
    },
    {
      id: '3',
      name: 'Fish',
      portionSize: 2,
      image: 'https://picsum.photos/641/361',
    },
  ];

  add() {
    this.meals.push({
      id: '3',
      name: 'Fish',
      portionSize: 2,
      image: 'https://picsum.photos/641/361',
    });
  }

  remove(id: string) {
    this.meals = this.meals.filter((meal) => meal.id !== id);
  }
}
