# Vehicle and People Information System

## Introduction
This project aims to provide a simple interface for querying and updating information about vehicles and people stored in a database. It supports functionalities like searching for people by names or driving license numbers and vehicles by registration number, as well as adding new vehicles to the system.

## Technologies Used
- HTML
- CSS
- JavaScript
- Supabase as a backend service

## Workspace
### HTML
Implemented three distinct pages (`people_search.html`, `vehicle_search.html`, `add_vehicle.html`) each tailored to different user interactions as required by the project specifications. Each page includes semantic HTML5 elements (`<header>`, `<main>`, `<aside>`, `<footer>`) ensuring a structured and accessible document outline. Navigation consistency is maintained across all pages with responsive design to adapt to different devices.

#### Semantic HTML for Main Navigation
```html
<header>
    <h1>Add Vehicle</h1>
    <ul class="links">
        <li><a href="people_search.html">People search</a></li>
        <li><a href="vehicle_search.html">Vehicle search</a></li>
        <li><a href="add_vehicle.html">Add a vehicle</a></li>
    </ul>
</header>
 ```
This snippet from add_vehicle.html demonstrates the use of semantic HTML for creating a consistent and accessible navigation header that enhances SEO and user navigation experience.

#### HTML Form for Adding Vehicles
```html
<form>
    <div class="info">
        <label>Vehicle Registration/Plate Number:</label>
        <input id="rego" type="text">
    </div>
    <div class="info license">
        <label>Vehicle Make:</label>
        <input id="make" type="text">
    </div>
    <div class="info license">
        <label>Vehicle Model:</label>
        <input id="model" type="text">
    </div>
    <div class="info license">
        <label>Vehicle Colour:</label>
        <input id="colour" type="text">
    </div>
    <input type="button" value="Add">
</form>
```
This form in add_vehicle.html is specifically designed to capture detailed information about vehicles, showcasing how form elements can be effectively organized and labeled for user ease.

#### Dynamic Data Display Function
```HTML
function displayResults(vehicles) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = vehicles.map(vehicle => `
        <div class="vehicle-info">
            <p>Vehicle ID: ${vehicle.VehicleID}</p>
            <p>Make: ${vehicle.Make}</p>
            <p>Model: ${vehicle.Model}</p>
            <p>Colour: ${vehicle.Colour}</p>
        </div>
    `).join('');
}

```
This function dynamically generates HTML content to display search results, illustrating the ability to manipulate the DOM based on backend data.



### CSS
- Utilized a single external stylesheet (`style.css`) for all pages to ensure uniformity and reduce code redundancy.
- Enhanced user interface through advanced CSS techniques like Flexbox for navigation links and Grid layout for overall page structure, improving the visual appeal and usability.

#### CSS Flexbox for Navigation
```CSS
.links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px 0;
}

````
This CSS rule from style.css demonstrates the use of Flexbox to evenly space and align navigation links across the header, providing a fluid and adaptable navigation interface.

#### Responsive CSS Grid Layout
```CSS
#container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: repeat(3, auto);
    background-color: #eee;
}
@media screen and (max-width: 500px) {
    #container {
        grid-template-columns: 1fr;
    }
}
````
This snippet shows the use of CSS Grid for responsive layout design in style.css, ensuring that the application adapts to different screen sizes by adjusting the grid layout as necessary.

#### Advanced CSS for Form Styling
```CSS
.info input {
    width: 70%;
    margin: 10px 15%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
}
```
This CSS rule enhances the form inputs with style considerations that not only improve usability but also the aesthetic appeal, demonstrating attention to detail in user interface design.

### JavaScript
- Added functionalities to interact with the Supabase backend for data operations, showcasing effective use of asynchronous programming and API integration.
#### JavaScript Function for Adding Vehicles
```JavaScript
async function addVehicle() {
    const plateNumber = document.getElementById('rego').value.toUpperCase();
    const { data, error } = await supabase
        .from('Vehicles')
        .insert([{ PlateNumber: plateNumber, Make: make, Model: model, Colour: colour, OwnerID: ownerID }]);

    if (error) {
        console.error('Error adding new vehicle:', error.message);
        return;
    }
    document.getElementById('message').innerHTML = '<p>Vehicle added successfully</p>';
}

```
This JavaScript snippet in add_vehicle.js demonstrates adding new vehicle data to the database using Supabase, highlighting error handling and user feedback.

#### JavaScript Function for Vehicle Search
```JavaScript
async function searchVehicle() {
    const vehicleID = document.getElementById('search').value.toUpperCase();
    const { data, error } = await supabase
        .from('Vehicles')
        .select('*')
        .eq('VehicleID', vehicleID);

    if (error) {
        console.error('Error fetching data:', error.message);
        return;
    }
    if (data.length > 0) {
        displayResults(data);
    } else {
        document.getElementById('results').innerHTML = 'No vehicle found with that ID.';
    }
}

```
This JavaScript snippet in vehicle_search.js demonstrates how to fetch and display vehicle data from Supabase, using error handling and conditional rendering based on query results.


### Database
- Configured the Supabase database to interact seamlessly with the front-end, enabling robust data management and operations.
- Ensured that database interactions adhere to security best practices, maintaining data integrity and user privacy.

### Conclusion
This project serves as a practical solution for managing and retrieving vehicle and people information efficiently. The use of modern web technologies has facilitated the creation of a responsive and user-friendly interface.