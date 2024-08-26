import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    const initialInvestment = parseFloat(this.enteredInitialInvestment);
    const annualInvestment = parseFloat(this.enteredAnnualInvestment);
    const expectedReturn = parseFloat(this.enteredExpectedReturn);
    const duration = parseFloat(this.enteredDuration);

    this.calculate.emit({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
  }
}
