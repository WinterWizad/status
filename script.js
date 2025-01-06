
    // Load skills from localStorage when the page loads
    document.addEventListener('DOMContentLoaded', loadSkills);

    function addSkill() {
        const skillName = prompt('Enter new skill name:');
        const skillLevel = prompt('Enter skill level (1-100):', 50);

        if(skillName && skillLevel && !isNaN(skillLevel) && skillLevel >= 1 && skillLevel <= 100) {
            const skill = {
                name: skillName,
                level: skillLevel
            };
            saveSkill(skill);
            renderSkill(skill);
        } else {
            alert('Please enter a valid skill name and level between 1 and 100.');
        }
    }

    function saveSkill(skill) {
        let skills = JSON.parse(localStorage.getItem('skills')) || [];
        skills.push(skill);
        localStorage.setItem('skills', JSON.stringify(skills));
    }

    function loadSkills() {
        const skills = JSON.parse(localStorage.getItem('skills')) || [];

        if(skills.length > 0){
            var skillsList = document.getElementById('skills-list');
            skillsList.innerHTML=" ";
    }
    skills.forEach(skill => renderSkill(skill));
   
    }

    function renderSkill(skill) {
        const skillsList = document.getElementById('skills-list');
        
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        
        skillDiv.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <input type="range" min="1" max="100" value="${skill.level}" class="skill-range" oninput="updateLevel(this)">
            <div class="skill-level">${skill.level}</div>
        `;
        
        skillsList.appendChild(skillDiv);
    }

    function updateLevel(range) {
        const skillLevelDiv = range.nextElementSibling;
        skillLevelDiv.textContent = range.value;
        
        // Update localStorage with new skill level
        const skills = Array.from(document.querySelectorAll('.skill'));
        const updatedSkills = skills.map(skill => {
            return {
                name: skill.querySelector('.skill-name').textContent,
                level: skill.querySelector('.skill-range').value
            };
        });
        localStorage.setItem('skills', JSON.stringify(updatedSkills));
    }

