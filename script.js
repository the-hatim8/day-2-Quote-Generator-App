let quotbox = document.getElementById('quote');
let authorbox = document.getElementById('author');

async function getquote(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'HhmURlQop3RUV6S3/5ypCg==eiufGKkwmUJ97xhR', // Replace with your actual API key
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // Accessing the quote, author, and category
        if (Array.isArray(data) && data.length > 0) {
            const { quote, author } = data[0]; // Destructure the first object
            quotbox.innerHTML = `"${quote}"`;
            authorbox.innerHTML = `${author}`
        } else {
            console.log('No quotes found.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const api_url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
getquote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quotbox.innerHTML + "---- by: " + authorbox.innerHTML, "Tweet Window", "width=600, height=300")
}
