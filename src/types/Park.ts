export type AlertsResponse = {
  total: string;
  limit: string;
  start: string;
  data: Alerts[];
};

export type Alerts = {
  id: string;
  url: string;
  title: string;
  parkCode: string;
  description: string;
  category: AlertType;
  lastIndexedDate: string;
};

export enum AlertType {
  DANGER = "Danger",
  CAUTION = "Caution",
  INFORMATION = "Information",
  PARK_CLOSURE = "Park Closure",
}

export type ParkResponse = {
  total: string;
  limit: string;
  start: string;
  data: ParkModel[];
};

export type ParkModel = {
  description: string;
  fullName: string;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  parkCode: string;
  states: string;
  url: string;
  weatherInfo: string;
  directionsInfo: string;
  directionsUrl: string;
  images: Image[];
  addresses: Address[];
  contacts: Contact;
  activities: Activity[];
  topics: Topic[];
  entranceFees: EntranceFees[];
};

export type Image = {
  credit: string;
  title: string;
  caption: string;
  url: string;
};

export type Address = {
  postalCode: string;
  city: string;
  stateCode: string;
  countryCode: string;
};

export type Contact = {
  phoneNumbers: PhoneNumber[];
  emailAddresses: EmailAddress[];
};

export type PhoneNumber = {
  phoneNumber: string;
  description: string;
  extension: string;
  type: string;
};

export type EmailAddress = {
  emailAddress: string;
  description: string;
};

export type Activity = {
  id: string;
  name: string;
};

export type Topic = {
  id: string;
  name: string;
};

export type EntranceFees = {
  cost: string;
  description: string;
  title: string;
};
