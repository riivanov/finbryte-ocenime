export interface Suggestion {
  unique_id: string;
  description: string;
  address: string;
  contact_phone: string;
  agency: string;
  agency_link: string;
  broker: string;
  number_of_rooms: string;
  sq_meters: number;
  btype: string;
  heating: string;
  lat: number;
  lng: number;
  price: number;
  images_path: string;
  search_id: string;
  score_similarity: number;
}
export interface MockAPIResponse {
  suggestions: Array<Suggestion>;
}
