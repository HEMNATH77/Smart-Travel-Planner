import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ItineraryService } from '../../../services/itinerary.service';
import { Itinerary } from '../../../models/itinerary.model';

@Component({
  selector: 'app-itinerary-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './itinerary-edit.component.html',
  styleUrls: ['./itinerary-edit.component.css']
})
export class ItineraryEditComponent implements OnInit {

  itinerary!: Itinerary;
  notFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private itineraryService: ItineraryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.itineraryService.getItineraryById(id);

    if (found) {
      // Clone object to avoid direct mutation
      this.itinerary = { ...found };
    } else {
      this.notFound = true;
    }
  }

  // 💾 Save changes
  updateItinerary(): void {
    if (
      this.itinerary.destination &&
      this.itinerary.startDate &&
      this.itinerary.endDate &&
      this.itinerary.budget > 0
    ) {
      this.itineraryService.updateItinerary(this.itinerary);
      this.router.navigate(['/itineraries']);
    }
  }

  // ❌ Cancel
  cancel(): void {
    this.router.navigate(['/itineraries']);
  }
}
