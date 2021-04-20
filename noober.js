// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Retrieve passenger details, store it in memory
  let ridepassengerDetails = ride.passengerDetails

  // Retrieve ride pickup location, store it in memory
  let ridepickupLocation = ride.pickupLocation

  // Retrieve ride drop off location, store it in memory
  let ridedropoffLocation = ride.dropoffLocation

  // Retrieve whether a Noober Purple was requested, store it in memory
  let purpleRequested = ride.purpleRequested

  // Retrieve number of passengers requested, store it in memory
  let numberOfPassengers = ride.numberOfPassengers

  // Set Up Conditionals
  // Parse the data given in the random ride Object, and present it in human-readable format
  if (purpleRequested == true) { // If Noober Purple is requested
    console.log(`Noober Purple Passenger: ${ridepassengerDetails.first} ${ridepassengerDetails.last} - ${ridepassengerDetails.phoneNumber}. Pickup at ${ridepickupLocation.address}, ${ridepickupLocation.city}, ${ridepickupLocation.state} ${ridepickupLocation.zip}. Drop-off at ${ridedropoffLocation.address}, ${ridedropoffLocation.city}, ${ridedropoffLocation.state} ${ridedropoffLocation.zip}.`)
  } else if (purpleRequested == false && (numberOfPassengers > 3)) {  // If Noober Purples is not requested and Noober XL is required
    console.log(`Noober XL Passenger: ${ridepassengerDetails.first} ${ridepassengerDetails.last} - ${ridepassengerDetails.phoneNumber}. Pickup at ${ridepickupLocation.address}, ${ridepickupLocation.city}, ${ridepickupLocation.state} ${ridepickupLocation.zip}. Drop-off at ${ridedropoffLocation.address}, ${ridedropoffLocation.city}, ${ridedropoffLocation.state} ${ridedropoffLocation.zip}.`)
  } else if (purpleRequested == false && (numberOfPassengers <= 3)) {  // If Noober Purples is not requested and Noober XL is not required
    console.log(`Noober X Passenger: ${ridepassengerDetails.first} ${ridepassengerDetails.last} - ${ridepassengerDetails.phoneNumber}. Pickup at ${ridepickupLocation.address}, ${ridepickupLocation.city}, ${ridepickupLocation.state} ${ridepickupLocation.zip}. Drop-off at ${ridedropoffLocation.address}, ${ridedropoffLocation.city}, ${ridedropoffLocation.state} ${ridedropoffLocation.zip}.`)
  }

  // 🔥 YOUR CODE ENDS HERE 🔥
})
