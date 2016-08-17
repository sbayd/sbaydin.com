

var experiencesDataJson = {};
function initExperiences() {
    jQuery.getJSON('data/experiences.json').done(function (data) {
        experiencesDataJson = data;
    })
}



