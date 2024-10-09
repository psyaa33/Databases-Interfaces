import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
    const supabase = createClient('https://ybyvrmdoijbktperwcah.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlieXZybWRvaWpia3RwZXJ3Y2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjE2MDAsImV4cCI6MjAzMTE5NzYwMH0.Pd4JI906RsaOXS_y5HkxBf6oY53ZE5RflPnsKjV__YM');
    async function addVehicle() {

        const plateNumber = document.getElementById('rego').value.toUpperCase(); 
        const make = document.getElementById('make').value;
        
        const model = document.getElementById('model').value;
        
        const colour = document.getElementById('colour').value;
        
        const ownerID = document.getElementById('ownerID').value;
        
        const { data, error } = await supabase
        
        .from('Vehicles')
        
        .insert([{ PlateNumber: plateNumber, Make: make, Model: model, Colour: colour, OwnerID: ownerID }]);
        
        
        if (error) {
        
        console.error('Error adding new vehicle:', error.message);
        
        return;
        
        }
        
        const messageDiv = document.getElementById('message');
        
        messageDiv.innerHTML = '<p>Vehicle added successfully</p>';
        
        }
        
        document.querySelector('input[type="button"]').addEventListener('click', addVehicle);
