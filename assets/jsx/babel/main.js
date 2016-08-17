'use strict';

ReactDOM.render(React.createElement(Skillset, {
    items: ['C#', 'ASP.NET MVC', 'PHP', 'SOLID PRINCIPLES', 'C++', 'OPENCV', 'XAMARIN', 'ANDROID SDK', 'LARAVEL', 'JAVA', 'SQL SERVER', 'MONGODB', 'ORACLE 11G&12G', 'MONGODB', 'MYSQL', 'SQLITE', 'LINQ', 'PL/SQL', 'Image Processing', 'N-TIER ARCHITECTURE', 'SOA ARCHITECTURE', 'ANGULAR2', 'RASPBERRY', 'CODEIGNITER', 'UBUNTU', 'DEBIAN', 'MINT', 'WINDOWS', 'WINDOWS SERVER'] }), document.getElementById('skills'));
ReactDOM.render(React.createElement(Experiences, { source: 'data/experiences.json' }), document.getElementById('experiences'));
ReactDOM.render(React.createElement(Projects, { source: 'data/projects.json' }), document.getElementById('projects'));