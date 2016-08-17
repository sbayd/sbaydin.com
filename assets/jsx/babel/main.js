"use strict";

ReactDOM.render(React.createElement(Experiences, { source: "data/experiences.json" }), document.getElementById('experiences'));
ReactDOM.render(React.createElement(Projects, { source: "data/projects.json" }), document.getElementById('projects'));
ReactDOM.render(React.createElement(Skillset, { source: "data/skills.json" }), document.getElementById('skills'));