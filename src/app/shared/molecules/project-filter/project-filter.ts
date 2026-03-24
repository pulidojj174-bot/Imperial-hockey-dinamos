import { ChangeDetectionStrategy, Component, input, output, signal, computed } from '@angular/core';

export type ProjectFilterType = 'todos' | 'dinamos' | 'billares' | 'juegos';

export interface FilterOption {
  readonly value: ProjectFilterType;
  readonly label: string;
}

@Component({
  selector: 'app-project-filter',
  imports: [],
  templateUrl: './project-filter.html',
  styleUrl: './project-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFilter {
  readonly activeFilter = input<ProjectFilterType>('todos');
  readonly filterChange = output<ProjectFilterType>();

  readonly filters: FilterOption[] = [
    { value: 'todos', label: 'Todos' },
    { value: 'dinamos', label: 'Dínamos' },
    { value: 'billares', label: 'Billares' },
    { value: 'juegos', label: 'Juegos' },
  ];

  onFilter(filter: ProjectFilterType): void {
    this.filterChange.emit(filter);
  }
}
