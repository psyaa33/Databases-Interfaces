import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
    const supabase = createClient('https://ybyvrmdoijbktperwcah.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlieXZybWRvaWpia3RwZXJ3Y2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjE2MDAsImV4cCI6MjAzMTE5NzYwMH0.Pd4JI906RsaOXS_y5HkxBf6oY53ZE5RflPnsKjV__YM');
    
   // Function to search people by name or license number
async function searchPeople() {
    const nameOrLicense = document.getElementById('name').value.toLowerCase(); // Get the input value and convert to lowercase
    const { data, error } = await supabase
    .from('People')
    .select('*')
    .or(`Name.ilike.%${nameOrLicense}%,LicenseNumber.eq.${nameOrLicense}`);
    
    if (error) {
    console.error('Error fetching data:', error.message);
    return;
    }
    
    const searchResult = document.querySelector('.search_result');
    searchResult.innerHTML = ''; // Clear previous search results
    
    if (data.length === 0) {
    searchResult.innerHTML = '<div class="error"><p>No matching records found.</p></div>';
    return;
    }
    
    // Display all matching records, including multiple matches for the same name
    searchResult.innerHTML = data.map(person => `
    <div class="card">
    <p>Person ID: <span>${person.PersonID}</span></p>
    <p>Name: <span>${person.Name}</span></p>
    <p>Address: <span>${person.Address}</span></p>
    <p>Date of Birth: <span>${person.DOB}</span></p>
    <p>License Number: <span>${person.LicenseNumber}</span></p>
    <p>Expiry Date: <span>${person.ExpiryDate}</span></p>
    </div>
    `).join('');
    }
    
    // Add event listener to search button
    document.querySelector('input[type="button"]').addEventListener('click', searchPeople);