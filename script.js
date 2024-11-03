var addSkillButton = document.getElementById("AddSkillButton");
var skillContainer = document.getElementById("AddSkillsContainer");
var resumeForm = document.getElementById("resume-container");
var resumePreviewElement = document.getElementById("Resume-Preview");
addSkillButton.addEventListener("click", function () {
    var newSkillInput = document.createElement("input");
    newSkillInput.name = "skills[]";
    newSkillInput.type = "text";
    newSkillInput.placeholder = "Enter Your Skill";
    newSkillInput.className = "skill-input";
    skillContainer.appendChild(newSkillInput);
});
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collecting personal information
    var pictureInput = document.getElementById("Picture");
    var pictureURL = '';
    if (pictureInput.files && pictureInput.files[0]) {
        pictureURL = URL.createObjectURL(pictureInput.files[0]);
    }
    var jobName = document.getElementById("JobName").value;
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("Email").value;
    var address = document.getElementById("Address").value;
    var country = document.getElementById("Country").value;
    var city = document.getElementById("City").value;
    var phone = document.getElementById("PhoneNumber").value;
    // Collecting work experience
    var companyName = document.getElementById("CompanyName").value;
    var yourLastJob = document.getElementById("YourLastJob").value;
    var jobDescription = document.getElementById("JobDescription").value;
    // Collecting skills
    var skills = "";
    var skillInputs = skillContainer.querySelectorAll("input[name='skills[]']");
    skillInputs.forEach(function (skillInput) {
        if (skillInput.value) {
            skills += "<li>".concat(skillInput.value, "</li>");
        }
    });
    // Collecting education information
    var instituteName = document.getElementById("InstituteName").value;
    var degree = document.getElementById("Degree").value;
    var yearsOfEducation = document.getElementById("YearsOfEducation").value;
    var educationDescription = document.getElementById("EducationTextArea").value;
    var resumeContent = "\n\t\t<h2>Your Resume</h2><hr style=\"border: 1px solid #aaaaaa; margin: 10px 0;\">\n\t\t<h3>Personal Information</h3><hr style=\"border: 1px solid #333; margin: 10px 0;\">\n\t  ".concat(pictureURL ? "<img src=\"".concat(pictureURL, "\" alt=\"Profile Picture\" style=\"width:100px; height:auto; border-radius:50%; display:block; margin:10px 0;\" />") : "", "\n\t\t<p><strong>Job Name:</strong><span contenteditable=\"true\"> ").concat(jobName, "</span></p>\n\t\t<p><strong>First Name:</strong><span contenteditable=\"true\"> ").concat(firstName, "</span></p>\n\t\t<p><strong>Last Name:</strong><span contenteditable=\"true\"> ").concat(lastName, "</span></p>\n\t\t<p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n\t\t<p><strong>Address:</strong><span contenteditable=\"true\"> ").concat(address, "</span></p>\n\t\t<p><strong>Country:</strong><span contenteditable=\"true\"> ").concat(country, "</span></p>\n\t\t<p><strong>City:</strong><span contenteditable=\"true\"> ").concat(city, "</span></p>\n\t\t<p><strong>Phone Number:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n\n\t\t<h3>Work Experience</h3><hr style=\"border: 1px solid #aaaaaa; margin: 10px 0;\">\n\t\t<p><strong>Company Name:</strong> <span contenteditable=\"true\">").concat(companyName, "\n\t\t</span></p>\n\t\t<p><strong>Last Job:</strong> ").concat(yourLastJob, "</span></p>\n\t\t<p><strong>Job Description:</strong><span contenteditable=\"true\"> ").concat(jobDescription, "</span></p>\n\n\t\t<h3>Skills</h3><hr style=\"border: 1px solid #aaaaaa; margin: 10px 0;\">\n\t\t<ul><span contenteditable=\"true\">").concat(skills, "</span></ul>\n\n\t\t<h3>Education</h3><hr style=\"border: 1px solid #aaaaaa; margin: 10px 0;\">\n\t\t<p><strong>Institute Name:</strong> <span contenteditable=\"true\">").concat(instituteName, "\n\t\t</span></p>\n\t\t<p><strong>Degree:</strong><span contenteditable=\"true\"> ").concat(degree, "</span></p>\n\t\t<p><strong>Years of Education:</strong> <span contenteditable=\"true\">").concat(yearsOfEducation, "</span></p>\n\t\t<p><strong>Education Description:</strong><span contenteditable=\"true\"> ").concat(educationDescription, "</span></p>\n\t");
    resumePreviewElement.innerHTML = resumeContent;
});
