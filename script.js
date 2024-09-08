// Get elements from the DOM
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Event listener for toggling the Skills section
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection) {
        // Check if the Skills section is currently hidden or visible
        var isHidden = skillsSection.style.display === 'none' || !skillsSection.style.display;
        if (isHidden) {
            // Show the Skills section with a fade-in effect
            skillsSection.style.display = 'block';
            setTimeout(function () {
                skillsSection.style.opacity = '1';
                skillsSection.style.transition = 'opacity 0.5s ease-in-out';
            }, 10);
        }
        else {
            // Hide the Skills section with a fade-out effect
            skillsSection.style.opacity = '0';
            skillsSection.style.transition = 'opacity 0.5s ease-in-out';
            setTimeout(function () {
                skillsSection.style.display = 'none';
            }, 500);
        }
    }
});
