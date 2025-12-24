import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ItineraryService } from '../../../services/itinerary.service';
import { Itinerary } from '../../../models/itinerary.model';

@Component({
  selector: 'app-itinerary-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit {

  itinerary!: Itinerary;   // ✅ non-null assertion (safe after load)
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
      this.itinerary = found;
    } else {
      this.notFound = true;
    }
  }

  // 🔙 Back to list
  goBack(): void {
    this.router.navigate(['/itineraries']);
  }
}
