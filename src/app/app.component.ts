import { Component } from '@angular/core';

type TourCategory = 'Natureza' | 'Aventura' | 'Cultura';

interface Tour {
  title: string;
  city: string;
  category: TourCategory;
  duration: string;
  price: number;
  icon: string;
  color: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  searchTerm = '';
  selectedCategory: TourCategory | 'Todos' = 'Todos';

  readonly categories: Array<TourCategory | 'Todos'> = [
    'Todos',
    'Natureza',
    'Aventura',
    'Cultura'
  ];

  readonly tours: Tour[] = [
    {
      title: 'Trilha da Pedra Bonita',
      city: 'Rio de Janeiro, RJ',
      category: 'Natureza',
      duration: '4 horas',
      price: 120,
      icon: '⛰️',
      color: 'bg-emerald-100',
      description: 'Uma caminhada leve com uma vista inesquecível da cidade.'
    },
    {
      title: 'Rafting no Rio de Janeiro',
      city: 'Brotas, SP',
      category: 'Aventura',
      duration: '3 horas',
      price: 210,
      icon: '🛶',
      color: 'bg-sky-100',
      description: 'Desça as corredeiras com segurança e muita adrenalina.'
    },
    {
      title: 'Centro histórico a pé',
      city: 'Paraty, RJ',
      category: 'Cultura',
      duration: '2 horas',
      price: 85,
      icon: '🏛️',
      color: 'bg-amber-100',
      description: 'Conheça histórias e cantinhos especiais de Paraty.'
    }
  ];

  get filteredTours(): Tour[] {
    const search = this.searchTerm.trim().toLocaleLowerCase('pt-BR');

    return this.tours.filter((tour) => {
      const matchesCategory =
        this.selectedCategory === 'Todos' ||
        tour.category === this.selectedCategory;
      const matchesSearch =
        !search ||
        `${tour.title} ${tour.city}`.toLocaleLowerCase('pt-BR').includes(search);

      return matchesCategory && matchesSearch;
    });
  }
}
