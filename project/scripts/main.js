// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic event list
    const events = [
        { name: 'Youth Entrepreneurship Workshop', date: '2024-06-15' },
        { name: 'Women in Tech Conference', date: '2024-07-22' },
        { name: 'Innovation Pitch Day', date: '2024-08-10' }
    ];

    const eventList = document.getElementById('event-list');
    if (eventList) {
        events.forEach(event => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${event.name}</h3>
                <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
            `;
            eventList.appendChild(li);
        });
    }

    // Success stories carousel
    const stories = [
        { name: 'Sahbu', title: 'Tech Startup Founder', image: '../images/success-stories/story1.jpg' },
        { name: 'Aba', title: 'Social Entrepreneur', image: '../images/success-stories/story2.jpg' },
        { name: 'Aisha', title: 'AI Researcher', image: '../images/success-stories/story3.jpg' }
    ];

    const storyCarousel = document.querySelector('.story-carousel');
    if (storyCarousel) {
        stories.forEach(story => {
            const storyElement = document.createElement('div');
            storyElement.className = 'story';
            storyElement.innerHTML = `
                <img src="${story.image}" alt="${story.name}" loading="lazy">
                <h3>${story.name}</h3>
                <p>${story.title}</p>
            `;
            storyCarousel.appendChild(storyElement);
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }

    // Contact form submission
    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(messageForm);
            const formValues = Object.fromEntries(formData.entries());
            console.log('Form submission:', formValues);
            alert('Thank you for your message. We will get back to you soon!');
            messageForm.reset();
        });
    }
});