import { Component, input } from '@angular/core';
import { IResult } from '../models/result.model';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgForOf, NgIf, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input<IResult[]>();
}
