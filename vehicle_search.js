import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabase = createClient('https://ybyvrmdoijbktperwcah.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlieXZybWRvaWpia3RwZXJ3Y2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjE2MDAsImV4cCI6MjAzMTE5NzYwMH0.Pd4JI906RsaOXS_y5HkxBf6oY53ZE5RflPnsKjV__YM');
    
async function searchVehicle() {

    const plateNumber = document.getElementById('info').value.toUpperCase(); // Get the input value and convert to uppercase
    
    const { data, error } = await supabase
    
    .from('Vehicles')
    
    .select('*')
    
    .eq('PlateNumber', plateNumber);
    
    
    if (error) {
    
    console.error('Error fetching data:', error.message);
    
    return;
    
    }
    
    
    const searchResult = document.querySelector('.search_result');
    
    searchResult.innerHTML = ''; // Clear previous search results
    
    
    if (data.length === 0) {
    
    searchResult.innerHTML = '<div class="error"><p>No matching records found for the vehicle.</p></div>';
    
    return;
    
    }
    
    
    // Display appropriate message if owner is unknown
    
    const ownerName = data[0].OwnerName || 'Unknown';
    
    const ownerLicense = data[0].OwnerLicense || 'Unknown';
    
    
    // Display details of the vehicle and its owner
    
    searchResult.innerHTML = data.map(vehicle => `
    
    <div class="card">
    
    <p>Vehicle ID: <span>${vehicle.VehicleID}</span></p>
    
    <p>Make: <span>${vehicle.Make}</span></p>
    
    <p>Model: <span>${vehicle.Model}</span></p>
    
    <p>Colour: <span>${vehicle.Colour}</span></p>
    
    <p>Owner's Name: <span>${ownerName}</span></p>
    
    <p>Owner's License Number: <span>${ownerLicense}</span></p>
    
    </div>
    
    `).join('');
    
    }
    
    
    // Add event listener to search button
    
    document.querySelector('input[type="button"]').addEventListener('click', searchVehicle);