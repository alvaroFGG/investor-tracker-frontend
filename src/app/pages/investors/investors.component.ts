import { Component } from '@angular/core';
import { InvestmentEntity } from '../../types/investmentEntity';
import { InvestorsService } from '../../services/investors.service';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrl: './investors.component.scss',
  standalone: true,
})
export class InvestorsComponent {
  public investors: InvestmentEntity[] = [];
  public page = 1;

  constructor(private investmentEntitiesService: InvestorsService) {}

  ngOnInit(): void {
    this.investmentEntitiesService.getPaginatedInvestors(this.page).subscribe({
      next: (investors: InvestmentEntity[]) => {
        this.investors = investors;
        console.log('Investors:', investors);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}
