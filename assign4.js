
const form = document.getElementById('idForm');
const idCard = document.getElementById('idCard');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch input values
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0];

    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoURL = e.target.result;

            // Create the ID Card
            idCard.innerHTML = `
                <img src="${photoURL}" alt="Profile Photo">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Course:</strong> ${course}</p>
                <p><strong>Year:</strong> ${year}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
            `;
        };
        reader.readAsDataURL(photoFile);
    }
});
