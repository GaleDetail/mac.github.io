# Metaphoric Cards Online

This is a React application for managing and displaying metaphorical cards online. Users can add, remove, and manage cards, as well as change the background image of the main area. The app features modals for adding cards and selecting backgrounds, pagination for background selection, and basic functionalities for saving and exporting results.

## Features

- **Add Cards**: Select and add metaphorical cards to the main area.
- **Remove Cards**: Remove individual or all cards from the main area.
- **Change Background**: Select and apply different background images to the main area.
- **Pagination**: Browse through background options with pagination.
- **Search Backgrounds**: Search for background images by name.
- **Save Work**: Save the current state of the cards.
- **Export Results**: Export the current state of the cards.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/metaphoric-cards-online.git
    cd metaphoric-cards-online
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

   Your application should now be running at `http://localhost:3000`.

## Project Structure

- `src/`: Contains all the source code for the application.
    - `components/`: Contains React components.
    - `Home.js`: The main component for the application.
    - `Home.css`: CSS file for styling the `Home` component.
    - `data/`: Directory for storing static data (e.g., background images).

## Usage

- **Add a Card**: Click the "Add Card" button in the sidebar to open the card selection modal. Choose a card from the dropdown menu to add it to the main area.
- **Remove All Cards**: Click the "Remove All Cards" button to clear all cards from the main area.
- **Change Background**: Click the "Change Background" button to open the background selection modal. Search for and select a background image to apply it to the main area.
- **Save Work**: Click the "Save Work" button to log the current state of the cards to the console.
- **Export Results**: Click the "Export Results" button to log the current state of the cards to the console.

## Dependencies

- `react-bootstrap`: Provides Bootstrap components for React.
- `bootstrap`: Bootstrap CSS framework.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with improvements or bug fixes.

## Contact

For any questions or issues, please contact [your-email@example.com](mailto:your-email@example.com).
