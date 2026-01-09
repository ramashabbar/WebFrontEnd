const dateButtons = document.querySelectorAll('.datebtn');
const timesContainer = document.querySelector('.times');
const bookNowDiv = document.querySelector('.now');  // The div containing the "Book Now!" button
const bookNowButton = document.querySelector('.booknow'); // The "Book Now!" button

const showTimes = {
    "THU 14 NOV": ["10:00", "11:30", "13:00", "14:30", "16:00"],
    "FRI 15 NOV": ["12:00", "13:30", "15:00", "16:30", "18:00"],
    "SAT 16 NOV": ["10:00", "11:30", "13:00", "14:30", "16:00"],
    "SUN 17 NOV": ["10:00", "11:30", "13:00", "14:30", "16:00"],
    "MON 18 NOV": ["10:00", "11:30", "13:00", "14:30", "16:00"],
    "TUE 19 NOV": ["10:00", "11:30", "13:00", "14:30", "16:00"],
    "WED 20 NOV": ["10:00", "11:30", "13:00", "14:30", "16:00"]
};

// Function to update the times
function updateTimes(selectedDate) {
    // Clear existing time buttons
    timesContainer.innerHTML = '';

    // Get times for the selected date
    const times = showTimes[selectedDate];
    if (times) {
        times.forEach(time => {
            const button = document.createElement('button');
            button.textContent = time;
            button.classList.add('timebtn');
            timesContainer.appendChild(button);
        });
        // Show the border around the times container
        timesContainer.style.border = '3px solid white'; // Reveal border
        timesContainer.style.backgroundColor= "#555"
    }
}

// Event listener for date buttons
dateButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update time slots
        updateTimes(button.textContent);

        // Reset styles for all buttons
        dateButtons.forEach(btn => {
            btn.style.borderColor = 'white';
            btn.style.backgroundColor = '#555'; // Default color
        });

        // Apply active styles to the clicked button
        button.style.borderColor = 'red';
        button.style.backgroundColor = '#333'; // Keep darker background

         // Hide the "Book Now!" button until a time is selected
        bookNowDiv.style.display = 'none'; 
    });
});


// Event listener for time buttons
timesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('timebtn')) {
        // Deselect any previously selected time button
        const selectedButton = timesContainer.querySelector('.timebtn.selected');
        if (selectedButton) {
            selectedButton.classList.remove('selected');
            selectedButton.style.backgroundColor = '#444'; // Default background
            selectedButton.style.borderColor = '#777'; // Default border color
        }

        // Select the clicked time button
        event.target.classList.add('selected');
        event.target.style.backgroundColor = '#333'; // Darker background
        event.target.style.borderColor = 'red'; // Red border

        //Show the "Book Now!" button after selecting a time
        bookNowDiv.style.display = 'block';  // Show the button when a time is selected
    }
});