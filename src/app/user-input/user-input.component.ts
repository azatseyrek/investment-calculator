import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IInvestmentInput } from '../models/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<IInvestmentInput>();

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    const initialInvestment = +this.enteredInitialInvestment();
    const annualInvestment = +this.enteredAnnualInvestment();
    const expectedReturn = +this.enteredExpectedReturn();
    const duration = +this.enteredDuration();

    this.calculate.emit({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
