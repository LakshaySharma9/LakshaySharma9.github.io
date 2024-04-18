document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelector('#messages');
    messages.style.display = 'none';
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', submitForm);
});

async function submitForm() {
    const name = document.querySelector('#name').value.trim();
    const feedback = document.querySelector('#feedback').value.trim();

    if (name || feedback) {
        const data = {
            name: name,
            feedback: feedback
        };

        try {
            const response = await fetch('https://comp165-6fef4-default-rtdb.firebaseio.com/msg.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Error saving data');
            }

            hideFormFetchDataWithAsyncAwait();
        } catch (error) {
            console.error('Error saving data: ', error.message);
        }
    } else {
        alert('Please fill in the field of course feedback.');
    }
}

async function hideFormFetchDataWithAsyncAwait() {
    hideForm();

    try {
        const response = await fetch('https://comp165-6fef4-default-rtdb.firebaseio.com/msg.json');
        const data = await response.json();

        const messages = document.querySelector('#messages');
        messages.innerHTML = '';

        for (const messageId in data) {
            const message = data[messageId];
            const messageElement = document.createElement('p');
            messageElement.textContent = `${message.name}: ${message.feedback}`;
            messages.appendChild(messageElement);
        }

        messages.style.display = 'block';
    } catch (error) {
        console.error('Error fetching and displaying messages:', error);
    }
}

function hideForm() {
    const submitForm = document.querySelector('#submitForm');
    const messages = document.querySelector('#messages');

    submitForm.style.display = 'none';
    messages.style.display = 'block';
}
