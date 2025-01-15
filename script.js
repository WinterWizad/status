
    // Load skills from localStorage when the page loads
    document.addEventListener('DOMContentLoaded', loadSkills);
    document.addEventListener('DOMContentLoaded', loadpjSkills);

    function titleColor(){
    const spans = document.querySelectorAll('.my-title');
    const links= document.querySelectorAll('.my-social-link');
    let colors = ['red', 'blueviolet', 'green'];
    
    spans.forEach((span, index) => {
        span.style.color = colors[index];
    });
     colors = ['lightblue', 'white', 'blue'];
    links.forEach((span, index) => {
        span.style.color = colors[index];
    });
}
titleColor();

    function loadpjSkills(){
        skills=[ {
                    "name": "Frontend Development",
                    "level": "85"
                },
                
                {
                    "name": "Backend Development",
                    "level": "73"
                },
                {
                    "name": "React-Framework",
                    "level": "56"
                },
                {
                    "name": "Python Programming",
                    "level": "77"
                },
                {
                    "name": "Machine Learning",
                    "level": "54"
                },
                {
                    "name": "Computer Vision",
                    "level": "69"
                },
                {
                    "name": "Presentation",
                    "level": "33"
                },
                {
                    "name": "Communication Skill",
                    "level": "50"
                },
                
                {
                    "name": "CSS",
                    "level": "69"
                },
                {
                    "name": "Deployment",
                    "level": "20"
                },
                {
                    "name": "UI/UX designing",
                    "level": "40"
                }
            ]
            
        
            
            skills.forEach(skill => renderpjSkills(skill));
        }
    
    function renderpjSkills(skill){
        const skillsList = document.getElementById('pj-skills-list');
        
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('pj-skill');
        
        skillDiv.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <input type="range" min="1" max="100" value="${skill.level}" class="skill-range" oninput="updateLevel(this)">
            <div class="skill-level">${skill.level}</div>
        `;
        
        skillsList.appendChild(skillDiv);

    }

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
            console.log(skills)
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

