import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ItineraryService } from '../../../services/itinerary.service';
import { Itinerary } from '../../../models/itinerary.model';

@Component({
  selector: 'app-itinerary-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './itinerary-create.component.html',
  styleUrls: ['./itinerary-create.component.css']
})
export class ItineraryCreateComponent {

  itinerary: Itinerary = {
  id: 0,
  destination: '',
  startDate: '',
  endDate: '',
  budget: 0,
  preferences: '',
  status: 'pending'   // ✅ ADD THIS
};


  errorMsg: string = '';

  constructor(
    private itineraryService: ItineraryService,
    private router: Router
  ) {}

  createItinerary(): void {
    // 🔴 Validation
    if (!this.itinerary.destination) {
      this.errorMsg = 'Please enter destination';
      alert(this.errorMsg);
      return;
    }

    if (!this.itinerary.startDate) {
      this.errorMsg = 'Please select start date';
      alert(this.errorMsg);
      return;
    }

    if (!this.itinerary.endDate) {
      this.errorMsg = 'Please select end date';
      alert(this.errorMsg);
      return;
    }

    if (!this.itinerary.budget || this.itinerary.budget <= 0) {
      this.errorMsg = 'Please enter a valid budget';
      alert(this.errorMsg);
      return;
    }

    // ✅ Clear error
    this.errorMsg = '';

    // ✅ Save itinerary
    this.itineraryService.addItinerary(this.itinerary);
    this.router.navigate(['/itineraries']);
  }

  cancel(): void {
    this.router.navigate(['/itineraries']);
  }
}
