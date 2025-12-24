export interface Itinerary {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  preferences: string;

  // ✅ NEW FIELD
  status: 'pending' | 'approved' | 'rejected';
}
