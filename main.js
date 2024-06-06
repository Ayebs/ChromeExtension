document.addEventListener("DOMContentLoaded", function() {
    const affirmationElement = document.getElementById('affirmation');
    const newAffirmationButton = document.getElementById('new-affirmation');

    
    const getRandomAffirmation = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/affirmations/random');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json();
            affirmationElement.textContent = data.text;
        } catch (error) {
            affirmationElement.textContent = 'Error fetching affirmation';
            console.error('Error:', error);
        }
    };

    newAffirmationButton.addEventListener('click', () => {
        getRandomAffirmation();
    });

    getRandomAffirmation();
})