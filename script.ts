// Get elements from the DOM
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

// Event listener for toggling the Skills section
toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection) {
        // Check if the Skills section is currently hidden or visible
        const isHidden = skillsSection.style.display === 'none' || !skillsSection.style.display;

        if (isHidden) {
            // Show the Skills section with a fade-in effect
            skillsSection.style.display = 'block';
            setTimeout(() => {
                skillsSection.style.opacity = '1';
                skillsSection.style.transition = 'opacity 0.5s ease-in-out';
            }, 10);
        } else {
            // Hide the Skills section with a fade-out effect
            skillsSection.style.opacity = '0';
            skillsSection.style.transition = 'opacity 0.5s ease-in-out';
            setTimeout(() => {
                skillsSection.style.display = 'none';
            }, 500);
        }
    }
});
