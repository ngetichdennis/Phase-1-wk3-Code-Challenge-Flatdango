# ReadMe

## Project Overview

This project is a web application for a cinema that allows users to view and buy tickets for a film. It utilizes the Fetch API to retrieve film data from a provided endpoint.

## Functionality

- Users can view a list of films by their titles.
- When a user clicks on a film title, the app displays detailed information about the film, including the poster, runtime, showtime, and the number of available tickets.
- Users can click the "Buy Ticket" button to purchase a ticket for the film.
- The app will update the number of available tickets in real-time.

## Installation and Usage

- To use this app, simply clone this repository and open the `index.html` file in your browser.
- Ensure that you have a running server that provides film data through the specified endpoint (`http://localhost:3000/films`).

## Dependencies

- This project relies on the Fetch API for making HTTP requests to retrieve film data.

## Implementation Details

- The DOM elements for rendering film details are retrieved at the beginning of the script.
- An empty object `filmObj` is initialized to store film details.
- The script fetches film data from the specified endpoint using the Fetch API.
- The film data is used to populate the DOM elements and render film details on the page.
- When a user clicks on a film title in the list, the script updates the DOM elements with the corresponding film details.
- The script listens for clicks on the "Buy Ticket" button. When clicked, the script updates the number of available tickets accordingly.

## Limitations

- The implementation generalises that the film data is provided in a specific format by the ENDPOINT server. Deviations from the format may result in incorrect data display or application failure.
- The implementation only supports one cinema and one showing of each film. For more advanced booking scenarios, additional features would be needed.

## Contributing

This application is public therefore any Contributions to this project are welcome. To contribute, follow the steps below:

1. Fork this repository.
2. Create a new branch with a descriptive name
3. Commit your changes to the new branch.
4. Push the new branch to your forked repository.
5. Submit a pull request from your forked repository to this repository.

## conclusion

the application achieved all the core deliverables.

## Recommendation

adding of bonus deliverables eg POST and DELETE
