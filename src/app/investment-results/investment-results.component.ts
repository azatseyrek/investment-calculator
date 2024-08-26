import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgForOf, NgIf, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // constructor(private InvestmentService: InvestmentService) {} // or
  private InvestmentService = inject(InvestmentService);

  // get results() {
  //   return this.InvestmentService.resultData;
  // } or we can use computed property. Using computed property is better because it will recompute the value only when the dependencies change.

  results = computed(() => this.InvestmentService.resultData());
}
