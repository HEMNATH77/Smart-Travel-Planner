import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ItineraryService } from '../../../services/itinerary.service';
import { Itinerary } from '../../../models/itinerary.model';

@Component({
  selector: 'app-itinerary-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './itinerary-list.component.html',
  styleUrls: ['./itinerary-list.component.css']
})
export class ItineraryListComponent implements OnInit {

  itineraries: Itinerary[] = [];

  constructor(
    private itineraryService: ItineraryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadItineraries();
  }

  // 📄 Load all itineraries
  loadItineraries(): void {
    this.itineraries = this.itineraryService.getItineraries();
  }

  // 👁 View itinerary details
  viewItinerary(id: number): void {
    this.router.navigate(['/itineraries', id]);
  }

  // ✏️ Edit itinerary
  editItinerary(id: number): void {
    this.router.navigate(['/itineraries/edit', id]);
  }

  // 🗑️ Delete itinerary
  deleteItinerary(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this itinerary?');
    if (confirmDelete) {
      this.itineraryService.deleteItinerary(id);
      this.loadItineraries();
    }
  }
}
