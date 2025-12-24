import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItineraryService } from '../../../services/itinerary.service';
import { Itinerary } from '../../../models/itinerary.model';

@Component({
  selector: 'app-admin-itinerary-approval',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-itinerary-approval.component.html',
  styleUrls: ['./admin-itinerary-approval.component.css']
})
export class AdminItineraryApprovalComponent implements OnInit {

  itineraries: Itinerary[] = [];

  constructor(private itineraryService: ItineraryService) {}

  ngOnInit(): void {
    this.loadItineraries();
  }

  loadItineraries(): void {
    this.itineraries = this.itineraryService.getItineraries();
  }

  // ✅ Approve
  approveItinerary(itinerary: Itinerary): void {
    this.itineraryService.updateStatus(itinerary.id, 'approved');
  }

  // ❌ Reject
  rejectItinerary(itinerary: Itinerary): void {
    if (confirm(`Reject itinerary to ${itinerary.destination}?`)) {
      this.itineraryService.updateStatus(itinerary.id, 'rejected');
    }
  }
}
