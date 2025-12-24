import { Injectable } from '@angular/core';
import { Itinerary } from '../models/itinerary.model';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  // 🔒 In-memory data (frontend only)
  private itineraries: Itinerary[] = [
    { id: 1, destination: 'Goa', startDate: '2025-01-10', endDate: '2025-01-14', budget: 20000, preferences: 'Beach, Party', status: 'pending' },
    { id: 2, destination: 'Manali', startDate: '2025-02-05', endDate: '2025-02-10', budget: 25000, preferences: 'Snow, Mountains', status: 'pending' },
    { id: 3, destination: 'Kerala', startDate: '2025-03-01', endDate: '2025-03-06', budget: 22000, preferences: 'Backwaters, Nature', status: 'pending' },
    { id: 4, destination: 'Jaipur', startDate: '2025-01-20', endDate: '2025-01-23', budget: 18000, preferences: 'Heritage', status: 'pending' },
    { id: 5, destination: 'Ooty', startDate: '2025-04-10', endDate: '2025-04-14', budget: 21000, preferences: 'Hill Station', status: 'pending' },
    { id: 6, destination: 'Mysore', startDate: '2025-03-15', endDate: '2025-03-18', budget: 15000, preferences: 'Palace, Culture', status: 'pending' },
    { id: 7, destination: 'Kodaikanal', startDate: '2025-05-01', endDate: '2025-05-05', budget: 19000, preferences: 'Nature, Lakes', status: 'pending' },
    { id: 8, destination: 'Agra', startDate: '2025-02-14', endDate: '2025-02-16', budget: 16000, preferences: 'Monuments', status: 'pending' },
    { id: 9, destination: 'Rishikesh', startDate: '2025-03-20', endDate: '2025-03-25', budget: 17000, preferences: 'Yoga, Adventure', status: 'pending' },
    { id: 10, destination: 'Varanasi', startDate: '2025-04-01', endDate: '2025-04-04', budget: 14000, preferences: 'Spiritual', status: 'pending' }
  ];

  // 📄 Get all itineraries
  getItineraries(): Itinerary[] {
    return this.itineraries;
  }

  // 🔍 Get itinerary by ID
  getItineraryById(id: number): Itinerary | undefined {
    return this.itineraries.find(it => it.id === id);
  }

  // ➕ Create itinerary
  addItinerary(itinerary: Itinerary): void {
    itinerary.id = this.generateId();
    itinerary.status = 'pending'; // ✅ DEFAULT
    this.itineraries.push(itinerary);
  }

  // ✏️ Update itinerary
  updateItinerary(updated: Itinerary): void {
    const index = this.itineraries.findIndex(it => it.id === updated.id);
    if (index !== -1) {
      this.itineraries[index] = updated;
    }
  }

  // ✅ UPDATE STATUS (NEW)
  updateStatus(id: number, status: 'approved' | 'rejected'): void {
    const itinerary = this.itineraries.find(it => it.id === id);
    if (itinerary) {
      itinerary.status = status;
    }
  }

  // 🗑️ Delete itinerary
  deleteItinerary(id: number): void {
    this.itineraries = this.itineraries.filter(it => it.id !== id);
  }

  // 🔢 ID generator
  private generateId(): number {
    return this.itineraries.length
      ? Math.max(...this.itineraries.map(it => it.id)) + 1
      : 1;
  }
}
