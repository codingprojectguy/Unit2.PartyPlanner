# Unit2.PartyPlanner

Requirements:
1.a list of the names, dates, times, locations, and descriptions of all the parties that are happening.

2.Next to each party in the list is a delete button.

3.enter information about a new party.

Which components can be created directly in the HTML? Which components need to be created in JavaScript?

Can you render mock data to the page?
Can you render real data to the page?
Are you able to fetch an array of all the parties from the API?
Is state correctly updated to match the data from the API?
Are you passing the correct arguments to fetch?
Does the API return an error? If so, what is the error message?
Is there an event listener on the form? Does it correctly add a new party to the list of parties?
Is there an event listener attached to each delete button? Does it correctly remove a party from the list of parties?

https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF/recipes

General Return Schema
Every response is structured as follows:
`{
success: true, // or false
error: {
name: "ErrorName",
message: "This is an error message."
}, // or null
data: {
example: "This is some data."
}, // or null
}`

API
Remember to prefix each endpoint with /api/2309-FSA-ET-WEB-FT-SF

Resources
These are the resources available in the API.

/recipes

{
id: 1,
name: "Recipe Name",
imageUrl: "https://www.example.com/image.jpg",
description: "This is a description of the recipe."
}

/artists
{
id: 1,
name: "Artist Name",
imageUrl: "https://www.example.com/image.jpg",
description: "This is a description of the artist."
}

/events
{
id: 1,
name: "Event Name",
description: "This is a description of the event.",
date: "2021-09-30T00:00:00.000Z", // Date ISO string
location: "123 Street"
}

/guests
{
id: 1,
name: "Guest Name",
email: "guest@email.com",
phone: "123-456-7890"
}

Endpoints
Each resource has the following endpoints:

GET /<resource>
Sends an array of objects for the requested resource.

GET /<resource>/<id>
Sends a single object identified by the given id.

POST /<resource>
Attempts to create a new object. If successful, the created object is returned.

PUT /<resource>/<id>
Attempts to update the object identified by the given id. If successful, the updated object is returned.

DELETE /<resource>/<id>
Attempts to delete the object identified by the given id. Sends status code 204 if successful.
