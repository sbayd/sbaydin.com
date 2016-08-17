ReactDOM.render(
    <Skillset
        items={ ['C#', 'ASP.NET MVC', 'PHP', 'SOLID PRINCIPLES', 'C++', 'OPENCV', 'XAMARIN', 'ANDROID SDK', 'LARAVEL', 'JAVA', 'SQL SERVER', 'MONGODB', 'ORACLE 11G&12G', 'MONGODB', 'MYSQL', 'SQLITE', 'LINQ', 'PL/SQL', 'Image Processing', 'N-TIER ARCHITECTURE', 'SOA ARCHITECTURE', 'ANGULAR2', 'RASPBERRY', 'CODEIGNITER', 'UBUNTU', 'DEBIAN', 'MINT', 'WINDOWS', 'WINDOWS SERVER'] }/>,
    document.getElementById('skills')
);
ReactDOM.render(<Experiences source="data/experiences.json" />,document.getElementById('experiences'));
ReactDOM.render(<Projects source="data/projects.json" />,document.getElementById('projects'));
