export interface Station {
  id: string;
  name: string;
  address: string;
  distance: number;
  price: number;
  rating: number;
  types: string;
  image: string;    
}

export type StationData = {
  stations: Station[];

}