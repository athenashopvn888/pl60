/**
 * PL601 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "PL601",
  "fullName": "The Planet 60 Dispensary Weed Delivery",
  "street": "1098 Peter Robertson Blvd, #10",
  "city": "Brampton",
  "region": "ON",
  "postal": "L6R 1G6",
  "phoneDisplay": "(289) 206-0899",
  "phoneTel": "tel:+12892060899",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJF1t-nAstK4gRTGPK1xrokgQ",
  "placeId": "ChIJF1t-nAstK4gRTGPK1xrokgQ",
  "neighbourhood": "Brampton",
  "intersection": "",
  "transit": "Served by Brampton Transit routes along Torbram Road and Peter Robertson Boulevard.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
